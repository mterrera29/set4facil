/* eslint-disable react/prop-types */
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import { Button} from 'react-bootstrap';

const FormEscuela = ({index, register, escuela, eliminarEscuela}) => {
  // eslint-disable-next-line no-unused-vars
  const [texto, setTexto] = useState('');

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const maxLength = 20; // Establece el máximo de caracteres permitidos

    if (inputValue.length <= maxLength) {
      setTexto(inputValue);
    }
  };

  const optionsDia = [];
  const optionsMes = [];
  const optionsAño = [];
  const optionsMuchosAños = [];

  function formatNumber(number) {
    return number < 10 ? `0${number}` : `${number}`;
  }
  
  for (let i = 1; i <= 31; i++) {
    const formattedDia = formatNumber(i);
    optionsDia.push(<option key={formattedDia} value={formattedDia}>{formattedDia}</option>);
  }
  
  for (let i = 1; i <= 12; i++) {
    const formattedMes = formatNumber(i);
    optionsMes.push(<option key={formattedMes} value={formattedMes}>{formattedMes}</option>);
  }
  
  for (let i = 21; i <= 23; i++) {
    const formattedAño = formatNumber(i);
    optionsAño.push(<option key={formattedAño} value={formattedAño}>{formattedAño}</option>);
  }
  for (let i = 1990; i <= 2023; i++) {
    optionsMuchosAños.push(<option key={i} value={i}>{i}</option>);
  }
  return (
    <Accordion className="mb-3 custom-accordion " defaultActiveKey="0" key={index}>
      <Accordion.Item eventKey="0"> 
        <Accordion.Header>Datos de la escuela #{index + 1}</Accordion.Header>
        <Accordion.Body >
          <Form.Group className="mb-3">
            <Form.Label>Cargo del que es titular</Form.Label>
            <Form.Control  type="text" onChange={handleInputChange} maxLength={14} {...register(`escuelas[escuela${escuela.id}].cargoTitular`)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Escuela N°</Form.Label>
            <Form.Control  type="text" name='' onChange={handleInputChange} maxLength={8} {...register(`escuelas.escuela${escuela.id}.escuela`)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Distrito</Form.Label>
            <Form.Control  type="text" name='' onChange={handleInputChange} maxLength={18} {...register(`escuelas.escuela${escuela.id}.distrito`)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Cargo que desempeña actualmente</Form.Label>
            <Form.Control type="text" name='' onChange={handleInputChange} maxLength={42} {...register(`escuelas.escuela${escuela.id}.cargoActual`)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Organismo, repartición o dependencia</Form.Label>
            <Form.Control type="text" name='' onChange={handleInputChange} maxLength={41} {...register(`escuelas.escuela${escuela.id}.organismo`)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>¿Desde qué fecha?:</Form.Label>
              <Form.Group>
                <label>Día</label>
                <select {...register(`escuelas.escuela${escuela.id}.fechaDia`)}>
                 <option value=""></option>
                 {optionsDia}
               </select>
                <label>Mes</label>
                <select {...register(`escuelas.escuela${escuela.id}.fechaMes`)}>
                 <option value=""></option>
                 {optionsMes}
               </select>
                <label>Año</label>
                <select {...register(`escuelas.escuela${escuela.id}.fechaAño`)}>
                 <option value=""></option>
                 {optionsMuchosAños}
               </select>
              </Form.Group>
          </Form.Group>
          <Button variant="danger" onClick={()=>{eliminarEscuela(index, escuela.id)}} className="mb-3" > Eliminar Escuela</Button>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion >
  )
}

export default FormEscuela