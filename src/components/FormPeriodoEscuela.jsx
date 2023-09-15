/* eslint-disable react/prop-types */

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useState } from 'react';
import { dataItems } from '../../data';
import DatePeriodoSelect from './DatePeriodoSelect';

const FormPeriodoEscuela = ({register, escuela, dataLocal}) => {
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className="mb-3 mt-3 custom-accordion ">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><strong>Periodo de Calificación</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Form.Group className="mb-3 "> 
            <Typography>Desde: </Typography>
              <Row className="align-items-center mt-1" style={{display:"flex", flexDirection:"row", flexWrap:"nowrap"}}>
                {
                  dataItems.form.periodoDesde.map((items)=>(
                    <DatePeriodoSelect items={items} register={register} key={items.register} route={`escuelas[escuela${escuela.id}].${items.register}`} defaultV={dataLocal.escuelas?.[`escuela${escuela.id}`]?.[items.register] ?? ''} />
                  ))
                }
              </Row>
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Typography>Hasta: </Typography>
            <Row className="align-items-center mt-1">
              {
                dataItems.form.periodoHasta.map((items)=>(
                  <DatePeriodoSelect items={items} register={register} key={items.register} route={`escuelas[escuela${escuela.id}].${items.register}`} defaultV={dataLocal.escuelas?.[`escuela${escuela.id}`]?.[items.register] ?? ''} />
                ))
              }
            </Row>
          </Form.Group>
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default FormPeriodoEscuela