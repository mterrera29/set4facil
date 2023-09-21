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
import DrawerAppBar from './components/NavBar';
import imagen from "./assets/fondo2.gif"

function App() {
  const [id,setId] = useState(1)
  const [data, setData] = useState({})
  const {register, formState:{errors}, handleSubmit} = useForm()
  const [escuelas, setEscuelas] = useState([{id:id}]);
  const [page, setPage] = useState(0)
  const [defaultData, setDefaultData] = useState()
  
  const dataLocal = JSON.parse(localStorage.getItem(`data`))

  useEffect(() => {
    dataLocal && setDefaultData(dataLocal)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(defaultData)

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
    console.log("submit!")
  }
  console.log(data)
  return (
    <div className='main'>
      <DrawerAppBar/>
      <section className={page ===0? "contentLanding": "content"}>
        <article className='cardContent'>
           <div className={page ===0 &&"landing"} style={{padding:"10px", marginTop:"60px"}}>
            {
              page ===0 &&
              <>
                <article style={{display:"flex", justifyContent:"center", gridArea:"img"}}>
                  <img src={imagen} alt="" style={{width:"80%", height:"auto"}} />
                </article>
                <article style={{gridArea:"text", display:"flex", flexDirection:"column", margin:"auto", alignItems:"center"}}> 
                    <div style={{fontSize:"40px", textAlign:"center", fontWeight:"bold", lineHeight:"1.125"}}>Completar el SET4 ahora es más facil</div>
                    <div style={{fontSize:"20px", textAlign:"center", lineHeight:"1.125", color:"rgb(82, 82, 82, 0.8)", marginBottom:"10px"}}>
                    Optimiza tu tiempo y simplifica el proceso: ¡Completa el SET4 de manera sencilla y eficiente!
                    </div>
                    <section style={{display:"flex", justifyContent:"center", width:"100%"}}>
                      <Button color='success' variant="contained" style={{width:"100%"}} onClick={()=>nextPage()}>
                        Completar SET4
                      </Button>
                  </section>
                </article>
              </>
            }
            <form onChange={handleSubmit(onSubmit)}  className='form' style={{position:"relative"}} onSubmit={(e) => {
                e.preventDefault(); // Previene la recarga de la página
                handleSubmit(onSubmit)();
                nextPage();
              }}>
              {page ===1 &&<FormDatos register={register} defaultData={defaultData} errors={errors} />}
              {page ===2 &&<FormEscuelasTodas defaultData={defaultData} agregarEscuela={agregarEscuela} register={register} escuelas={escuelas} eliminarEscuela={eliminarEscuela} handleSubmit={handleSubmit} />}
              {page ===3 &&<FormLugarFecha defaultData={defaultData} register={register}/>}
              {page ===4 &&
              <>
                <FormCompleted data={data} escuelas={escuelas} />
                <Button variant="contained" color='success' onClick={()=>{
                  handleSubmit(onSubmit)
                  nextPage()
                  saveLocal()
                  }}
                > Generar SET4</Button>
              </>
              }
              {page ===5 &&<GeneratePDF color='success' escuelas={escuelas} data={data} />}
              {(page >0 && page<4 ) &&<div style={{ width:"100%", display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
              <ButtonGroup variant="contained" aria-label="outlined secondary button group" className='mt-3'>
              <Button color='success'  onClick={()=>previuosPage()}>{"< Anterior"}</Button>
              <Button  color='success' type="submit" disabled={page > 4} className={page > 4 ? "disabled" : ""}>{"Siguiente >"}</Button>
              </ButtonGroup>
              </div>}
              {(page >3 && page<6 ) &&<div style={{ width:"100%", display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
              <Button className='mt-3' color='success' variant="outlined" onClick={()=>previuosPage()}>{"< Volver"}</Button>
              </div>}
            </form>
          </div>
        </article>
      </section>
    </div>
  );
}
export default App