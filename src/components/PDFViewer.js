// This code copied from https://github.com/diegomura/react-pdf/issues/477
import { Children, useEffect, useState } from "react";
import { pdfjs, Document, Page } from "react-pdf"; // PDF Viewer as HTML
import { pdf } from "@react-pdf/renderer";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFViewer = ({ children }) => {
  const [pdfUrl, setPdfUrl] = useState(null);

  useEffect(() => {
    const child = Children.only(children);

    pdf(child)
      .toBlob()
      .then((blob) => setPdfUrl(URL.createObjectURL(blob)));
  }, [children]);

  return (
    <Document file={pdfUrl}>
      <Page pageNumber={1} />
    </Document>
  );
};

export default PDFViewer;
