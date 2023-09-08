import MenuItem from '@mui/material/MenuItem';

export function useOptions(){
  const optionsDia = [];
  const optionsMes = [];
  const optionsAño = [];
  const optionsMuchosAños = [];

  function formatNumber(number) {
    return number < 10 ? `0${number}` : `${number}`;
  }
  
  for (let i = 1; i <= 31; i++) {
    const formattedDia = formatNumber(i);
    optionsDia.push(<MenuItem key={formattedDia} value={formattedDia}>{formattedDia}</MenuItem>);
  }
  
  for (let i = 1; i <= 12; i++) {
    const formattedMes = formatNumber(i);
    optionsMes.push(<MenuItem key={formattedMes} value={formattedMes}>{formattedMes}</MenuItem>);
  }
  
  for (let i = 21; i <= 23; i++) {
    const formattedAño = formatNumber(i);
    optionsAño.push(<MenuItem key={formattedAño} value={formattedAño}>{formattedAño}</MenuItem>);
  }
  for (let i = 1990; i <= 2023; i++) {
    optionsMuchosAños.push(<MenuItem key={i} value={i}>{i}</MenuItem>);
  }

  return {optionsDia, optionsMes, optionsAño, optionsMuchosAños}
}
