import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

const FormContainer = (props) => {
  const classes = useStyles();
  return <div className={classes.formContainer} {...props} />;
};

export default FormContainer;
