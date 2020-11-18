import { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import BrushIcon from "@material-ui/icons/Brush";
import VisibilityIcon from "@material-ui/icons/Visibility";

import DesignModeContext from "../../contexts/DesignModeContext";
import PanelWrapper from "./partials/PanelWrapper";

const useStyles = makeStyles((theme) => ({
  toggleGroupWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));

const PreviewMode = () => {
  const classes = useStyles();
  const { designMode, toggleDesignMode } = useContext(DesignModeContext);

  return (
    <PanelWrapper title="Preview Mode">
      <Grid item xs={12} component={Box} display="flex" flexDirection="center">
        <ToggleButtonGroup
          value={(designMode || false).toString()}
          onChange={(_, mode) => mode && mode !== designMode && toggleDesignMode()}
          exclusive
        >
          <ToggleButton value={"true"}>
            <BrushIcon className={classes.icon} fontSize="small" />
            Design
          </ToggleButton>
          <ToggleButton value={"false"}>
            <VisibilityIcon className={classes.icon} fontSize="small" />
            PDF
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
    </PanelWrapper>
  );
};

export default PreviewMode;
