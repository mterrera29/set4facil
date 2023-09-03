/* eslint-disable react/prop-types */
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';

const FormDatos = ({register}) => {
  // eslint-disable-next-line no-unused-vars
  const [texto, setTexto] = useState('');

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const maxLength = 20; // Establece el máximo de caracteres permitidos

    if (inputValue.length <= maxLength) {
      setTexto(inputValue);
    }
  };
  return (
    <Accordion defaultActiveKey="0" className="mb-3 custom-accordion">
      <Accordion.Item eventKey="0"> 
        <Accordion.Header>Datos</Accordion.Header>
        <Accordion.Body>
          <Form.Group className="mb-3">
            <Form.Label>Nombre y Apellido</Form.Label>
            <Form.Control type="text" name='' onChange={handleInputChange} maxLength={48} {...register("nombreApellido")} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Títulos docentes que posee </Form.Label>
            <Form.Control type="text" name='' onChange={handleInputChange} maxLength={48} {...register("titulos",{maxLength:48})} />
          </Form.Group>
          <Accordion className="mb-3">
            <Accordion.Item eventKey="0"> 
              <Accordion.Header>Otros Datos</Accordion.Header>
            <Accordion.Body>
              <Form.Group className="mb-3">
                <Form.Label>Otros títulos o estudios realizados (oficiales y no oficiales) </Form.Label>
                <Form.Control type="text" name='' onChange={handleInputChange} maxLength={68} {...register("otrosTitulos")} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label> Estudios o trabajos que actualmente realiza</Form.Label>
                <Form.Control type="text" name='' onChange={handleInputChange} maxLength={68}  {...register("estudios")} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label> Obras publicadas o ejecutadas (materia, clase, título, edición, fecha y demás referencias)</Form.Label>
                <Form.Control type="text" name='' onChange={handleInputChange} maxLength={68}  {...register("obras")} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Comisiones oficiales desempeñadas (fecha, naturaleza de labor y demás referencias)</Form.Label>
                <Form.Control type="text" name='' onChange={handleInputChange} maxLength={68}  {...register("comisiones")} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Participación destacada en actos culturales organizados por la dependencia en que actúa o
      instituciones locales</Form.Label>
                <Form.Control type="text" name='' onChange={handleInputChange} maxLength={68}  {...register("participacion")} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Iniciativa (propuestas realizadas) </Form.Label>
                <Form.Control type="text" name='' onChange={handleInputChange} maxLength={68}  {...register("iniciativa")} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Participación en actividades de perfeccionamiento docente (cursos, cursillos, jornadas
      pedagógicas, seminarios, becas, etc.)</Form.Label>
                <Form.Control type="text" name='' onChange={handleInputChange} maxLength={68}  {...register("perfecionamiento")} />
              </Form.Group>
            </Accordion.Body>
            </Accordion.Item>
          </Accordion >
        </Accordion.Body>
      </Accordion.Item>
    </Accordion >
  )
}

export default FormDatos