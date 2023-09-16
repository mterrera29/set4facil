
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

  return {optionsDia, optionsMes, optionsAño, optionsMuchosAños}
}
