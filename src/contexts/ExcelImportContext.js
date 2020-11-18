import { createContext, useState, useMemo, useEffect } from "react";
import FIELDS from "../constants/FIELDS";
import { parseSheet } from "../utils/excel";
import useReadExcelFile from "../hooks/useReadExcelFile";

const DEFAULT_FIELD_MAP = Object.fromEntries(FIELDS.map((field) => [field.prop, ""]));

const ExcelImportContext = createContext(null);

export const ExcelImportProvider = ({ children }) => {
  const [workbook, resetWorkbook, onFileUpload] = useReadExcelFile();
  const [selectedSheet, setSelectedSheet] = useState("");
  const [fieldMap, setFieldMap] = useState(DEFAULT_FIELD_MAP);

  const resetFieldMap = () => setFieldMap(DEFAULT_FIELD_MAP);

  useEffect(() => {
    if (workbook && selectedSheet === "") setSelectedSheet("0");
  }, [workbook, selectedSheet, setSelectedSheet]);

  const finished = useMemo(() => !Object.values(fieldMap).filter((v) => v === "").length, [
    fieldMap,
  ]);

  const parseSelectedSheet = () => parseSheet(workbook, selectedSheet, fieldMap);

  return (
    <ExcelImportContext.Provider
      value={{
        workbook,
        resetWorkbook,
        onFileUpload,
        selectedSheet,
        setSelectedSheet,
        fieldMap,
        setFieldMap,
        resetFieldMap,
        parseSelectedSheet,
        finished,
      }}
    >
      {children}
    </ExcelImportContext.Provider>
  );
};

export default ExcelImportContext;
