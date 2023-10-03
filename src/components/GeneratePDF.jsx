/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { PDFDocument } from 'pdf-lib';
import IndividualPDF from './IndividualPDF';
import CombinedPDF from './CombinedPDF';
import { handleGeneratePDF } from './handleGeneratePDF';
import { Card } from '@mui/material';

const GeneratePDF = ({ escuelas, data }) => {
  const [pdfUrl, setPdfUrl] = useState();
  const [pdfUrls, setPdfUrls] = useState([]); // Lista de URLs de los PDF generados
  const [combinedPdfUrl, setCombinedPdfUrl] = useState();
  const [ready, setReady] = useState(false);

  const lugarFecha = `${data.lugar}, ${data.lugarFechaDia} / ${data.lugarFechaMes} / ${data.lugarFechaAño}`;

  const reset = () => {
    setPdfUrls([]);
    setReady(false);
  };

  useEffect(() => {
    if (pdfUrls.length === escuelas.length) {
      setReady(true);
    }
  }, [pdfUrls, escuelas]);

  useEffect(() => {
    if (ready) {
      combinar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready]);

  /* const handleGeneratePDF = async (escuela) => {
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
      y: 535,
      size: 9,
      color: rgb(0, 0, 0),
      rotate: degrees(90),
    });

    page.drawText(escuela.escuela, {
      x: 139,
      y: 661,
      size: 9,
      color: rgb(0, 0, 0),
      rotate: degrees(90),
    });

    page.drawText(escuela.distrito, {
      x: 139,
      y: 736,
      size: 9,
      color: rgb(0, 0, 0),
      rotate: degrees(90),
    });

    page.drawText(escuela.cargoActual, {
      x: 151,
      y: 584,
      size: 9,
      color: rgb(0, 0, 0),
      rotate: degrees(90),
    });

    page.drawText(escuela.organismo, {
      x: 163,
      y: 590,
      size: 9,
      color: rgb(0, 0, 0),
      rotate: degrees(90),
    });

    page.drawText(fecha, {
      x: 174.5,
      y: 530,
      size: 9,
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
      size: 9,
      color: rgb(0, 0, 0),
      rotate: degrees(90),
    });

    page.drawText(data.estudios, {
      x: 223,
      y: 434,
      size: 9,
      color: rgb(0, 0, 0),
      rotate: degrees(90),
    });

    page.drawText(data.obras, {
      x: 242,
      y: 434,
      size: 9,
      color: rgb(0, 0, 0),
      rotate: degrees(90),
    });

    page.drawText(data.comisiones, {
      x: 266,
      y: 434,
      size: 9,
      color: rgb(0, 0, 0),
      rotate: degrees(90),
    });

    page.drawText(data.participacion, {
      x: 295,
      y: 434,
      size: 9,
      color: rgb(0, 0, 0),
      rotate: degrees(90),
    });

    page.drawText(data.iniciativa, {
      x: 313,
      y: 434,
      size: 9,
      color: rgb(0, 0, 0),
      rotate: degrees(90),
    });

    page.drawText(data.perfecionamiento, {
      x: 342,
      y: 434,
      size: 9,
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
  }; */

  console.log(pdfUrls);

  const meterPDFs = async () => {
    await escuelas.map((escuela) => {
      handleGeneratePDF(
        data.escuelas[`escuela${escuela.id}`],
        data,
        lugarFecha,
        setPdfUrl,
        setPdfUrls
      );
    });
  };

  const combinar = async () => {
    const pdfDoc = await PDFDocument.create();

    for (const pdfUrl of pdfUrls) {
      const existingPdfBytes = await fetch(pdfUrl).then((res) =>
        res.arrayBuffer()
      );
      const existingPdfDoc = await PDFDocument.load(existingPdfBytes);
      const pages = await pdfDoc.copyPages(
        existingPdfDoc,
        existingPdfDoc.getPageIndices()
      );
      pages.forEach((page) => pdfDoc.addPage(page));
    }

    const combinedPdfBytes = await pdfDoc.save();

    const blob = new Blob([combinedPdfBytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    console.log('conv');
    setCombinedPdfUrl(url);
  };

  const combinePDFs = () => {
    meterPDFs();
  };

  const generatePDF = async (escuela) => {
    await handleGeneratePDF(escuela, data, lugarFecha, setPdfUrl, setPdfUrls);
  };

  return (
    <>
      <Card
        style={{
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1
          className='titles'
          style={{
            fontSize: '30px',
            textAlign: 'center',
            fontWeight: 'bold',
            lineHeight: '1.125',
          }}
        >
          Generar PDF
        </h1>
        <div
          style={{
            fontSize: '15px',
            textAlign: 'center',
            lineHeight: '1.125',
            color: 'rgb(82, 82, 82, 0.8)',
            marginBottom: '10px',
          }}
        >
          Generar un PDF para cada escuela:
        </div>
        {escuelas.map((escuela, index) => (
          <IndividualPDF
            key={index}
            index={index}
            handleGeneratePDF={generatePDF}
            data={data}
            escuela={escuela}
            reset={reset}
            pdfUrl={pdfUrl}
          />
        ))}
        <div
          style={{
            fontSize: '15px',
            textAlign: 'center',
            lineHeight: '1.125',
            color: 'rgb(82, 82, 82, 0.8)',
            marginBottom: '10px',
          }}
        >
          Generar un solo PDF combinando los archivos de cada escuela:
        </div>
        <CombinedPDF
          combinePDFs={combinePDFs}
          reset={reset}
          combinedPdfUrl={combinedPdfUrl}
        />
      </Card>
    </>
  );
};

export default GeneratePDF;
