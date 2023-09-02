/* eslint-disable react/prop-types */
import Form from 'react-bootstrap/Form';
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
    <Accordion defaultActiveKey="0" className="mb-3 mt-3 custom-accordion ">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Período</Accordion.Header>
            <Accordion.Body>
              <Form.Group className="mb-3 "> 
                <Form.Label>Desde: </Form.Label>
                  <div>
                    <label>Día</label>
                    <select {...register("desdeDia")}>
                    <option value=""></option>
                     {optionsDia}
                   </select>
                    <label>Mes</label>
                    <select {...register("desdeMes")}>
                    <option value=""></option>
                     {optionsMes}
                   </select>
                    <label>Año</label>
                    <select {...register("desdeAño")}>
                    <option value=""></option>
                     {optionsAño}
                   </select>
                  </div>
              </Form.Group>
              <Form.Group className="mb-3 ">
                <Form.Label>Hasta: </Form.Label>
                  <div>
                    <label>Día</label>
                    <select {...register("hastaDia")}>
                     <option value=""></option>
                     {optionsDia}
                   </select>
                    <label>Mes</label>
                    <select {...register("hastaMes")}>
                     <option value=""></option>
                     {optionsMes}
                   </select>
                    <label>Año</label>
                    <select {...register("hastaAño")}>
                     <option value=""></option>
                     {optionsAño}
                   </select>
                  </div>
              </Form.Group>
            </Accordion.Body>
          </Accordion.Item >
        </Accordion>
  )
}

export default FormPeriodo