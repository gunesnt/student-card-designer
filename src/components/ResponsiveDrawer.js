import { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";

import MainDrawerContext from "../contexts/MainDrawerContext";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));

const ResponsiveDrawer = ({ window, children }) => {
  const classes = useStyles();
  const container = window && (() => window().document.body);
  const { open, closeDrawer } = useContext(MainDrawerContext);

  return (
    <nav className={classes.drawer}>
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          open={open}
          onClose={closeDrawer}
          classes={{ paper: classes.drawerPaper }}
          ModalProps={{ keepMounted: true }}
        >
          {children}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer classes={{ paper: classes.drawerPaper }} variant="permanent" open>
          {children}
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default ResponsiveDrawer;
