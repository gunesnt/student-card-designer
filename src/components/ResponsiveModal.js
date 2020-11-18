import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

const ResponsiveModal = ({ id, title, children, actions, maxWidth = "xs", ...props }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down(maxWidth));

  return (
    <Dialog
      fullScreen={fullScreen}
      aria-labelledby={`${id}-modal-title`}
      maxWidth={maxWidth}
      fullWidth
      {...props}
    >
      <DialogTitle id={`${id}-modal-title`}>{title}</DialogTitle>

      <DialogContent>{children}</DialogContent>

      <DialogActions>
        {actions || (
          <Button color="primary" onClick={props.onClose} autoFocus>
            close
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default ResponsiveModal;
