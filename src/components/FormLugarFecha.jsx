/* eslint-disable react/prop-types */
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import TextField from '@mui/material/TextField';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
import { useState } from 'react';
import { dataItems } from '../../data';
import { Typography } from '@mui/material';
import { useOptions } from '../Hooks/useOptions';
import lugarPNG from "../assets/lugar.png"
import fechaPNG from "../assets/fecha.png"

const FormLugarFecha = ({register, defaultData}) => {
  // eslint-disable-next-line no-unused-vars
  const [texto, setTexto] = useState('');
  const {optionsDia, optionsMes,  optionsMuchosAños} = useOptions()

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
      <h1 className='titles' style={{fontSize:"30px", textAlign:"center", fontWeight:"bold", lineHeight:"1.125"}}>Lugar y Fecha Actual</h1>

      <Card style={{padding:"20px"}}>
        <Form.Group className="mb-3 ">
        <img className="escuelaIcon" src={lugarPNG} alt="" />
          <Form.Label style={{paddingLeft:"10px"}}><strong>Lugar</strong></Form.Label>
          <TextField  fullWidth variant="outlined" size="small" type="text" name='' onChange={handleInputChange} inputProps={{maxLength: 20}} defaultValue={defaultData ? defaultData.lugar: ""} {...register("lugar")} />
        </Form.Group>
        <Form.Group className="mb-3 ">
          <img className="escuelaIcon" src={fechaPNG} alt="" />
          <Form.Label style={{paddingLeft:"10px"}}><strong>Fecha (actual): </strong></Form.Label>
          <Row className="align-items-center" style={{display:"flex", flexDirection:"row", justifyContent:"center", flexWrap:"nowrap"}}>
            {
              dataItems.form.lugarFecha.map((items)=>(
                <Col xs="auto"className='col' key={items.register}>
                  <label className='colLabel'><Typography style={{ fontSize: '14px' }}>{items.name}</Typography></label>
                  <Form.Select {...register(`${items.register}`)}
                  defaultValue={(items.name === "Día")? currentDay : (items.name=== "Mes") ? currentMonth: (items.name=== "Año")?currentYear: ""}
                  > 
                  <option value=""></option>
                  {(items.name === "Día")? optionsDia : (items.name=== "Mes") ? optionsMes: (items.name=== "Año")?optionsMuchosAños: ""}
                  </Form.Select>
                </Col>
              ))
            }
          </Row>
        </Form.Group>
      </Card>
    </>
  )
}

export default FormLugarFecha