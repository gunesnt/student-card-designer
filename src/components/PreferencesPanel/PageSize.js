import { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import InsertDriveFileOutlinedIcon from "@material-ui/icons/InsertDriveFileOutlined";
import NoteOutlinedIcon from "@material-ui/icons/NoteOutlined";

import { SMALL_PAGE_SIZE_NAMES } from "../../constants/PDF";
import DocTemplateContext from "../../contexts/DocTemplateContext";
import PanelWrapper from "./partials/PanelWrapper";

const useStyles = makeStyles(() => ({
  toggleGroupWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
}));

const PageSize = () => {
  const classes = useStyles();
  const { template, setTemplateProp } = useContext(DocTemplateContext);

  return (
    <PanelWrapper title="Page">
      <Grid item xs>
        <FormControl fullWidth>
          <InputLabel id="page-size-select-label" shrink>
            Size
          </InputLabel>
          <Select
            id="page-size-select"
            labelId="page-size-select-label"
            value={template.sizeName || ""}
            onChange={(e) => setTemplateProp({ sizeName: e.target.value })}
            displayEmpty
          >
            <MenuItem value="">
              <em>Custom</em>
            </MenuItem>
            {SMALL_PAGE_SIZE_NAMES.map((sizeName) => (
              <MenuItem key={sizeName} value={sizeName} dense>
                {sizeName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item className={classes.toggleGroupWrapper}>
        <ToggleButtonGroup
          value={template.orientation}
          onChange={(_, ori) => ori && setTemplateProp({ orientation: ori })}
          size="small"
          exclusive
        >
          <ToggleButton value="portrait">
            <InsertDriveFileOutlinedIcon />
          </ToggleButton>
          <ToggleButton value="landscape">
            <NoteOutlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>

      <Grid item xs={6}>
        <TextField
          label="Width"
          value={template.width || ""}
          onChange={(e) => setTemplateProp({ width: e.target.value })}
          disabled
          InputProps={{
            endAdornment: <InputAdornment>pt</InputAdornment>,
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Height"
          value={template.height || ""}
          onChange={(e) => setTemplateProp({ height: e.target.value })}
          disabled
          InputProps={{
            endAdornment: <InputAdornment>pt</InputAdornment>,
          }}
        />
      </Grid>
    </PanelWrapper>
  );
};

export default PageSize;
