/* eslint-disable react/prop-types */
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import TextField from '@mui/material/TextField';
import Card from 'react-bootstrap/Card';

import { useState } from 'react';
import { dataItems } from '../../data';
import DateCurrentSelect from './DateCurrentSelect';

const FormLugarFecha = ({register}) => {
  // eslint-disable-next-line no-unused-vars
  const [texto, setTexto] = useState('');

  const dataLocal = JSON.parse(localStorage.getItem(`data`))

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const maxLength = 20; // Establece el máximo de caracteres permitidos

    if (inputValue.length <= maxLength) {
      setTexto(inputValue);
    }
    };

  return (
    <>
      <h1 className='titles'>Lugar y Fecha Actual</h1>

      <Card style={{padding:"20px"}}>
        <Form.Group className="mb-3 ">
          <Form.Label>Lugar</Form.Label>
          <TextField  fullWidth variant="outlined" size="small" type="text" name='' onChange={handleInputChange} inputProps={{maxLength: 20}} defaultValue={dataLocal.lugar} {...register("lugar")} />
        </Form.Group>
        <Form.Group className="mb-3 ">
          <Form.Label>Fecha(actual): </Form.Label>
          <Row className="align-items-center" style={{display:"flex", flexDirection:"row", flexWrap:"nowrap"}}>
            {
              dataItems.form.lugarFecha.map((items)=>(
                <DateCurrentSelect items={items} register={register} key={items.register} />
              ))
            }
          </Row>
        </Form.Group>
      </Card>
    </>
  )
}

export default FormLugarFecha