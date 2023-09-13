import { PDFDocument, rgb, degrees } from 'pdf-lib';

export const handleGeneratePDF = async (escuela, data, lugarFecha, setPdfUrl, setPdfUrls) => {
  const pdfBytes = await fetch('/formulario.pdf').then((res) => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(pdfBytes);

  const fecha = `${escuela.fechaDia} / ${escuela.fechaMes} / ${escuela.fechaAño}`

  const page = pdfDoc.getPages()[0]; // Obtener la primera página existente

  page.drawText(data.desdeDia, {
    x: 102,
    y: 598,
    size: 8,
    color: rgb(0, 0, 0),
    rotate: degrees(90),
  });

  page.drawText(data.desdeMes, {
    x: 102,
    y: 613.5,
    size: 8,
    color: rgb(0, 0, 0),
    rotate: degrees(90),
  });

  page.drawText(data.desdeAño, {
    x: 102,
    y: 627,
    size: 8,
    color: rgb(0, 0, 0),
    rotate: degrees(90),
  });

  page.drawText(data.hastaDia, {
    x: 102,
    y: 648.5,
    size: 8,
    color: rgb(0, 0, 0),
    rotate: degrees(90),
  });

  // Agregar el texto de la edad
  page.drawText(data.hastaMes, {
    x: 102,
    y: 663.5,
    size: 8,
    color: rgb(0, 0, 0),
    rotate: degrees(90),
  });

  page.drawText(data.hastaAño, {
    x: 102,
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
    y: 538,
    size: 9,
    color: rgb(0, 0, 0),
    rotate: degrees(90),
  });

  page.drawText(escuela.escuela, {
    x: 139,
    y: 664,
    size: 9,
    color: rgb(0, 0, 0),
    rotate: degrees(90),
  });

  page.drawText(escuela.distrito, {
    x: 139,
    y: 738,
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
};