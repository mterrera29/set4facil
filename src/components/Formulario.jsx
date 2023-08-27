/* eslint-disable react/prop-types */
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

const FormularioEscuela = ({ escuela, register, index, eliminarEscuelaPorId }) => {
  console.log(escuela)

  const optionsDia = [];
  const optionsMes = [];
  const optionsAño = [];
  const optionsMuchosAños = [];

  for (let i = 1; i <= 31; i++) {
    optionsDia.push(<option key={i} value={i}>{i}</option>);
  }
  for (let i = 1; i <= 12; i++) {
    optionsMes.push(<option key={i} value={i}>{i}</option>);
  }
  for (let i = 21; i <= 23; i++) {
    optionsAño.push(<option key={i} value={i}>{i}</option>);
  }
  for (let i = 1990; i <= 2023; i++) {
    optionsMuchosAños.push(<option key={i} value={i}>{i}</option>);
  }
  return (
    <Accordion className="mb-3 custom-accordion ">
      <Accordion.Item eventKey="0"> 
        <Accordion.Header>Datos de la escuela #{escuela.id} </Accordion.Header>
        <Accordion.Body >
          <Form.Group className="mb-3">
          <input type="hidden" value={escuela.id} {...register(`escuela[${escuela.id}].id`)}  />
            <Form.Label>Cargo del que es titular</Form.Label>
            <Form.Control size="sm" type="text"  {...register(`escuela[${escuela.id}].cargoTitular`)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Escuela N°</Form.Label>
            <Form.Control size="sm" type="text" name='' {...register(`escuela[${escuela.id}].escuela`)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Distrito</Form.Label>
            <Form.Control size="sm" type="text" name='' {...register(`escuela[${escuela.id}].distrito`)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Cargo que desempeña actualmente</Form.Label>
            <Form.Control type="text" name='' {...register(`escuela[${escuela.id}].cargoActual`)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Organismo, repartición o dependencia</Form.Label>
            <Form.Control type="text" name='' {...register(`escuela[${escuela.id}].organismo`)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>¿Desde qué fecha?:</Form.Label>
              <Form.Group>
                <label>Día</label>
                <select {...register(`escuela[${escuela.id}].fechaDia`)}>
                 {optionsDia}
               </select>
                <label>Mes</label>
                <select {...register(`escuela[${escuela.id}].fechaMes`)}>
                 {optionsMes}
               </select>
                <label>Año</label>
                <select {...register(`escuela[${escuela.id}].fechaAño`)}>
                 {optionsMuchosAños}
               </select>
              </Form.Group>
          </Form.Group>
          <Button variant="danger" onClick={() => eliminarEscuelaPorId(escuela.id)} className="mb-3" > Eliminar Escuela</Button>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion >
  );
};

export default FormularioEscuela