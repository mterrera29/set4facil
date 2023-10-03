/* eslint-disable react/prop-types */
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const NavButtons = ({previuosPage, page}) => {
  return (
    <>
      {(page >0 && page<4 ) &&
        <div style={{ width:"100%", display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
          <ButtonGroup variant="contained" aria-label="outlined secondary button group" className='mt-3'>
            <Button color='success'  onClick={()=>previuosPage()}>
              {"< Anterior"}
            </Button>
            <Button  color='success' type="submit" disabled={page > 4} className={page > 4 ? "disabled" : ""}>       
              {"Siguiente >"}
            </Button>
          </ButtonGroup>
        </div>}
        {(page >3 && page<6 ) &&
        <div style={{ width:"100%", display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
          <Button className='mt-3' color='success' variant="outlined" onClick={()=>previuosPage()}>
            {"< Volver"}
          </Button>
        </div>}
    </>
  )
}

export default NavButtons