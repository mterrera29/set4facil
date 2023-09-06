/* eslint-disable react/prop-types */
import FormEscuela from './FormEscuela'
import { Button} from 'react-bootstrap';

const FormEscuelasTodas = ({agregarEscuela, register, escuelas, eliminarEscuela}) => {
  return (
    <>
      <h1 className='titles'>3 - Datos por Establecimiento</h1>
      {escuelas.map((escuela, index) => (
        <FormEscuela key={index} index={index} register={register} escuela={escuela} eliminarEscuela={eliminarEscuela} />
      ))}
      <Button onClick={agregarEscuela} className="mb-3" >Agregar otra Escuela</Button>
    </>
  )
}

export default FormEscuelasTodas