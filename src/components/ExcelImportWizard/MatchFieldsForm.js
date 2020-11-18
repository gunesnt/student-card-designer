import { useContext, useMemo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";

import FIELDS from "../../constants/FIELDS";
import FormContainer from "../FormContainer";
import ExcelImportContext from "../../contexts/ExcelImportContext";
import { getSheetHeaders } from "../../utils/excel";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  select: {
    width: "100%",
  },
}));

const MatchFieldsForm = () => {
  const classes = useStyles();
  const { fieldMap, setFieldMap, workbook, selectedSheet } = useContext(ExcelImportContext);

  const sheetHeaders = useMemo(
    () => (workbook && selectedSheet !== "" ? getSheetHeaders(workbook, selectedSheet) || [] : []),
    [workbook, selectedSheet]
  );

  const onFieldSelected = (prop, value) => setFieldMap({ ...fieldMap, [prop]: value });

  return (
    <FormContainer>
      <div className={classes.root}>
        <Grid container spacing={3}>
          {FIELDS.map(({ prop, label }) => (
            <Grid key={prop} item xs={12} md={6}>
              <FormControl className={classes.select}>
                <InputLabel id={`match-field-${prop}-label`}>{label}</InputLabel>
                <Select
                  labelId={`match-field-${prop}-label`}
                  id={`match-field-${prop}-select`}
                  value={fieldMap[prop]}
                  onChange={(e) => onFieldSelected(prop, e.target.value)}
                >
                  {sheetHeaders.length &&
                    sheetHeaders.map((header, index) => (
                      <MenuItem key={index} value={header}>
                        {header}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Grid>
          ))}
        </Grid>
      </div>
    </FormContainer>
  );
};

export default MatchFieldsForm;
