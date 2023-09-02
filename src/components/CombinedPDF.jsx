/* eslint-disable react/prop-types */
import { Button, Modal } from 'react-bootstrap';

const CombinedPDF = ({combinePDFs, handleShow2, handleShowPDF2, handlePrintPDF2, handleClose2, showModal2, handleDownloadPDF2}) => {

  return (
    <>
    <Button className="mb-3" variant="secondary" onClick={()=>combinePDFs()&& handleShow2()}>
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