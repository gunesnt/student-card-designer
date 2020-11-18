import Dz from "react-dropzone";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(10),
    backgroundColor: grey[100],
    cursor: "default",
  },
}));

const Dropzone = ({ children, ...props }) => {
  const classes = useStyles();

  return (
    <Dz {...props}>
      {({ getRootProps, getInputProps }) => (
        <section>
          <Paper variant="outlined" classes={classes} {...getRootProps()}>
            <input {...getInputProps()} />
            <Typography variant="subtitle1" color="textSecondary" align="center">
              {children || (
                <>
                  Drag 'n' drop excel file here,
                  <br />
                  or click to select files
                </>
              )}
            </Typography>
          </Paper>
        </section>
      )}
    </Dz>
  );
};

export default Dropzone;
