/* eslint-disable react/prop-types */
import { Typography } from '@mui/material';
import FormEscuela from './FormEscuela'
import Button from '@mui/material/Button';

const FormEscuelasTodas = ({agregarEscuela, register, escuelas, eliminarEscuela}) => {
  return (
    <>
      <Typography className='titles'><h1>3 - Datos por Establecimiento</h1></Typography>
      {escuelas.map((escuela, index) => (
        <FormEscuela key={index} index={index} register={register} escuela={escuela} eliminarEscuela={eliminarEscuela} />
      ))}
      <Button size="small" variant="contained" color="success" onClick={agregarEscuela} className="mb-3" >Agregar otra Escuela</Button>
    </>
  )
}

export default FormEscuelasTodas