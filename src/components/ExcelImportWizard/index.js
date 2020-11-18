import { useState, useEffect, useMemo, useContext } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";

import StepperActions from "../StepperActions";
import Dropzone from "../Dropzone";
import SheetSelectForm from "./SheetSelectForm";
import MatchFieldsForm from "./MatchFieldsForm";
import ExcelImportContext from "../../contexts/ExcelImportContext";

const ExcelImportWizard = () => {
  const [activeStep, setActiveStep] = useState(0);
  const {
    workbook,
    resetWorkbook,
    onFileUpload,
    selectedSheet,
    setSelectedSheet,
    resetFieldMap,
  } = useContext(ExcelImportContext);

  const selectedSheetName = useMemo(
    () => (workbook && selectedSheet !== "" ? workbook.SheetNames[selectedSheet] : undefined),
    [workbook, selectedSheet]
  );

  useEffect(() => {
    if (workbook && activeStep === 0) setActiveStep(1);
  }, [workbook, activeStep]);

  const updateSelectedSheet = (newSelected) => {
    resetFieldMap();
    setSelectedSheet(newSelected || "");
  };

  const onGoBack = (newStep) => {
    if (newStep === 0) {
      resetWorkbook();
      updateSelectedSheet();
      resetFieldMap();
    }
  };

  return (
    <Stepper activeStep={activeStep} orientation="vertical">
      <Step>
        <StepLabel>Upload</StepLabel>
        <StepContent>
          <Dropzone accept={[".xls", ".xlsx"]} onDrop={onFileUpload} disabled={!!workbook}>
            Drag 'n' drop excel file here,
            <br />
            or click to select files
          </Dropzone>
        </StepContent>
      </Step>

      <Step>
        <StepLabel>Select the sheet {selectedSheetName ? `(${selectedSheetName})` : ""}</StepLabel>
        <StepContent>
          <SheetSelectForm
            {...{ workbook, selectedSheet }}
            setSelectedSheet={updateSelectedSheet}
          />
          <StepperActions {...{ activeStep, setActiveStep, onGoBack }} stepCount={3} />
        </StepContent>
      </Step>

      <Step>
        <StepLabel>Matching the fields</StepLabel>
        <StepContent>
          Select the matched column names in your excel sheet:
          <MatchFieldsForm />
          <StepperActions {...{ activeStep, setActiveStep, onGoBack }} stepCount={3} />
        </StepContent>
      </Step>
    </Stepper>
  );
};

export default ExcelImportWizard;
