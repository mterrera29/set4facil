/* eslint-disable react/prop-types */
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';

const FormLugarFecha = ({register}) => {
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
    <>
      <h1 className='titles'>4 - Lugar y Fecha Actual</h1>
      <Form.Group className="mb-3 ">
        <Form.Label>Lugar</Form.Label>
        <Form.Control type="text" name=''onChange={handleInputChange} maxLength={20} {...register("lugar")} />
      </Form.Group>
      <Form.Group className="mb-3 ">
        <Form.Label>Fecha(actual): </Form.Label>
        <Row className="align-items-center">
           <Col xs="auto"className='col'>
              <label className='colLabel'>Día</label>
              <Form.Select {...register("lugarFechaDia")}>
               {optionsDia}
             </Form.Select>
          </Col>
          <Col xs="auto" className='col'>
            <label className='colLabel'>Mes</label>
            <Form.Select {...register("lugarFechaMes")}>
             {optionsMes}
           </Form.Select>
          </Col>
          <Col xs="auto" className='col'>
            <label className='colLabel'>Año</label>
            <Form.Select {...register("lugarFechaAño")}>
             {optionsMuchosAños}
           </Form.Select>
          </Col>
        </Row>
      </Form.Group>
    </>
  )
}

export default FormLugarFecha