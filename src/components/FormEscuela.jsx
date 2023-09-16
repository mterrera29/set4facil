/* eslint-disable react/prop-types */
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import FormPeriodoEscuela from './FormPeriodoEscuela';
import escuelaPNG from "../assets/escuela2.png"


import Button from '@mui/material/Button';

import { dataItems } from '../../data';
import { useOptions } from '../Hooks/useOptions';

const FormEscuela = ({index, register, escuela, eliminarEscuela, defaultData}) => {
  // eslint-disable-next-line no-unused-vars
  const [texto, setTexto] = useState('');
  const [expanded, setExpanded] = useState('panel1');
  const {optionsDia, optionsMes,  optionsMuchosAños} = useOptions()

  const handleChange = () => (event, newExpanded) => {
    setExpanded(newExpanded ? `panel${index+1}`: false);
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const maxLength = 20; 
    
    if (inputValue.length <= maxLength) {
      setTexto(inputValue);
    }
  };

  return (
    <Accordion className="mb-3 custom-accordion " expanded={expanded === `panel${index+1}`} onChange={handleChange('panel1')} key={index}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        >
          <img className="escuelaIcon" src={escuelaPNG} alt="" />
          <Typography style={{display:"flex", alignItems:"center", paddingLeft:"10px"}}>
            <strong>Datos de la escuela #{index + 1}</strong>
          </Typography>
      </AccordionSummary>
      <AccordionDetails >
        <FormPeriodoEscuela register={register} escuela={escuela} defaultData={defaultData} />
        {
          dataItems.form.escuelaDatos.map((item)=>(
            <Form.Group className="mb-3" key={item.register}>
              <Typography>{item.name}</Typography>
              <TextField  fullWidth variant="outlined" size="small" type="text" name='' onChange={handleInputChange} inputProps={{maxLength: item.maxLength}} defaultValue={defaultData? defaultData.escuelas?.[`escuela${escuela.id}`]?.[item.register]: ''} {...register(`escuelas[escuela${escuela.id}].${item.register}`)}/>
            </Form.Group>
            )
          )
        }
        <Form.Group className="mb-3">
          <Typography>¿Desde qué fecha?:</Typography>
          <Form.Group>
            <Row className="align-items-center mt-1" style={{display:"flex", flexDirection:"row", flexWrap:"nowrap"}}>
            {
              dataItems.form.escuelaFecha.map((items)=>(
                <Col xs="auto"className='col' key={items.register}>
                  <label className='colLabel'><Typography style={{ fontSize: '14px' }}>{items.name}</Typography></label>
                  <Form.Select {...register(`escuelas[escuela${escuela.id}].${items.register}`)}
                  defaultValue={defaultData? defaultData.escuelas?.[`escuela${escuela.id}`]?.[items.register]: ''}> 
                  <option value=""></option>
                  {(items.name === "Día")? optionsDia : (items.name=== "Mes") ? optionsMes: (items.name=== "Año")?optionsMuchosAños: ""}
                  </Form.Select>
                </Col>
              ))
            }
            </Row>
          </Form.Group>
        </Form.Group>
        <Button size="small" variant="outlined" color="error" onClick={()=>{eliminarEscuela(index, escuela.id)}} className="mb-3" > Eliminar Escuela</Button>
      </AccordionDetails>
    </Accordion >
  )
}

export default FormEscuela