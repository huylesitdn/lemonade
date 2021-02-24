/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./index.scss";
import { makeStyles, useTheme } from "@material-ui/core/styles";

// ui
import {
  Divider,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },

  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
}));

const Sidebar = (props) => {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();

  const drawer = (
    <div className="drawerHeader">
      <div className="logo">
        <a href="#">
          <img src="./assets/images/logo.svg" alt="" />
        </a>
      </div>
      <Divider />
      <div className="menu">
        <List>
          <ListItem className="menuItem active" button>
            <ListItemIcon>
              <img alt="" src="./assets/images/ic-home.png" />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem className="menuItem" button>
            <ListItemIcon>
              <img alt="" src="./assets/images/ic-camp.png" />
            </ListItemIcon>
            <ListItemText primary="My campaigns" />
          </ListItem>
          <ListItem className="menuItem" button>
            <ListItemIcon>
              <img alt="" src="./assets/images/ic-set.png" />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <nav className={`${classes.drawer} navBar`} aria-label="mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={props.mobileOpen}
          onClose={props.onDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default Sidebar;
