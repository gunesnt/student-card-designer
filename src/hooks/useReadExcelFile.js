import { useState } from "react";
import { readExcelFile } from "../utils/excel";

const useReadExcelFile = () => {
  const [workbook, setWorkbook] = useState();
  const resetWorkbook = () => setWorkbook(undefined);

  const onFileUpload = (files) => {
    if (files && files.length) {
      readExcelFile(files[0])
        .then(setWorkbook)
        .catch((err) => console.error(err));
    }
  };

  return [workbook, resetWorkbook, onFileUpload];
};

export default useReadExcelFile;
