export const dataItems = {
  form:{
    periodoDesde:[
      {register:"desdeDia", name:"Día", default:"16"},
      {register:"desdeMes", name:"Mes", default:"11"},
      {register:"desdeAño", name:"Año", default:"22"},
    ],
    periodoHasta:[
      {register:"hastaDia", name:"Día", default:"15"},
      {register:"hastaMes", name:"Mes", default:"11"},
      {register:"hastaAño", name:"Año", default:"23"},
    ],
    datos:[
      {name:"Nombre y Apellido",maxLength:48, register:"nombreApellido"},
      {name:"Títulos docentes que posee",maxLength:48, register:"titulos"},
    ],
    otrosDatos:[
      {name:"Otros títulos o estudios realizados (oficiales y no oficiales)",maxLength:68, register:"otrosTitulos"},
      {name:"Estudios o trabajos que actualmente realiza",maxLength:68, register:"estudios"},
      {name:"Obras publicadas o ejecutadas (materia, clase, título, edición, fecha y demás referencias)",maxLength:68, register:"obras"},
      {name:"Comisiones oficiales desempeñadas (fecha, naturaleza de labor y demás referencias)",maxLength:68, register:"comisiones"},
      {name:"Participación destacada en actos culturales organizados por la dependencia en que actúa o instituciones locales",maxLength:68, register:"participacion"},
      {name:"Iniciativa (propuestas realizadas)",maxLength:68, register:"iniciativa"},
      {name:"Participación en actividades de perfeccionamiento docente (cursos, cursillos, jornadas pedagógicas, seminarios, becas, etc.)",maxLength:68, register:"perfecionamiento"}
    ],
    escuelaDatos:[
      {name:"Cargo del que es titular",maxLength:14, register:"cargoTitular"},
      {name:"Escuela N°",maxLength:8, register:"escuela"},
      {name:"Distrito",maxLength:18, register:"distrito"},
      {name:"Cargo que desempeña actualmente",maxLength:42, register:"cargoActual"},
      {name:"Organismo, repartición o dependencia",maxLength:41, register:"organismo"},
    ],
    escuelaFecha:[
      {register:"fechaDia", name:"Día"},
      {register:"fechaMes", name:"Mes"},
      {register:"fechaAño", name:"Año"},
    ],
    lugarFecha:[
      {register:"lugarFechaDia", name:"Día"},
      {register:"lugarFechaMes", name:"Mes"},
      {register:"lugarFechaAño", name:"Año"},
    ]
  }
}