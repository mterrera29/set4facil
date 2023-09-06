/* eslint-disable react/prop-types */
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';

const FormCompleted = ({data, escuelas}) => {
  return (
    <>
      <h1 className='titles'>5 - Generar SET 4</h1>
      <Accordion defaultActiveKey="0" className="mb-3 mt-3 custom-accordion ">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Período</Accordion.Header>
          <Accordion.Body>
            <Form.Group className="mb-3 "> 
            <Form.Control 
              type="text"
              size="sm"
              placeholder={`${data.desdeDia} / ${data.desdeMes} / ${data.desdeAño}`}
              aria-label="Disabled input example"
              disabled
              readOnly/>
            </Form.Group>
            <Form.Group className="mb-3 ">
            <Form.Control 
              type="text"
              size="sm"
              placeholder={`${data.hastaDia} / ${data.hastaMes} / ${data.hastaAño}`}
              aria-label="Disabled input example"
              disabled
              readOnly/>
            </Form.Group>
          </Accordion.Body>
        </Accordion.Item >
      </Accordion>
      <Accordion defaultActiveKey="0"className="mb-3 custom-accordion">
      <Accordion.Item eventKey="0"> 
        <Accordion.Header>Datos</Accordion.Header>
        <Accordion.Body>
          <Form.Group className="mb-3">
            <Form.Label>Nombre y Apellido</Form.Label>
            <Form.Control 
              type="text"
              size="sm"
              placeholder={data.nombreApellido}
              aria-label="Disabled input example"
              disabled
              readOnly/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Títulos docentes que posee </Form.Label>
            <Form.Control 
              type="text"
              size="sm"
              placeholder={data.titulos}
              aria-label="Disabled input example"
              disabled
              readOnly/>
          </Form.Group>
          <Accordion className="mb-3">
            <Accordion.Item eventKey="0"> 
              <Accordion.Header>Otros Datos</Accordion.Header>
            <Accordion.Body>
              <Form.Group className="mb-3">
                <Form.Label>Otros títulos o estudios realizados (oficiales y no oficiales) </Form.Label>
                <Form.Control 
                type="text"
                size="sm"
                placeholder={data.otrosTitulos}
                aria-label="Disabled input example"
                disabled
                readOnly/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label> Estudios o trabajos que actualmente realiza</Form.Label>
                <Form.Control 
                type="text"
                size="sm"
                placeholder={data.estudios}
                aria-label="Disabled input example"
                disabled
                readOnly/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label> Obras publicadas o ejecutadas (materia, clase, título, edición, fecha y demás referencias)</Form.Label>
                <Form.Control 
                type="text"
                size="sm"
                placeholder={data.obras}
                aria-label="Disabled input example"
                disabled
                readOnly/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Comisiones oficiales desempeñadas (fecha, naturaleza de labor y demás referencias)</Form.Label>
                <Form.Control 
                type="text"
                size="sm"
                placeholder={data.comisiones}
                aria-label="Disabled input example"
                disabled
                readOnly/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Participación destacada en actos culturales organizados por la dependencia en que actúa o
      instituciones locales</Form.Label>
              <Form.Control 
              type="text"
              size="sm"
              placeholder={data.participacion}
              aria-label="Disabled input example"
              disabled
              readOnly/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Iniciativa (propuestas realizadas) </Form.Label>
                <Form.Control 
                type="text"
                size="sm"
                placeholder={data.iniciativa}
                aria-label="Disabled input example"
                disabled
                readOnly/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Participación en actividades de perfeccionamiento docente (cursos, cursillos, jornadas
      pedagógicas, seminarios, becas, etc.)</Form.Label>
              <Form.Control 
              type="text"
              size="sm"
              placeholder={data.perfecionamiento}
              aria-label="Disabled input example"
              disabled
              readOnly/>
              </Form.Group>
            </Accordion.Body>
            </Accordion.Item>
          </Accordion >
        </Accordion.Body>
      </Accordion.Item>
      </Accordion >
      {escuelas.map((escuela, index) => (
        <Accordion defaultActiveKey="0" className="mb-3 custom-accordion " key={index}>
          <Accordion.Item eventKey="0"> 
            <Accordion.Header>Datos de la escuela #{index + 1}</Accordion.Header>
            <Accordion.Body >
              <Form.Group className="mb-3">
                <Form.Label>Cargo del que es titular</Form.Label>
                <Form.Control 
                  type="text"
                  size="sm"
                  placeholder={data.escuelas[`escuela${escuela.id}`].cargoTitular}
                  aria-label="Disabled input example"
                  disabled
                  readOnly/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Escuela N°</Form.Label>
                <Form.Control 
                  type="text"
                  size="sm"
                  placeholder={data.escuelas[`escuela${escuela.id}`].escuela}
                  aria-label="Disabled input example"
                  disabled
                  readOnly/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Distrito</Form.Label>
                <Form.Control 
                  type="text"
                  size="sm"
                  placeholder={data.escuelas[`escuela${escuela.id}`].distrito}
                  aria-label="Disabled input example"
                  disabled
                  readOnly/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Cargo que desempeña actualmente</Form.Label>
                <Form.Control 
                  type="text"
                  size="sm"
                  placeholder={data.escuelas[`escuela${escuela.id}`].cargoActual}
                  aria-label="Disabled input example"
                  disabled
                  readOnly/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Organismo, repartición o dependencia</Form.Label>
                <Form.Control 
                  type="text"
                  size="sm"
                  placeholder={data.escuelas[`escuela${escuela.id}`].organismo}
                  aria-label="Disabled input example"
                  disabled
                  readOnly/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>¿Desde qué fecha?:</Form.Label>
                  <Form.Group>
                  <Form.Control 
                    type="text"
                    size="sm"
                    placeholder={data.escuelas[`escuela${escuela.id}`].fechaDia + " / " + data.escuelas[`escuela${escuela.id}`].fechaMes + " / " + data.escuelas[`escuela${escuela.id}`].fechaAño }
                    aria-label="Disabled input example"
                    disabled
                    readOnly/>
                  </Form.Group>
              </Form.Group>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion >
      ))}
      <Form.Group className="mb-3 ">
        <Form.Label>Lugar</Form.Label>
        <Form.Control 
          type="text"
          size="sm"
          placeholder={data.lugar}
          aria-label="Disabled input example"
          disabled
          readOnly/>
      </Form.Group>
      <Form.Group className="mb-3 ">
        <Form.Label>Fecha(actual): </Form.Label>
        <Form.Group >
        <Form.Control 
              type="text"
              size="sm"
              placeholder={`${data.lugarFechaDia} / ${data.lugarFechaMes} / ${data.lugarFechaAño}`}
              aria-label="Disabled input example"
              disabled
              readOnly/>
        </Form.Group>
      </Form.Group>
    </>
  )
}

export default FormCompleted