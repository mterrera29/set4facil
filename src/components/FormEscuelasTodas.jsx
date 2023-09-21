/* eslint-disable react/prop-types */
import FormEscuela from './FormEscuela'
import Button from '@mui/material/Button';

const FormEscuelasTodas = ({agregarEscuela, register, escuelas, eliminarEscuela, defaultData}) => {
  return (
    <>
      <h1 className='titles' style={{fontSize:"30px", textAlign:"center", fontWeight:"bold", lineHeight:"1.125"}}>Datos por Establecimiento</h1>
      {escuelas.map((escuela, index) => (
        <FormEscuela key={index} index={index} register={register} escuela={escuela} eliminarEscuela={eliminarEscuela} defaultData={defaultData} />
      ))}
      <Button size="small" variant="contained" color="success" onClick={agregarEscuela} className="mb-3" >Agregar otra Escuela</Button>
    </>
  )
}

export default FormEscuelasTodas