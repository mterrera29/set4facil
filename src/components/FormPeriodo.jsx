/* eslint-disable react/prop-types */
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useOptions } from '../Hooks/useOptions';
import { useState } from 'react';
import { dataItems } from '../../data';

const FormPeriodo = ({register}) => {
  const {optionsDia, optionsMes, optionsAño} = useOptions()
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <h1 className='titles'>Período de Calificación</h1>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className="mb-3 mt-3 custom-accordion ">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Periodo</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Form.Group className="mb-3 "> 
                  <Typography>Desde: </Typography>
                    <Row className="align-items-center mt-1" style={{display:"flex", flexDirection:"row", flexWrap:"nowrap"}}>
                      {
                        dataItems.form.periodoDesde.map((items)=>(
                          <Col xs="auto"className='col' key={items.register}>
                            <FormControl sx={{minWidth: 70}} size="small">
                              <InputLabel id="dia" className='colLabel'>{items.name}</InputLabel>
                              <Select 
                                labelId={items.register}
                                id="demo-simple-select"
                                label={items.name}
                              {...register(`${items.register}`)}> 
                              <MenuItem value=""></MenuItem>
                               {(items.name === "Día")? optionsDia : (items.name=== "Mes") ? optionsMes: (items.name=== "Año")?optionsAño: ""}
                             </Select>
                            </FormControl>
                          </Col>
                        ))
                      }
                    </Row>
                </Form.Group>
                <Form.Group className="mb-3 ">
                  <Typography>Hasta: </Typography>
                  <Row className="align-items-center mt-1">
                    {
                      dataItems.form.periodoHasta.map((items)=>(
                        <Col xs="auto"className='col' key={items.register}>
                          <FormControl sx={{minWidth: 70}} size="small">
                            <InputLabel id="dia" className='colLabel'>{items.name}</InputLabel>
                            <Select 
                              labelId={items.register}
                              id="demo-simple-select"
                              label={items.name}
                            {...register(`${items.register}`)}> 
                            <MenuItem value=""></MenuItem>
                             {(items.name === "Día")? optionsDia : (items.name=== "Mes") ? optionsMes: (items.name=== "Año")?optionsAño: ""}
                           </Select>
                          </FormControl>
                        </Col>
                      ))
                    }
                  </Row>
                </Form.Group>
              </AccordionDetails>
      </Accordion>
    </>
  )
}

export default FormPeriodo