/* eslint-disable react/prop-types */
import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import Button from '@mui/material/Button';

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
          <Button  className="mb-3" variant="outlined" 
          onClick={()=>{
            handleGeneratePDF(data.escuelas[`escuela${escuela.id}`])
            handleShowModal1() 
            }
          }>
           Generar SET4 de Escuela #{index + 1}
          </Button>
          <Modal show={showModal1} onHide={handleCloseModal1}>
            <Modal.Header closeButton>
              <h1>SET 4 Escuela #{index +1}</h1>
            </Modal.Header>
            <Modal.Body>
              <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <Button className="mb-3" variant="secondary" onClick={()=>handleShowPDF(escuela, index)}>
                  Ver PDF
                </Button>
                <Button  className="mb-3" variant="secondary" onClick={()=>handleDownloadPDF(escuela, index)}>
                  Descargar PDF
                </Button>
                <Button className="mb-3" variant="secondary" onClick={()=>handlePrintPDF()}>
                  Imprimir PDF
                </Button>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal1}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
    </>
  )
}

export default IndividualPDF