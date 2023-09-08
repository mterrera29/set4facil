/* eslint-disable react/prop-types */
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Card from 'react-bootstrap/Card';

import { useState } from 'react';
import { useOptions } from '../Hooks/useOptions';

const FormLugarFecha = ({register}) => {
  const {optionsDia, optionsMes,  optionsMuchosAños} = useOptions()
  // eslint-disable-next-line no-unused-vars
  const [texto, setTexto] = useState('');

  const dataLocal = JSON.parse(localStorage.getItem(`data`))

  function formatNumber(number) {
    return number < 10 ? `0${number}` : `${number}`;
  }
  const currentDate = new Date();
  const currentDay = formatNumber(currentDate.getDate());
  const currentMonth = formatNumber(currentDate.getMonth() + 1); // Los meses son de 0 a 11 en JavaScript
  const currentYear = currentDate.getFullYear();

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const maxLength = 20; // Establece el máximo de caracteres permitidos

    if (inputValue.length <= maxLength) {
      setTexto(inputValue);
    }
    };

  return (
    <>
      <h1 className='titles'>4 - Lugar y Fecha Actual</h1>

      <Card style={{padding:"20px"}}>
        <Form.Group className="mb-3 ">
          <Form.Label>Lugar</Form.Label>
          <TextField  fullWidth variant="outlined" size="small" type="text" name='' onChange={handleInputChange} inputProps={{maxLength: 20}} defaultValue={dataLocal.lugar} {...register("lugar")} />
        </Form.Group>
        <Form.Group className="mb-3 ">
          <Form.Label>Fecha(actual): </Form.Label>
          <Row className="align-items-center">
          <Col xs="auto"className='col'>
              <FormControl sx={{minWidth: 70}} size="small">
                <InputLabel id="dia" className='colLabel'>Día</InputLabel>
                <Select 
                  labelId="dia"
                  id="demo-simple-select"
                  label="Dia"
                  defaultValue={currentDay}
                  {...register(`lugarFechaDia`)}> 
                <MenuItem value=""></MenuItem>
                 {optionsDia}
               </Select>
              </FormControl>
          </Col>
          <Col xs="auto" className='col'>
            <FormControl sx={{minWidth: 70 }} size="small">
              <InputLabel id="mes" className='colLabel'>Mes</InputLabel>
              <Select 
                labelId="mes"
                id="demo-simple-select2"
                label="Mes"
                defaultValue={currentMonth}
                {...register(`lugarFechaMes`)}>
                <MenuItem value=""></MenuItem>
               {optionsMes}
             </Select>
            </FormControl>
          </Col>
          <Col xs="auto" className='col'>
            <FormControl sx={{minWidth: 70 }} size="small">
              <InputLabel id="año" className='colLabel'>Año</InputLabel>
              <Select 
                labelId="año"
                id="demo-simple-select3"
                label="Año"
                defaultValue={currentYear}
                {...register(`lugarFechaAño`)}>
                <MenuItem value=""></MenuItem>
               {optionsMuchosAños}
             </Select>
            </FormControl>
          </Col>
          </Row>
        </Form.Group>
      </Card>
    </>
  )
}

export default FormLugarFecha