import { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MuiAppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import PrintIcon from "@material-ui/icons/Print";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import BusinessIcon from "@material-ui/icons/Business";
import StudentIcon from "@material-ui/icons/Face";

import ModalsContext from "../contexts/ModalsContext";
import StudentsContext from "../contexts/StudentsContext";
import SchoolContext from "../contexts/SchoolContext";

const useStyles = makeStyles((theme) => ({
  appBar: {
    [theme.breakpoints.up("sm")]: {
      zIndex: theme.zIndex.drawer + 1,
      boxShadow: 1,
    },
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),
  },
}));

const AppBar = () => {
  const classes = useStyles();
  const { school } = useContext(SchoolContext);
  const { students } = useContext(StudentsContext);
  const { openPrintModal, openImportModal, openSchoolModal, openStudentsModal } = useContext(
    ModalsContext
  );

  return (
    <MuiAppBar color="primary" position="fixed" className={classes.appBar}>
      <Toolbar>
        <img src="/logo.svg" alt="Logo" />
        <Typography variant="h6" noWrap className={classes.title}>
          Student Card Designer
        </Typography>

        <Tooltip title="Print">
          <IconButton
            color="inherit"
            disabled={!school.name || !students.length}
            aria-label="Print"
            onClick={openPrintModal}
          >
            <PrintIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Students Review">
          <IconButton
            color="inherit"
            disabled={!school.name || !students.length}
            aria-label="Students Review"
            onClick={openStudentsModal}
          >
            <StudentIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Upload">
          <IconButton
            color="inherit"
            disabled={!school.name}
            aria-label="Upload"
            onClick={openImportModal}
          >
            <CloudUploadIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="School Info">
          <IconButton
            color="inherit"
            disabled={!school.name}
            aria-label="School Info"
            edge="end"
            onClick={openSchoolModal}
          >
            <BusinessIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
