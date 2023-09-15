/* eslint-disable react/prop-types */
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Col from 'react-bootstrap/Col';
import { useOptions } from '../Hooks/useOptions';

const DateCurrentSelect = ({items, register}) => {
  const {optionsDia, optionsMes,  optionsMuchosAños} = useOptions()

  function formatNumber(number) {
    return number < 10 ? `0${number}` : `${number}`;
  }
  const currentDate = new Date();
  const currentDay = formatNumber(currentDate.getDate());
  const currentMonth = formatNumber(currentDate.getMonth() + 1); // Los meses son de 0 a 11 en JavaScript
  const currentYear = currentDate.getFullYear();

  return (
    <Col xs="auto"className='col' key={items.register}>
      <FormControl sx={{minWidth: 70}} size="small">
        <InputLabel id="dia" className='colLabel'>{items.name}</InputLabel>
        <Select 
          labelId={items.register}
          id="demo-simple-select"
          label={items.name}
          defaultValue={(items.name === "Día")? currentDay : (items.name=== "Mes") ? currentMonth: (items.name=== "Año")?currentYear: ""}
        {...register(`${items.register}`)}> 
        <MenuItem value=""></MenuItem>
         {(items.name === "Día")? optionsDia : (items.name=== "Mes") ? optionsMes: (items.name=== "Año")?optionsMuchosAños: ""}
       </Select>
      </FormControl>
    </Col>
  )
}

export default DateCurrentSelect