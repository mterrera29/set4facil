import { useEffect, useState } from 'react';
import { PDFDocument, rgb, degrees } from 'pdf-lib';
import { useForm } from "react-hook-form"
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import "./App.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function App() {
  const [id,setId] = useState(1)
  const [data, setData] = useState({})
  const {register, handleSubmit} = useForm()
  const [pdfUrl, setPdfUrl] = useState(null);
  const [escuelas, setEscuelas] = useState([{id:id}]);

  const [showModal, setShowModal] = useState(false);

  const openModal = (url) => {
    setPdfUrl(url);
    setShowModal(true);
  };

  const closeModal = () => {
    setPdfUrl(null);
    setShowModal(false);
  };

  console.log(data)

  const agregarEscuela = () => {
    setId(prevID => prevID+1)
    setEscuelas([...escuelas, {id:id+1}]);
  };

  const eliminarEscuela = (index, id) => {
    const nuevasEscuelas = [...escuelas];
    nuevasEscuelas.splice(index, 1);
    setEscuelas(nuevasEscuelas);

    const newData = { ...data };
    delete newData.escuelas[`escuela${id}`];
    setData(newData);
  };


  const dataLocal = JSON.parse(localStorage.getItem(`data`))

  useEffect(() => {
    if(data.length === 0){
      setData(dataLocal)
    }
  }, [data, dataLocal])

  const saveLocal = () => {localStorage.setItem(`data`, JSON.stringify(data)) };


  const handleGeneratePDF = async (escuela) => {
    console.log(escuela)
    const pdfBytes = await fetch('/public/formulario.pdf').then((res) => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(pdfBytes);

    const fecha = `${escuela.fechaDia} / ${escuela.fechaMes} / ${escuela.fechaAño}`

    const page = pdfDoc.getPages()[0]; // Obtener la primera página existente

    page.drawText(data.desdeDia, {
      x: 101,
      y: 598,
      size: 8,
      color: rgb(0, 0, 0),
      rotate: degrees(90),
    });

    page.drawText(data.desdeMes, {
      x: 101,
      y: 613.5,
      size: 8,
      color: rgb(0, 0, 0),
      rotate: degrees(90),
    });

    page.drawText(data.desdeAño, {
      x: 101,
      y: 627,
      size: 8,
      color: rgb(0, 0, 0),
      rotate: degrees(90),
    });

    page.drawText(data.hastaDia, {
      x: 101,
      y: 648.5,
      size: 8,
      color: rgb(0, 0, 0),
      rotate: degrees(90),
    });

    // Agregar el texto de la edad
    page.drawText(data.hastaMes, {
      x: 101,
      y: 663.5,
      size: 8,
      color: rgb(0, 0, 0),
      rotate: degrees(90),
    });

    page.drawText(data.hastaAño, {
      x: 101,
      y: 678,
      size: 8,
      color: rgb(0, 0, 0),
      rotate: degrees(90),
    });

    page.drawText(data.nombreApellido, {
      x: 127,
      y: 523,
      size: 10,
      color: rgb(0, 0, 0),
      rotate: degrees(90),
    });

    page.drawText(escuela.cargoTitular, {
      x: 139,
      y: 541,
      size: 10,
      color: rgb(0, 0, 0),
      rotate: degrees(90),
    });

    page.drawText(escuela.escuela, {
      x: 139,
      y: 668,
      size: 10,
      color: rgb(0, 0, 0),
      rotate: degrees(90),
    });

    page.drawText(escuela.distrito, {
      x: 139,
      y: 742,
      size: 9,
      color: rgb(0, 0, 0),
      rotate: degrees(90),
    });

    page.drawText(escuela.cargoActual, {
      x: 151,
      y: 584,
      size: 10,
      color: rgb(0, 0, 0),
      rotate: degrees(90),
    });

    page.drawText(escuela.organismo, {
      x: 163,
      y: 590,
      size: 10,
      color: rgb(0, 0, 0),
      rotate: degrees(90),
    });

    page.drawText(fecha, {
      x: 174.5,
      y: 530,
      size: 10,
      color: rgb(0, 0, 0),
      rotate: degrees(90),
    });

    page.drawText(data.titulos, {
      x: 184.5,
      y: 553,
      size: 9,
      color: rgb(0, 0, 0),
      rotate: degrees(90),
    });

    page.drawText(data.otrosTitulos, {
      x: 204,
      y: 434,
      size: 10,
      color: rgb(0, 0, 0),
      rotate: degrees(90),
    });

    page.drawText(data.estudios, {
      x: 223,
      y: 434,
      size: 10,
      color: rgb(0, 0, 0),
      rotate: degrees(90),
    });

    page.drawText(data.obras, {
      x: 242,
      y: 434,
      size: 10,
      color: rgb(0, 0, 0),
      rotate: degrees(90),
    });

    page.drawText(data.comisiones, {
      x: 266,
      y: 434,
      size: 10,
      color: rgb(0, 0, 0),
      rotate: degrees(90),
    });

    page.drawText(data.participacion, {
      x: 295,
      y: 434,
      size: 10,
      color: rgb(0, 0, 0),
      rotate: degrees(90),
    });

    page.drawText(data.iniciativa, {
      x: 313,
      y: 434,
      size: 10,
      color: rgb(0, 0, 0),
      rotate: degrees(90),
    });

    page.drawText(data.perfecionamiento, {
      x: 342,
      y: 434,
      size: 10,
      color: rgb(0, 0, 0),
      rotate: degrees(90),
    });

    page.drawText(lugarFecha, {
      x: 432,
      y: 494,
      size: 9,
      color: rgb(0, 0, 0),
      rotate: degrees(90),
    });

    const pdfBytesModified = await pdfDoc.save();

    const blob = new Blob([pdfBytesModified], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    setPdfUrl(url); // Actualizar la URL para la previsualización
  };

  const onSubmit = (data)=>{
    setData(data);
    saveLocal()
  }

  const optionsDia = [];
  const optionsMes = [];
  const optionsAño = [];
  const optionsMuchosAños = [];

  for (let i = 1; i <= 31; i++) {
    optionsDia.push(<option key={i} value={i}>{i}</option>);
  }
  for (let i = 1; i <= 12; i++) {
    optionsMes.push(<option key={i} value={i}>{i}</option>);
  }
  for (let i = 21; i <= 23; i++) {
    optionsAño.push(<option key={i} value={i}>{i}</option>);
  }
  for (let i = 1990; i <= 2023; i++) {
    optionsMuchosAños.push(<option key={i} value={i}>{i}</option>);
  }
  const fecha = `${data.fechaDia} / ${data.fechaMes} / ${data.fechaAño}`
  const lugarFecha = `${data.lugar}, ${data.lugarFechaDia} / ${data.lugarFechaMes} / ${data.lugarFechaAño}`
  
  return (
    <div className='main'>
      <form onChange={handleSubmit(onSubmit)} className='form' style={{position:"relative"}}>
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
         <Accordion defaultActiveKey="0"className="mb-3 custom-accordion">
          <Accordion.Item eventKey="0"> 
            <Accordion.Header>Datos</Accordion.Header>
            <Accordion.Body>
              <Form.Group className="mb-3">
                <Form.Label>Nombre y Apellido</Form.Label>
                <Form.Control size="sm" type="text" name='' {...register("nombreApellido")} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Títulos docentes que posee </Form.Label>
                <Form.Control size="sm" type="text" name='' {...register("titulos")} />
              </Form.Group>
              <Accordion className="mb-3">
                <Accordion.Item eventKey="0"> 
                  <Accordion.Header>Otros Datos</Accordion.Header>
                <Accordion.Body>
                  <Form.Group className="mb-3">
                    <Form.Label>Otros títulos o estudios realizados (oficiales y no oficiales) </Form.Label>
                    <Form.Control type="text" name='' {...register("otrosTitulos")} />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label> Estudios o trabajos que actualmente realiza</Form.Label>
                    <Form.Control type="text" name='' {...register("estudios")} />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label> Obras publicadas o ejecutadas (materia, clase, título, edición, fecha y demás referencias)</Form.Label>
                    <Form.Control type="text" name='' {...register("obras")} />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Comisiones oficiales desempeñadas (fecha, naturaleza de labor y demás referencias)</Form.Label>
                    <Form.Control type="text" name='' {...register("comisiones")} />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Participación destacada en actos culturales organizados por la dependencia en que actúa o
          instituciones locales</Form.Label>
                    <Form.Control type="text" name='' {...register("participacion")} />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Iniciativa (propuestas realizadas) </Form.Label>
                    <Form.Control type="text" name='' {...register("iniciativa")} />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Participación en actividades de perfeccionamiento docente (cursos, cursillos, jornadas
          pedagógicas, seminarios, becas, etc.)</Form.Label>
                    <Form.Control type="text" name='' {...register("perfecionamiento")} />
                  </Form.Group>
                </Accordion.Body>
                </Accordion.Item>
              </Accordion >
            </Accordion.Body>
          </Accordion.Item>
        </Accordion >
        {escuelas.map((escuela, index) => (
          <Accordion className="mb-3 custom-accordion "
          key={index}>
            <Accordion.Item eventKey="0"> 
              <Accordion.Header>Datos de la escuela #{index + 1}, ID: {escuela.id} </Accordion.Header>
              <Accordion.Body >
                <Form.Group className="mb-3">
                  <Form.Label>Cargo del que es titular</Form.Label>
                  <Form.Control size="sm" type="text"  {...register(`escuelas.escuela${escuela.id}.cargoTitular`)} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Escuela N°</Form.Label>
                  <Form.Control size="sm" type="text" name='' {...register(`escuelas.escuela${escuela.id}.escuela`)} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Distrito</Form.Label>
                  <Form.Control size="sm" type="text" name='' {...register(`escuelas.escuela${escuela.id}.distrito`)} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Cargo que desempeña actualmente</Form.Label>
                  <Form.Control type="text" name='' {...register(`escuelas.escuela${escuela.id}.cargoActual`)} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Organismo, repartición o dependencia</Form.Label>
                  <Form.Control type="text" name='' {...register(`escuelas.escuela${escuela.id}.organismo`)} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>¿Desde qué fecha?:</Form.Label>
                    <Form.Group>
                      <label>Día</label>
                      <select {...register(`escuelas.escuela${escuela.id}.fechaDia`)}>
                       <option value=""></option>
                       {optionsDia}
                     </select>
                      <label>Mes</label>
                      <select {...register(`escuelas.escuela${escuela.id}.fechaMes`)}>
                       <option value=""></option>
                       {optionsMes}
                     </select>
                      <label>Año</label>
                      <select {...register(`escuelas.escuela${escuela.id}.fechaAño`)}>
                       <option value=""></option>
                       {optionsMuchosAños}
                     </select>
                    </Form.Group>
                </Form.Group>
                <Button variant="danger" onClick={()=>{eliminarEscuela(index, escuela.id)}} className="mb-3" > Eliminar Escuela</Button>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion >
        ))}
        <Button onClick={agregarEscuela} className="mb-3" >Agregar otra Escuela</Button>
        <Form.Group className="mb-3 ">
          <Form.Label>Lugar</Form.Label>
          <Form.Control type="text" name='' {...register("lugar")} />
        </Form.Group>
        <Form.Group className="mb-3 ">
          <Form.Label>Fecha(actual): </Form.Label>
          <Form.Group >
            <label>Día</label>
            <select {...register("lugarFechaDia")}>
             {optionsDia}
           </select>
            <label>Mes</label>
            <select {...register("lugarFechaMes")}>
             {optionsMes}
           </select>
            <label>Año</label>
            <select {...register("lugarFechaAño")}>
             {optionsMuchosAños}
           </select>
          </Form.Group>
        </Form.Group>
      </form>
      <br />
      {escuelas.map((escuela, index)=>(
          <Button className="mb-3" variant="secondary" key={index} onClick={()=>handleGeneratePDF(data.escuelas[`escuela${escuela.id}`]) && openModal(pdfUrl)}>Generar PDF de Escuela #{index+1}</Button>
      ))}
      {pdfUrl && (
        <div>
          <h3>Previsualización del PDF</h3>
          <a href={pdfUrl} target="_blank" rel="noreferrer" >Abrir PDF en otra página</a>
        </div>
      )}
      <div>
      {/* Botón para abrir el modal */}
      {/* <Button variant="primary" onClick={() => openModal(pdfUrl)}>
        Abrir PDF
      </Button> */}

      {/* Modal */}
      <Modal show={showModal} onHide={closeModal} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Previsualización del PDF</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* iframe para mostrar el PDF */}
          {pdfUrl && <iframe title="PDF Preview" src={pdfUrl} width="100%" height="500px"></iframe>}
        </Modal.Body>
        <Modal.Footer>
          {/* Botón de cerrar */}
          <Button variant="secondary" onClick={closeModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </div>
  );
}
export default App