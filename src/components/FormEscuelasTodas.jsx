/* eslint-disable react/prop-types */
import FormEscuela from './FormEscuela'
import { Button} from 'react-bootstrap';

const FormEscuelasTodas = ({agregarEscuela, register, escuelas, eliminarEscuela}) => {
  return (
    <>
      {escuelas.map((escuela, index) => (
        <FormEscuela key={index} index={index} register={register} escuela={escuela} eliminarEscuela={eliminarEscuela} />
      ))}
      <Button onClick={agregarEscuela} className="mb-3" >Agregar otra Escuela</Button>
    </>
  )
}

export default FormEscuelasTodas