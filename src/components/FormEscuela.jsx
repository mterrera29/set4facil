/* eslint-disable react/prop-types */
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Button from '@mui/material/Button';
import { useOptions } from '../Hooks/useOptions';

import { dataItems } from '../../data';

const FormEscuela = ({index, register, escuela, eliminarEscuela}) => {
  const {optionsDia, optionsMes, optionsMuchosAños} = useOptions()
  // eslint-disable-next-line no-unused-vars
  const [texto, setTexto] = useState('');
  const [expanded, setExpanded] = useState('panel1');

  const dataLocal = JSON.parse(localStorage.getItem(`data`))

  const handleChange = () => (event, newExpanded) => {
    setExpanded(newExpanded ? `panel${index+1}`: false);
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const maxLength = 20; // Establece el máximo de caracteres permitidos

    if (inputValue.length <= maxLength) {
      setTexto(inputValue);
    }
  };

  return (
    <Accordion className="mb-3 custom-accordion " expanded={expanded === `panel${index+1}`} onChange={handleChange('panel1')} key={index}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header">
          <Typography>
            Datos de la escuela #{index + 1}
          </Typography>
      </AccordionSummary>
      <AccordionDetails >
        {
          dataItems.form.escuelaDatos.map((item)=>(
            <Form.Group className="mb-3" key={item.register}>
              <Typography>{item.name}</Typography>
              <TextField  fullWidth variant="outlined" size="small" type="text" name='' onChange={handleInputChange} inputProps={{maxLength: item.maxLength}} defaultValue={dataLocal.escuelas?.[`escuela${escuela.id}`]?.[item.register] ?? ''} {...register(`escuelas[escuela${escuela.id}].${item.register}`)} />
            </Form.Group>
            )
          )
        }
        <Form.Group className="mb-3">
          <Typography>¿Desde qué fecha?:</Typography>
          <Form.Group>
            <Row className="align-items-center mt-1">
            {
              dataItems.form.escuelaFecha.map((items)=>(
                <Col xs="auto"className='col' key={items.register}>
                  <FormControl sx={{minWidth: 70}} size="small">
                    <InputLabel id="dia" className='colLabel'>{items.name}</InputLabel>
                    <Select 
                      labelId={items.register}
                      id="demo-simple-select"
                      label={items.name}
                      defaultValue={dataLocal.escuelas?.[`escuela${escuela.id}`]?.[items.register] ?? ''}
                    {...register(`escuelas[escuela${escuela.id}].${items.register}`)}> 
                    <MenuItem value=""></MenuItem>
                     {(items.name === "Día")? optionsDia : (items.name=== "Mes") ? optionsMes: (items.name=== "Año")?optionsMuchosAños: ""}
                   </Select>
                  </FormControl>
                </Col>
              ))
            }
            </Row>
          </Form.Group>
        </Form.Group>
        <Button size="small" variant="outlined" color="error" onClick={()=>{eliminarEscuela(index, escuela.id)}} className="mb-3" > Eliminar Escuela</Button>
      </AccordionDetails>
    </Accordion >
  )
}

export default FormEscuela