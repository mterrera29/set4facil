/* eslint-disable react/prop-types */
import {  Modal } from 'react-bootstrap';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import combinedPNG from "../assets/combinarPDF2.png"
import verPNG from "../assets/ver.png"
import descargarPNG from "../assets/descargar.png"
import imprimirPNG from "../assets/imprimir.png"
const CombinedPDF = ({combinePDFs, combinedPdfUrl, reset}) => {
  const [showModal2, setShowModal2] = useState(false);

  const handleClose2 = () => {
    setShowModal2(false)
    reset()
  };
  const handleShow2 = () => setShowModal2(true);

  const handleDownloadPDF2 = () => {
    const link = document.createElement('a');
    link.href = combinedPdfUrl;
    link.download = `SET4.pdf`;
    link.click();
  };

  const handleShowPDF2 = () => {
    window.open(combinedPdfUrl, '_blank');
  };
  const handlePrintPDF2 = () => {
    const printWindow = window.open(combinedPdfUrl, '_blank');
    printWindow.onload = () => {
      printWindow.print();
    };
  }

  return (
    <>
      <section style={{display:"flex", alignItems:"center", paddingLeft:"10px", marginBottom:"15px"}}>
        <Button color='success' variant="contained"  onClick={()=>{
          combinePDFs()
          handleShow2()
        }}>
          Combinar PDFs
            <img className="escuelaIcon2" src={combinedPNG} alt="" />
        </Button>
      </section>
        <Modal centered show={showModal2} onHide={handleClose2}>
          <Modal.Header closeButton>
            <img className="escuelaIcon2" src={combinedPNG} alt="" />
            <Modal.Title><Typography style={{fontSize:"30px"}}><strong>Un solo archivo</strong></Typography></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <Button color='success' className="mb-3" Button variant="contained" onClick={()=>handleShowPDF2()}>
              Ver PDF
              <img className="escuelaIcon2" src={verPNG} alt="" />
            </Button>
            <Button color='success' className="mb-3" Button variant="contained" onClick={()=>handleDownloadPDF2()}>
              Descargar PDF
              <img className="escuelaIcon2" src={descargarPNG} alt="" />
            </Button>
            <div className=' ocultar-en-mobile'>
              <Button color='success' className="mb-3" Button variant="contained" onClick={()=>handlePrintPDF2()}>
                Imprimir PDF
                <img className="escuelaIcon2" src={imprimirPNG} alt="" />
              </Button>
            </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button color='success' variant="contained" onClick={handleClose2}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
    </>
  )
}

export default CombinedPDF