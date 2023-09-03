import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form"
import "./App.css"
import FormPeriodo from './components/FormPeriodo';
import FormDatos from './components/FormDatos';
import FormEscuelasTodas from './components/FormEscuelasTodas';
import FormLugarFecha from './components/FormLugarFecha';
import GeneratePDF from './components/GeneratePDF';
import { Button } from 'react-bootstrap';
import FormCompleted from './components/FormCompleted';

function App() {
  const [id,setId] = useState(1)
  const [data, setData] = useState({})
  const {register, formState:{errors}, handleSubmit} = useForm()
  const [escuelas, setEscuelas] = useState([{id:id}]);
  const [page, setPage] = useState(0)

  const dataLocal = JSON.parse(localStorage.getItem(`data`))

  const nextPage = ()=>{
    handleSubmit(onSubmit)
    if(page<6) return setPage(prevPage=> prevPage +1)
  }

  const previuosPage = ()=>{
    if(page>0) return setPage(prevPage=> prevPage -1)
  }

  const agregarEscuela = () => {
    setId(prevID => prevID+1)
    setEscuelas([...escuelas, {id:id+1}]);
  };

  
  const eliminarEscuela = (index, id) => {
    if(escuelas.length>1){
      const nuevasEscuelas = [...escuelas];
      nuevasEscuelas.splice(index, 1);
      setEscuelas(nuevasEscuelas);
  
      const newData = { ...data };
      delete newData.escuelas[`escuela${id}`];
      setData(newData);
    }
  };

  useEffect(() => {
    if(data.length === 0){
      setData(dataLocal)
    }
  }, [data, dataLocal])

  const saveLocal = () => {localStorage.setItem(`data`, JSON.stringify(data)) };
  
  const onSubmit = (data)=>{
    setData(data);
    saveLocal()
    console.log("submit")
  }
  console.log(data)
  console.log(errors)
  
  return (
    <div className='main'>
        {
          page ===0 &&<Button onClick={()=>nextPage()}> Comenzar</Button>
        }
      
      <form onChange={handleSubmit(onSubmit)} className='form' style={{position:"relative"}} onSubmit={(e) => {
    e.preventDefault(); // Previene la recarga de la página
    handleSubmit(onSubmit)();
    nextPage();
  }}>
        {page ===1 &&<FormPeriodo register={register} />}
        {page ===2 &&<FormDatos register={register} errors={errors} />}
        {page ===3 &&<FormEscuelasTodas agregarEscuela={agregarEscuela} register={register} escuelas={escuelas} eliminarEscuela={eliminarEscuela} />}
        {page ===4 &&<FormLugarFecha register={register}/>}
        {page ===5 &&
        <>
          <FormCompleted data={data} escuelas={escuelas} />
          <Button onClick={()=>{
            handleSubmit(onSubmit)
            nextPage()
            }}
          > Generar SET4</Button>
        </>
        }
        
        {page ===6 &&<GeneratePDF escuelas={escuelas} data={data} />}
        {(page >0 && page<7 ) &&<div style={{ width:"100%", display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
        <Button onClick={()=>previuosPage()}> Anterior</Button>
        <Button type="submit" disabled={page > 4} className={page > 4 ? "disabled" : ""}>Siguiente</Button>
        </div>}
      </form>
      <br />
    </div>
  );
}
export default App