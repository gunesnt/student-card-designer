import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

import PreviewMode from "./PreviewMode";
import PageSize from "./PageSize";
import Color from "./Color";
import Font from "./Font";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0, 2.5),
  },
  divider: {
    margin: theme.spacing(0, -2.5),
  },
}));

const PreferencesPanel = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <PreviewMode />
      <Divider className={classes.divider} />
      <PageSize />
      <Divider className={classes.divider} />
      <Color />
      <Divider className={classes.divider} />
      <Font />
    </div>
  );
};

export default PreferencesPanel;
