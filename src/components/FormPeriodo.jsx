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

const FormPeriodo = ({register}) => {
  const {optionsDia, optionsMes, optionsAño} = useOptions()
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <h1 className='titles'>1 - Período de Calificación</h1>
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
                    <Row className="align-items-center mt-1">
                       <Col xs="auto"className='col'>
                          <FormControl sx={{minWidth: 70}} size="small">
                            <InputLabel id="dia" className='colLabel'>Día</InputLabel>
                            <Select 
                              labelId="dia"
                              id="demo-simple-select"
                              label="Dia"
                            {...register("desdeDia")}> 
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
                          {...register("desdeMes")}>
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
                          {...register("desdeAño")}>
                            <MenuItem value=""></MenuItem>
                           {optionsAño}
                         </Select>
                        </FormControl>
                      </Col>
                    </Row>
                </Form.Group>
                <Form.Group className="mb-3 ">
                  <Typography>Hasta: </Typography>
                  <Row className="align-items-center mt-1">
                       <Col xs="auto"className='col'>
                          <FormControl sx={{minWidth: 70 }} size="small">
                            <InputLabel id="dia" className='colLabel'>Día</InputLabel>
                            <Select 
                              labelId="dia"
                              id="demo-simple-select"
                              label="Dia"
                            {...register("hastaDia")}> 
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
                          {...register("hastaMes")}>
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
                          {...register("hastaAño")}>
                            <MenuItem value=""></MenuItem>
                           {optionsAño}
                         </Select>
                        </FormControl>
                      </Col>
                    </Row>
                </Form.Group>
              </AccordionDetails>
      </Accordion>
    </>
  )
}

export default FormPeriodo