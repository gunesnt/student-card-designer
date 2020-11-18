import { useContext } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import DialogContentText from "@material-ui/core/DialogContentText";

import ModalsContext from "../contexts/ModalsContext";
import ResponsiveModal from "./ResponsiveModal";
import DownloadPDFButton from "./DownloadPDFButton";

const StudentsModal = () => {
  const { printOpen, closePrintModal } = useContext(ModalsContext);

  return (
    <ResponsiveModal
      id="print"
      open={printOpen}
      onClose={closePrintModal}
      maxWidth="sm"
      title="Print"
      actions={
        <>
          <Button color="primary" onClick={closePrintModal}>
            Cancel
          </Button>

          <DownloadPDFButton
            default
            color="primary"
            fileName="student-cards.pdf"
            onDownload={closePrintModal}
            autoFocus
          >
            Download PDF File
          </DownloadPDFButton>
        </>
      }
    >
      <Box mb={3}>
        <DialogContentText>
          You can click the "Download PDF File" button to print in your local printer.
        </DialogContentText>
      </Box>
    </ResponsiveModal>
  );
};

export default StudentsModal;
