import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
  },
}));

const Layout = (props) => {
  const classes = useStyles();
  return <Container className={classes.root} disableGutters {...props} />;
};

export default Layout;
