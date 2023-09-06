/* eslint-disable react/prop-types */
import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';

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
    <Button className="mb-3" variant="secondary" onClick={()=>{
      combinePDFs()
      handleShow2()
      }}>
        Combinar PDFs Generados
      </Button>
      <Modal show={showModal2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Un solo archivo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
          <Button className="mb-3" variant="secondary" onClick={()=>handleShowPDF2()}>
            Ver PDF
          </Button>
          <Button className="mb-3" variant="secondary" onClick={()=>handleDownloadPDF2()}>
            Descargar PDF
          </Button>
          <Button className="mb-3" variant="secondary" onClick={()=>handlePrintPDF2()}>
            Imprimir PDF
          </Button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default CombinedPDF