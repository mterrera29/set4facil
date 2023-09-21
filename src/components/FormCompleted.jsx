/* eslint-disable react/prop-types */
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from 'react-bootstrap/Card';
import lugarPNG from "../assets/lugar.png"
import fechaPNG from "../assets/fecha.png"
import datosPNG from "../assets/datos.png"
import otrosDatosPNG from "../assets/datos2.png"
import escuelaPNG from "../assets/escuela2.png"

const FormCompleted = ({data, escuelas}) => {
  const [expanded2, setExpanded2] = useState('panel1');
  const [expanded3, setExpanded3] = useState('panel1');
  const [expanded4, setExpanded4] = useState('panel1');


  const handleChange2 = (panel) => (event, newExpanded) => {
    setExpanded2(newExpanded ? panel : false);
  };

  const handleChange3 = (panel) => (event, newExpanded) => {
    setExpanded3(newExpanded ? panel : false);
  };

  const handleChange4 = (panel) => (event, newExpanded) => {
    setExpanded4(newExpanded ? panel : false);
  };

  return (
    <>
      <h1 className='titles' style={{fontSize:"30px", textAlign:"center", fontWeight:"bold", lineHeight:"1.125"}}>Corroborar datos</h1>
      <Accordion expanded={expanded2 === 'panel1'} onChange={handleChange2('panel1')} className="mb-3 custom-accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
            <img className="escuelaIcon" src={datosPNG} alt="" />
            <Typography style={{display:"flex", alignItems:"center", paddingLeft:"10px"}}><strong>Datos</strong></Typography>
        </AccordionSummary>
          <AccordionDetails className="mb-3">
            <Form.Label>Nombre y Apellido</Form.Label>
            <Form.Control 
              type="text"
              size="sm"
              placeholder={data.nombreApellido}
              aria-label="Disabled input example"
              disabled
              readOnly/>
          <Form.Group className="mb-3">
            <Form.Label>Títulos docentes que posee </Form.Label>
            <Form.Control 
              type="text"
              size="sm"
              placeholder={data.titulos}
              aria-label="Disabled input example"
              disabled
              readOnly/>
          </Form.Group>
          <Accordion expanded={expanded4 === 'panel1'} onChange={handleChange4('panel1')} className="mb-3"> 
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header">
                  <img className="escuelaIcon" src={otrosDatosPNG} alt="" />
                <Typography style={{display:"flex", alignItems:"center", paddingLeft:"10px"}}><strong>Otros Datos</strong></Typography>
            </AccordionSummary>
              <AccordionDetails>
                <Form.Group className="mb-3">
                  <Form.Label>Otros títulos o estudios realizados (oficiales y no oficiales) </Form.Label>
                  <Form.Control 
                  type="text"
                  size="sm"
                  placeholder={data.otrosTitulos}
                  aria-label="Disabled input example"
                  disabled
                  readOnly/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label> Estudios o trabajos que actualmente realiza</Form.Label>
                  <Form.Control 
                  type="text"
                  size="sm"
                  placeholder={data.estudios}
                  aria-label="Disabled input example"
                  disabled
                  readOnly/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label> Obras publicadas o ejecutadas (materia, clase, título, edición, fecha y demás referencias)</Form.Label>
                  <Form.Control 
                  type="text"
                  size="sm"
                  placeholder={data.obras}
                  aria-label="Disabled input example"
                  disabled
                  readOnly/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Comisiones oficiales desempeñadas (fecha, naturaleza de labor y demás referencias)</Form.Label>
                  <Form.Control 
                  type="text"
                  size="sm"
                  placeholder={data.comisiones}
                  aria-label="Disabled input example"
                  disabled
                  readOnly/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Participación destacada en actos culturales organizados por la dependencia en que actúa o
        instituciones locales</Form.Label>
                <Form.Control 
                type="text"
                size="sm"
                placeholder={data.participacion}
                aria-label="Disabled input example"
                disabled
                readOnly/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Iniciativa (propuestas realizadas) </Form.Label>
                  <Form.Control 
                  type="text"
                  size="sm"
                  placeholder={data.iniciativa}
                  aria-label="Disabled input example"
                  disabled
                  readOnly/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Participación en actividades de perfeccionamiento docente (cursos, cursillos, jornadas
        pedagógicas, seminarios, becas, etc.)</Form.Label>
                <Form.Control 
                type="text"
                size="sm"
                placeholder={data.perfecionamiento}
                aria-label="Disabled input example"
                disabled
                readOnly/>
                </Form.Group>
              </AccordionDetails>
          </Accordion >
          </AccordionDetails>
      </Accordion >
      {escuelas.map((escuela, index) => (
        <Accordion expanded={expanded3 === 'panel1'} onChange={handleChange3('panel1')} className="mb-3 custom-accordion " key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header" >
            <img className="escuelaIcon" src={escuelaPNG} alt="" />
          <Typography style={{display:"flex", alignItems:"center", paddingLeft:"10px"}}>
            <strong>Datos de la escuela #{index + 1}</strong>
          </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Período de Calificación</Typography>
            <Form.Group className="mb-3 "> 
            <Form.Control 
              type="text"
              size="sm"
              placeholder={`${data.escuelas[`escuela${escuela.id}`].desdeDia} / ${data.escuelas[`escuela${escuela.id}`].desdeMes} / ${data.escuelas[`escuela${escuela.id}`].desdeAño}`}
              aria-label="Disabled input example"
              disabled
              readOnly/>
            </Form.Group>
            <Form.Group className="mb-3 ">
            <Form.Control 
              type="text"
              size="sm"
              placeholder={`${data.escuelas[`escuela${escuela.id}`].hastaDia} / ${data.escuelas[`escuela${escuela.id}`].hastaMes} / ${data.escuelas[`escuela${escuela.id}`].hastaAño}`}
              aria-label="Disabled input example"
              disabled
              readOnly/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Typography>Cargo del que es titular</Typography>
              <Form.Control 
                type="text"
                size="sm"
                placeholder={data.escuelas[`escuela${escuela.id}`].cargoTitular}
                aria-label="Disabled input example"
                disabled
                readOnly/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Typography>Escuela N°</Typography>
              <Form.Control 
                type="text"
                size="sm"
                placeholder={data.escuelas[`escuela${escuela.id}`].escuela}
                aria-label="Disabled input example"
                disabled
                readOnly/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Typography>Distrito</Typography>
              <Form.Control 
                type="text"
                size="sm"
                placeholder={data.escuelas[`escuela${escuela.id}`].distrito}
                aria-label="Disabled input example"
                disabled
                readOnly/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Typography>Cargo que desempeña actualmente</Typography>
              <Form.Control 
                type="text"
                size="sm"
                placeholder={data.escuelas[`escuela${escuela.id}`].cargoActual}
                aria-label="Disabled input example"
                disabled
                readOnly/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Typography>Organismo, repartición o dependencia</Typography>
              <Form.Control 
                type="text"
                size="sm"
                placeholder={data.escuelas[`escuela${escuela.id}`].organismo}
                aria-label="Disabled input example"
                disabled
                readOnly/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Typography>¿Desde qué fecha?:</Typography>
                <Form.Group>
                <Form.Control 
                  type="text"
                  size="sm"
                  placeholder={data.escuelas[`escuela${escuela.id}`].fechaDia + " / " + data.escuelas[`escuela${escuela.id}`].fechaMes + " / " + data.escuelas[`escuela${escuela.id}`].fechaAño }
                  aria-label="Disabled input example"
                  disabled
                  readOnly/>
                </Form.Group>
             </Form.Group>
          </AccordionDetails>
        </Accordion >
      ))}
      <Card style={{padding:"20px", width:"100%"}} className='mb-3'>
        <Form.Group className="mb-3 ">
          <img className="escuelaIcon" src={lugarPNG} alt="" />
          <Form.Label style={{paddingLeft:"10px"}}><strong>Lugar</strong></Form.Label>
          <Form.Control 
            type="text"
            size="sm"
            placeholder={data.lugar}
            aria-label="Disabled input example"
            disabled
            readOnly
            className="mb-2 mt-2"/>
        </Form.Group>
        <Form.Group className="mb-3 ">
          <Form.Group >
          <img className="escuelaIcon" src={fechaPNG} alt="" />
          <Form.Label style={{paddingLeft:"10px"}}><strong>Fecha (actual): </strong></Form.Label>
          <Form.Control 
            type="text"
            size="sm"
            placeholder={`${data.lugarFechaDia} / ${data.lugarFechaMes} / ${data.lugarFechaAño}`}
            aria-label="Disabled input example"
            disabled
            readOnly
            className="mb-2 mt-2"/>
          </Form.Group>
        </Form.Group>
      </Card>
    </>
  )
}

export default FormCompleted