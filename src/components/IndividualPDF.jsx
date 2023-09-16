/* eslint-disable react/prop-types */
import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import descargarPNG from "../assets/descargarPDF.png"
import verPNG from "../assets/ver.png"
import descargar2PNG from "../assets/descargar.png"
import imprimirPNG from "../assets/imprimir.png"

const IndividualPDF = ({index, handleGeneratePDF, data, escuela, reset, pdfUrl }) => {
  const [showModal1, setShowModal1] = useState(false);
    
  const handleCloseModal1 = () => {
    setShowModal1(false)
    reset()
  };
  
  const handleShowModal1 = () => setShowModal1(true);

  const handleDownloadPDF = (escuela, index) => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `SET4 escuela #${index + 1}.pdf`;
    link.click();
  };

  const handleShowPDF = () => {
    window.open(pdfUrl, '_blank');
  };

  const handlePrintPDF = () => {
    const printWindow = window.open(pdfUrl, '_blank');
    printWindow.onload = () => {
      printWindow.print();
    };
  }
  
  return (
    <>
      <div>
          <section style={{display:"flex", alignItems:"center", paddingLeft:"10px", marginBottom:"15px"}}>
            <Button color='success' variant="contained" 
            onClick={()=>{
              handleGeneratePDF(data.escuelas[`escuela${escuela.id}`])
              handleShowModal1() 
            }
          }>
             SET4 de Escuela #{index + 1}
              <img className="escuelaIcon2" src={descargarPNG} alt="" />
            </Button>
          </section>
          <Modal centered show={showModal1} onHide={handleCloseModal1}>
            <Modal.Header closeButton>
              <img className="escuelaIcon2" src={descargarPNG} alt="" />
              <Modal.Title><Typography style={{fontSize:"30px"}}><strong>SET 4 Escuela #{index +1}</strong></Typography></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <Button color='success' className="mb-3" variant="contained" onClick={()=>handleShowPDF(escuela, index)}>
                  Ver PDF
                <img className="escuelaIcon2" src={verPNG} alt="" />
                </Button>
                <Button color='success'  className="mb-3" variant="contained" onClick={()=>handleDownloadPDF(escuela, index)}>
                  Descargar PDF
                  <img className="escuelaIcon2" src={descargar2PNG} alt="" />
                </Button>
                <div className='ocultar-en-mobile'>
                  <Button color='success' className="mb-3 "variant="contained" onClick={()=>handlePrintPDF()}>
                    Imprimir PDF
                    <img className="escuelaIcon2" src={imprimirPNG} alt="" />
                  </Button>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button color='success' Button variant="contained" onClick={handleCloseModal1}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
    </>
  )
}

export default IndividualPDF