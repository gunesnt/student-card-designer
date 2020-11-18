import { useContext } from "react";
import Button from "@material-ui/core/Button";
import DialogContentText from "@material-ui/core/DialogContentText";

import ModalsContext from "../contexts/ModalsContext";
import SchoolContext from "../contexts/SchoolContext";
import StudentsContext from "../contexts/StudentsContext";
import ExcelImportContext from "../contexts/ExcelImportContext";
import ResponsiveModal from "./ResponsiveModal";
import ExcelImportWizard from "./ExcelImportWizard";

const ExcelImportModal = () => {
  const { importOpen, closeImportModal } = useContext(ModalsContext);

  const { school } = useContext(SchoolContext);
  const { setStudents } = useContext(StudentsContext);
  const { parseSelectedSheet, finished } = useContext(ExcelImportContext);

  const importData = () => {
    setStudents(school, parseSelectedSheet());
    closeImportModal();
  };

  return (
    <ResponsiveModal
      id="excel-import"
      open={importOpen}
      onClose={closeImportModal}
      maxWidth="sm"
      title="Upload Student Data"
      actions={
        <>
          <Button color="primary" onClick={closeImportModal}>
            Cancel
          </Button>

          <Button color="primary" disabled={!finished} onClick={importData} autoFocus>
            Save
          </Button>
        </>
      }
    >
      <DialogContentText>Follow the wizard to import students:</DialogContentText>
      <ExcelImportWizard />
    </ResponsiveModal>
  );
};

export default ExcelImportModal;
