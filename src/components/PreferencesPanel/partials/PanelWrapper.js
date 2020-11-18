import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: theme.spacing(2.5),
    marginBottom: theme.spacing(2.5),
  },
  label: {
    lineHeight: 1,
  },
}));

const PanelWrapper = ({ title, children }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.wrapper}>
      <Grid item xs={12}>
        <Typography variant="overline" color="textSecondary" className={classes.label}>
          {title}
        </Typography>
      </Grid>
      {children}
    </Grid>
  );
};

export default PanelWrapper;
