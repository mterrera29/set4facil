/* eslint-disable react/prop-types */
import { useState } from 'react';
import Form from 'react-bootstrap/Form';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';

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
      <h1 className='titles'>2 - Datos Personales</h1>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className="mb-3 custom-accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Datos</Typography>
          </AccordionSummary>
          <AccordionDetails>
              <Typography>Nombre y Apellido</Typography>
            <Form.Group className="mb-3">
              <TextField fullWidth variant="outlined" size="small" type="text" name='' onChange={handleInputChange} inputProps={{maxLength: 48}} defaultValue={dataLocal.nombreApellido} {...register("nombreApellido")} />
            </Form.Group>
              <Typography>Títulos docentes que posee </Typography>
            <Form.Group className="mb-3">
              <TextField fullWidth variant="outlined" size="small" type="text" onChange={handleInputChange} inputProps={{maxLength: 48}} defaultValue={dataLocal.titulos} {...register("titulos",{maxLength:48})} />
            </Form.Group>
            <Accordion expanded={expanded2 === 'panel1'} onChange={handleChange2('panel1')} className="mb-3">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Otros Datos</Typography>
                </AccordionSummary>
              <AccordionDetails>
                  <Typography>Otros títulos o estudios realizados (oficiales y no oficiales) </Typography>
                <Form.Group className="mb-3">
                  <TextField fullWidth variant="outlined" size="small" type="text" onChange={handleInputChange} inputProps={{maxLength: 68}} defaultValue={dataLocal.otrosTitulos} {...register("otrosTitulos")} />
                </Form.Group>
                  <Typography> Estudios o trabajos que actualmente realiza</Typography>
                <Form.Group className="mb-3">
                  <TextField fullWidth variant="outlined" size="small" type="text" onChange={handleInputChange} inputProps={{maxLength: 68}} defaultValue={dataLocal.estudios} {...register("estudios")} />
                </Form.Group>
                  <Typography> Obras publicadas o ejecutadas (materia, clase, título, edición, fecha y demás referencias)</Typography>
                <Form.Group className="mb-3">
                  <TextField fullWidth variant="outlined" size="small" type="text" onChange={handleInputChange} inputProps={{maxLength: 68}} defaultValue={dataLocal.obras} {...register("obras")} />
                </Form.Group>
                  <Typography>Comisiones oficiales desempeñadas (fecha, naturaleza de labor y demás referencias)</Typography>
                <Form.Group className="mb-3">
                  <TextField fullWidth variant="outlined" size="small" type="text" onChange={handleInputChange} inputProps={{maxLength: 68}} defaultValue={dataLocal.comisiones} {...register("comisiones")} />
                </Form.Group>
                  <Typography>Participación destacada en actos culturales organizados por la dependencia en que actúa o
        instituciones locales</Typography>
                <Form.Group className="mb-3">
                  <TextField fullWidth variant="outlined" size="small" type="text" onChange={handleInputChange} inputProps={{maxLength: 68}} defaultValue={dataLocal.participacion} {...register("participacion")} />
                </Form.Group>
                  <Typography>Iniciativa (propuestas realizadas) </Typography>
                <Form.Group className="mb-3">
                  <TextField fullWidth variant="outlined" size="small" type="text" onChange={handleInputChange} inputProps={{maxLength: 68}} defaultValue={dataLocal.iniciativa} {...register("iniciativa")} />
                </Form.Group>
                  <Typography>Participación en actividades de perfeccionamiento docente (cursos, cursillos, jornadas
        pedagógicas, seminarios, becas, etc.)</Typography>
                <Form.Group className="mb-3">
                  <TextField fullWidth variant="outlined" size="small" type="text" onChange={handleInputChange} inputProps={{maxLength: 68}} defaultValue={dataLocal.perfecionamiento} {...register("perfecionamiento")} />
                </Form.Group>
              </AccordionDetails>
            </Accordion >
          </AccordionDetails>
      </Accordion >
    </>
   
  )
}

export default FormDatos