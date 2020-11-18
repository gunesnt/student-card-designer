import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(3),
  },
  actionsContainer: {
    marginTop: theme.spacing(3),
  },
}));

const StepperActions = ({ activeStep, setActiveStep, onGoBack, stepCount }) => {
  const classes = useStyles();

  const goBack = () =>
    setActiveStep((step) => {
      const newStep = step - 1;
      onGoBack(newStep);
      return newStep;
    });

  const goNext = () => setActiveStep((step) => step + 1);

  return (
    <div className={classes.actionsContainer}>
      <Button
        disabled={activeStep === 0}
        size="small"
        color="primary"
        className={classes.button}
        startIcon={<NavigateBeforeIcon />}
        onClick={goBack}
      >
        Back
      </Button>

      {activeStep < stepCount - 1 && (
        <Button
          size="small"
          color="primary"
          className={classes.button}
          endIcon={<NavigateNextIcon />}
          onClick={goNext}
        >
          Next
        </Button>
      )}
    </div>
  );
};

export default StepperActions;
