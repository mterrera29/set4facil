/* eslint-disable react/prop-types */
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Col from 'react-bootstrap/Col';
import { useOptions } from '../Hooks/useOptions';

const DateSchoolSelect = ({items, register, dataLocal, escuela}) => {
  const {optionsDia, optionsMes,  optionsMuchosAños} = useOptions()

  return (
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
  )
}

export default DateSchoolSelect