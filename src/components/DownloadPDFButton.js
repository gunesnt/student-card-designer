import { useContext } from "react";
import { BlobProvider } from "@react-pdf/renderer";
import Button from "@material-ui/core/Button";

import TestDoc from "../TestDoc";
import SchoolContext from "../contexts/SchoolContext";
import StudentsContext from "../contexts/StudentsContext";
import DocTemplateContext from "../contexts/DocTemplateContext";

const DownloadPDFButton = ({ fileName = "document.pdf", onDownload, children, ...props }) => {
  const { school, loading: schoolLoading } = useContext(SchoolContext);
  const { template } = useContext(DocTemplateContext);
  const { students } = useContext(StudentsContext);

  if (schoolLoading) return <></>;

  const downloadOnIE = (blob) => () => {
    if (window.navigator.msSaveBlob) window.navigator.msSaveBlob(blob, fileName);
    if (onDownload) onDownload();
  };

  return (
    <BlobProvider document={<TestDoc {...{ school, template, students }} />}>
      {({ blob, url, loading, error }) => {
        return (
          <Button
            {...props}
            disabled={loading}
            download={fileName}
            href={url}
            onClick={downloadOnIE(blob)}
          >
            {loading ? "Preparing" : children}
          </Button>
        );
      }}
    </BlobProvider>
  );
};

export default DownloadPDFButton;
