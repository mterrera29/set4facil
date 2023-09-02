/* eslint-disable react/prop-types */
import { useState, useEffect} from 'react';
import { Button, Modal } from 'react-bootstrap';
import { PDFDocument, rgb, degrees } from 'pdf-lib';

const GeneratePDF = ({escuelas, data}) => {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [pdfUrl, setPdfUrl] = useState();
  const [pdfUrls, setPdfUrls] = useState([]); // Lista de URLs de los PDF generados
  const [combinedPdfUrl, setCombinedPdfUrl] = useState();
  const [ready, setReady] = useState(false)
  console.log(showModal2)

  const lugarFecha = `${data.lugar}, ${data.lugarFechaDia} / ${data.lugarFechaMes} / ${data.lugarFechaAño}`

  const handleCloseModal1 = () => {
    setShowModal1(false)
    setPdfUrls([])
    setReady(false)
  };
  const handleShowModal1 = () => setShowModal1(true);

  const handleClose2 = () => {
    setShowModal2(false)
    setPdfUrls([])
    setReady(false)
  };
  const handleShow2 = () => setShowModal2(true);

  useEffect(() => {
    if(pdfUrls.length=== escuelas.length){
      setReady(true)
    }
  }, [pdfUrls, escuelas])

  useEffect(() => {
    if(ready){
      combinar()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready])

  const handleGeneratePDF = async (escuela) => {
    const pdfBytes = await fetch('/formulario.pdf').then((res) => res.arrayBuffer());
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
    setPdfUrls((prevUrls) => [...prevUrls, url]);
  };
  console.log(pdfUrls)

  const meterPDFs = async () => {
    await escuelas.map((escuela) => {
       handleGeneratePDF(data.escuelas[`escuela${escuela.id}`]);
    });
  };

  const combinar = async ()=>{
      const pdfDoc = await PDFDocument.create();

      for (const pdfUrl of pdfUrls) {
        const existingPdfBytes = await fetch(pdfUrl).then((res) => res.arrayBuffer());
        const existingPdfDoc = await PDFDocument.load(existingPdfBytes);
        const pages = await pdfDoc.copyPages(existingPdfDoc, existingPdfDoc.getPageIndices());
        pages.forEach((page) => pdfDoc.addPage(page));
      }
  
      const combinedPdfBytes = await pdfDoc.save();
  
      const blob = new Blob([combinedPdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      console.log("conv")
      setCombinedPdfUrl(url);
  }

  const combinePDFs = () => {
      meterPDFs()
  };
  
  const handleDownloadPDF = (escuela, index) => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `SET4 escuela #${index + 1}.pdf`;
    link.click();
  };

  const handleDownloadPDF2 = () => {
    const link = document.createElement('a');
    link.href = combinedPdfUrl;
    link.download = `SET4.pdf`;
    link.click();
  };

  const handleShowPDF = () => {
    window.open(pdfUrl, '_blank');
  };
  const handleShowPDF2 = () => {
    window.open(combinedPdfUrl, '_blank');
  };
  const handlePrintPDF = () => {
    const printWindow = window.open(pdfUrl, '_blank');
    printWindow.onload = () => {
      printWindow.print();
    };
  }
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
      {escuelas.map((escuela, index)=>(
        <div key={index}>
          <Button  className="mb-3" variant="secondary" 
          onClick={()=>{
            handleGeneratePDF(data.escuelas[`escuela${escuela.id}`])
            handleShowModal1() 
            }
          }>
           Generar SET4 de Escuela #{index + 1}
          </Button>
          <Modal show={showModal1} onHide={handleCloseModal1}>
            <Modal.Header closeButton>
              <Modal.Title>SET 4 Escuela #{index +1}</Modal.Title>
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
      ))}
      
    </>
  )
}

export default GeneratePDF