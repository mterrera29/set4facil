/* eslint-disable react/prop-types */

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Typography from '@mui/material/Typography';
import { Card } from '@mui/material';
import { dataItems } from '../../data';
import DatePeriodoSelect from './DatePeriodoSelect';

const FormPeriodoEscuela = ({register, escuela, dataLocal}) => {
  return (
    <>
      <Card style={{padding:"20px", marginBottom:"10px"}}>
          <Typography style={{textAlign:"center"}}><strong>Periodo de Calificación</strong></Typography>
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
      </Card>
    </>
  )
}

export default FormPeriodoEscuela