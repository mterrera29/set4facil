/* eslint-disable react/prop-types */
import imagen from "../assets/fondo2.gif"
import Button from '@mui/material/Button';

const MainTitleButton = ({nextPage}) => {
  return (
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
  )
}

export default MainTitleButton