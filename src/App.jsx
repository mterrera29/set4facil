import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form"
import "./App.css"
import FormDatos from './components/FormDatos';
import FormEscuelasTodas from './components/FormEscuelasTodas';
import FormLugarFecha from './components/FormLugarFecha';
import GeneratePDF from './components/GeneratePDF';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import FormCompleted from './components/FormCompleted';
import Card from 'react-bootstrap/Card';
import DrawerAppBar from './components/NavBar';

function App() {
  const [id,setId] = useState(1)
  const [data, setData] = useState({})
  const {register, formState:{errors}, handleSubmit} = useForm()
  const [escuelas, setEscuelas] = useState([{id:id}]);
  const [page, setPage] = useState(0)

  const dataLocal = JSON.parse(localStorage.getItem(`data`))

  const nextPage = ()=>{
    handleSubmit(onSubmit)
    if(page<5) return setPage(prevPage=> prevPage +1)
    console.log("eaaa")
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
  }
  console.log(data)
  return (
    <div className='main'>
      <DrawerAppBar/>
      <Card style={{padding:"20px", marginTop:"60px"}}>
        {
          page ===0 &&<Button variant="contained" onClick={()=>nextPage()}>Completar SET4</Button>
        }
        <form onChange={handleSubmit(onSubmit)} className='form' style={{position:"relative"}} onSubmit={(e) => {
            e.preventDefault(); // Previene la recarga de la página
            handleSubmit(onSubmit)();
            nextPage();
          }}>
          {page ===1 &&<FormDatos register={register} errors={errors} />}
          {page ===2 &&<FormEscuelasTodas agregarEscuela={agregarEscuela} register={register} escuelas={escuelas} eliminarEscuela={eliminarEscuela} />}
          {page ===3 &&<FormLugarFecha register={register}/>}
          {page ===4 &&
          <>
            <FormCompleted data={data} escuelas={escuelas} />
            <Button variant="contained" onClick={()=>{
              handleSubmit(onSubmit)
              nextPage()
              saveLocal()
              }}
            > Generar SET4</Button>
          </>
          }
          {page ===5 &&<GeneratePDF escuelas={escuelas} data={data} />}
          {(page >0 && page<4 ) &&<div style={{ width:"100%", display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
          <ButtonGroup variant="contained" aria-label="outlined secondary button group" className='mt-3'>
          <Button  onClick={()=>previuosPage()}>{"< Anterior"}</Button>
          <Button  type="submit" disabled={page > 4} className={page > 4 ? "disabled" : ""}>{"Siguiente >"}</Button>
          </ButtonGroup>
          </div>}
          {(page >3 && page<6 ) &&<div style={{ width:"100%", display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
          <Button className='mt-3' color="primary" variant="outlined" onClick={()=>previuosPage()}>{"< Volver"}</Button>
          </div>}
        </form>
      </Card>
      <br />
    </div>
  );
}
export default App