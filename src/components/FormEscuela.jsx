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
          <Form.Group className="mb-3">
            <Typography>Cargo del que es titular</Typography>
            <TextField  fullWidth variant="outlined" size="small" type="text" name='' onChange={handleInputChange} inputProps={{maxLength: 14}} defaultValue={dataLocal.escuelas?.[`escuela${escuela.id}`]?.cargoTitular ?? ''} {...register(`escuelas[escuela${escuela.id}].cargoTitular`)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Typography>Escuela N°</Typography>
            <TextField fullWidth variant="outlined" size="small" type="text" name='' onChange={handleInputChange} inputProps={{maxLength: 8}} defaultValue={dataLocal.escuelas?.[`escuela${escuela.id}`]?.escuela ?? ''} {...register(`escuelas.escuela${escuela.id}.escuela`)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Typography>Distrito</Typography>
            <TextField  fullWidth variant="outlined" size="small" type="text" name='' onChange={handleInputChange} inputProps={{maxLength: 18}} defaultValue={dataLocal.escuelas?.[`escuela${escuela.id}`]?.distrito ?? ''} {...register(`escuelas.escuela${escuela.id}.distrito`)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Typography>Cargo que desempeña actualmente</Typography>
            <TextField fullWidth variant="outlined" size="small" type="text" name='' onChange={handleInputChange} inputProps={{maxLength: 42}} defaultValue={dataLocal.escuelas?.[`escuela${escuela.id}`]?.cargoActual ?? ''} {...register(`escuelas.escuela${escuela.id}.cargoActual`)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Typography>Organismo, repartición o dependencia</Typography>
            <TextField fullWidth variant="outlined" size="small" type="text" name='' onChange={handleInputChange} inputProps={{maxLength: 41}} defaultValue={dataLocal.escuelas?.[`escuela${escuela.id}`]?.organismo ?? ''} {...register(`escuelas.escuela${escuela.id}.organismo`)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Typography>¿Desde qué fecha?:</Typography>
              <Form.Group>
                <Row className="align-items-center mt-1">
                  <Col xs="auto"className='col'>
                      <FormControl sx={{minWidth: 70}} size="small">
                        <InputLabel id="dia" className='colLabel'>Día</InputLabel>
                        <Select 
                          labelId="dia"
                          id="demo-simple-select"
                          label="Dia"
                          defaultValue={dataLocal.escuelas?.[`escuela${escuela.id}`]?.fechaDia ?? ''}
                          {...register(`escuelas.escuela${escuela.id}.fechaDia`)}> 
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
                        defaultValue={dataLocal.escuelas?.[`escuela${escuela.id}`]?.fechaMes ?? ''}
                        {...register(`escuelas.escuela${escuela.id}.fechaMes`)}>
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
                        defaultValue={dataLocal.escuelas?.[`escuela${escuela.id}`]?.fechaAño ?? ''}
                        {...register(`escuelas.escuela${escuela.id}.fechaAño`)}>
                        <MenuItem value=""></MenuItem>
                       {optionsMuchosAños}
                     </Select>
                    </FormControl>
                  </Col>
                </Row>
              </Form.Group>
          </Form.Group>
          <Button size="small" variant="outlined" color="error" onClick={()=>{eliminarEscuela(index, escuela.id)}} className="mb-3" > Eliminar Escuela</Button>
        </AccordionDetails>
    </Accordion >
  )
}

export default FormEscuela