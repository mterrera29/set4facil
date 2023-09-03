/* eslint-disable react/prop-types */
import Form from 'react-bootstrap/Form';
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
      <Form.Group className="mb-3 ">
        <Form.Label>Lugar</Form.Label>
        <Form.Control type="text" name=''onChange={handleInputChange} maxLength={20} {...register("lugar")} />
      </Form.Group>
      <Form.Group className="mb-3 ">
        <Form.Label>Fecha(actual): </Form.Label>
        <Form.Group >
          <label>Día</label>
          <select {...register("lugarFechaDia")}>
           {optionsDia}
         </select>
          <label>Mes</label>
          <select {...register("lugarFechaMes")}>
           {optionsMes}
         </select>
          <label>Año</label>
          <select {...register("lugarFechaAño")}>
           {optionsMuchosAños}
         </select>
        </Form.Group>
      </Form.Group>
    </>
  )
}

export default FormLugarFecha