/* eslint-disable react/prop-types */
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';


const FormPeriodo = ({register}) => {

  const optionsDia = [];
  const optionsMes = [];
  const optionsAño = [];
  const optionsMuchosAños = [];

  function formatNumber(number) {
    return number < 10 ? `0${number}` : `${number}`;
  }
  
  for (let i = 1; i <= 31; i++) {
    const formattedDia = formatNumber(i);
    optionsDia.push(<option key={formattedDia} value={formattedDia}>{formattedDia}</option>);
  }
  
  for (let i = 1; i <= 12; i++) {
    const formattedMes = formatNumber(i);
    optionsMes.push(<option key={formattedMes} value={formattedMes}>{formattedMes}</option>);
  }
  
  for (let i = 21; i <= 23; i++) {
    const formattedAño = formatNumber(i);
    optionsAño.push(<option key={formattedAño} value={formattedAño}>{formattedAño}</option>);
  }
  for (let i = 1990; i <= 2023; i++) {
    optionsMuchosAños.push(<option key={i} value={i}>{i}</option>);
  }
  return (
    <>
      <h1 className='titles'>1 - Período de Calificación</h1>
      <Accordion defaultActiveKey="0" className="mb-3 mt-3 custom-accordion ">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Período</Accordion.Header>
              <Accordion.Body>
                <Form.Group className="mb-3 "> 
                  <Form.Label>Desde: </Form.Label>
                    <Row className="align-items-center">
                       <Col xs="auto"className='col'>
                          <label className='colLabel'>Día</label>
                          <Form.Select {...register("desdeDia")}> 
                          <option value=""></option>
                           {optionsDia}
                         </Form.Select>
                      </Col>
                      <Col xs="auto" className='col'>
                        <label className='colLabel'>Mes</label>
                        <Form.Select {...register("desdeMes")}>
                          <option value=""></option>
                         {optionsMes}
                       </Form.Select>
                      </Col>
                      <Col xs="auto" className='col'>
                        <label className='colLabel'>Año</label>
                        <Form.Select {...register("desdeAño")}>
                          <option value=""></option>
                         {optionsAño}
                       </Form.Select>
                      </Col>
                    </Row>
                </Form.Group>
                <Form.Group className="mb-3 ">
                  <Form.Label>Hasta: </Form.Label>
                  <Row className="align-items-center">
                       <Col xs="auto"className='col'>
                          <label className='colLabel'>Día</label>
                          <Form.Select {...register("hastaDia")}> 
                          <option value=""></option>
                           {optionsDia}
                         </Form.Select>
                      </Col>
                      <Col xs="auto" className='col'>
                        <label className='colLabel'>Mes</label>
                        <Form.Select {...register("hastaMes")}>
                          <option value=""></option>
                         {optionsMes}
                       </Form.Select>
                      </Col>
                      <Col xs="auto" className='col'>
                        <label className='colLabel'>Año</label>
                        <Form.Select {...register("hastaAño")}>
                          <option value=""></option>
                         {optionsAño}
                       </Form.Select>
                      </Col>
                    </Row>
                </Form.Group>
              </Accordion.Body>
            </Accordion.Item >
      </Accordion>
    </>
  )
}

export default FormPeriodo