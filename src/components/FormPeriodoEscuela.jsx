/* eslint-disable react/prop-types */

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import Typography from '@mui/material/Typography';
import { Card } from '@mui/material';
import { dataItems } from '../../data';
import { useOptions } from '../Hooks/useOptions';

const FormPeriodoEscuela = ({register, escuela}) => {
  const {optionsDia, optionsMes, optionsAño} = useOptions()
  return (
    <>
      <Card style={{padding:"10px", marginBottom:"10px"}}>
          <Typography style={{textAlign:"center"}}><strong>Periodo de Calificación</strong></Typography>
          <Form.Group className="mb-3 "> 
            <Typography>Desde: </Typography>
              <Row className="align-items-center mt-1" style={{display:"flex", flexDirection:"row", justifyContent:"center", flexWrap:"nowrap"}}>
                {
                  dataItems.form.periodoDesde.map((items)=>(
                    <Col xs="auto"className='col' style={{display:"flex", flexDirection:"column", justifyContent:"center", padding:"5px"}} key={items.register}>
                      <label className='colLabel'><Typography style={{ fontSize: '14px' }}>{items.name}</Typography></label>
                      <Form.Select 
                        {...register(`escuelas[escuela${escuela.id}].${items.register}`)}
                        > 
                      <option value=""></option>
                      {(items.name === "Día")? optionsDia : (items.name=== "Mes") ? optionsMes: (items.name=== "Año")?optionsAño: ""}
                      </Form.Select>
                    </Col>
                  ))
                }
              </Row>
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Typography>Hasta: </Typography>
            <Row className="align-items-center mt-1" style={{display:"flex", flexDirection:"row", justifyContent:"center", flexWrap:"nowrap"}}>
              {
                dataItems.form.periodoHasta.map((items)=>(
                  <Col xs="auto"className='col' style={{display:"flex", flexDirection:"column", justifyContent:"center", padding:"5px"}} key={items.register}>
                    <label className='colLabel'><Typography style={{ fontSize: '14px' }}>{items.name}</Typography></label>
                    <Form.Select {...register(`escuelas[escuela${escuela.id}].${items.register}`)}> 
                    <option value=""></option>
                    {(items.name === "Día")? optionsDia : (items.name=== "Mes") ? optionsMes: (items.name=== "Año")?optionsAño: ""}
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

export default FormPeriodoEscuela