import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import FormContainer from "../FormContainer";

const useStyles = makeStyles((theme) => ({
  select: {
    minWidth: theme.spacing(20),
  },
}));

const SheetSelectForm = ({ workbook, selectedSheet, setSelectedSheet }) => {
  const classes = useStyles();

  const onSheetSelectChanged = (event) => setSelectedSheet(event.target.value);

  return (
    <FormContainer>
      <FormControl className={classes.select} disabled={!workbook}>
        <InputLabel id="sheet-select-label">Sheet</InputLabel>
        <Select
          labelId="sheet-select-label"
          id="sheet-select"
          value={selectedSheet}
          onChange={onSheetSelectChanged}
        >
          {workbook &&
            workbook.SheetNames.map((sheet, index) => (
              <MenuItem key={index} value={index}>
                {sheet}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </FormContainer>
  );
};

export default SheetSelectForm;
