import { createContext } from "react";
import useModalState from "../hooks/useModalState";

const ModalsContext = createContext(null);

export const ModalsProvider = ({ children }) => {
  const [schoolOpen, openSchoolModal, closeSchoolModal] = useModalState(false);
  const [importOpen, openImportModal, closeImportModal] = useModalState(false);
  const [studentsOpen, openStudentsModal, closeStudentsModal] = useModalState(false);
  const [printOpen, openPrintModal, closePrintModal] = useModalState(false);

  return (
    <ModalsContext.Provider
      value={{
        schoolOpen,
        openSchoolModal,
        closeSchoolModal,
        importOpen,
        openImportModal,
        closeImportModal,
        studentsOpen,
        openStudentsModal,
        closeStudentsModal,
        printOpen,
        openPrintModal,
        closePrintModal,
      }}
    >
      {children}
    </ModalsContext.Provider>
  );
};

export default ModalsContext;
