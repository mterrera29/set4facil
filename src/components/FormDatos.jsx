/* eslint-disable react/prop-types */
import React from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';

import { dataItems } from '../../data';

const FormDatos = ({register}) => {
  // eslint-disable-next-line no-unused-vars
  const [texto, setTexto] = useState('');
  const [expanded, setExpanded] = useState('panel1');
  const [expanded2, setExpanded2] = useState('');
  
  const dataLocal = JSON.parse(localStorage.getItem(`data`))

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  
  const handleChange2 = (panel) => (event, newExpanded) => {
    setExpanded2(newExpanded ? panel : false);
  };
2

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const maxLength = 20; // Establece el máximo de caracteres permitidos

    if (inputValue.length <= maxLength) {
      setTexto(inputValue);
    }
  };
  return (
    <>
      <h1 className='titles'>Datos Personales</h1>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className="mb-3 custom-accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography><strong>Datos</strong></Typography>
          </AccordionSummary>
          <AccordionDetails>
            {
              dataItems.form.datos.map((item)=>(
                <React.Fragment key={item.register}>
                  <Typography>{item.name}</Typography>
                  <Form.Group className="mb-3">
                    <TextField fullWidth variant="outlined" size="small" type="text" name='' onChange={handleInputChange} inputProps={{maxLength: item.maxLength}} defaultValue={dataLocal[item.register]} {...register(`${item.register}`)} />
                  </Form.Group>
                </React.Fragment>

              ))
            }
            <Accordion expanded={expanded2 === 'panel1'} onChange={handleChange2('panel1')} className="mb-3">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography><strong>Otros Datos</strong></Typography>
              </AccordionSummary>
              <AccordionDetails>
                {
                  dataItems.form.otrosDatos.map((item)=>(
                    <React.Fragment key={item.register}>
                      <Typography>{item.name}</Typography>
                      <Form.Group className="mb-3">
                        <TextField fullWidth variant="outlined" size="small" type="text" onChange={handleInputChange} inputProps={{maxLength: item.maxLength}} defaultValue={dataLocal[item.register]} {...register(`${item.register}`)} />
                      </Form.Group>
                    </React.Fragment>
                  ))
                }
              </AccordionDetails>
            </Accordion >
          </AccordionDetails>
      </Accordion >
    </>
   
  )
}

export default FormDatos