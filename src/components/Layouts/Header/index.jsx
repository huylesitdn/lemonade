/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import "./index.scss";
import { makeStyles } from "@material-ui/core/styles";

// icons
import MenuIcon from "@material-ui/icons/Menu";
// ui
import {
  AppBar,
  IconButton,
  Toolbar,
  Button,
  Avatar,
} from "@material-ui/core";
// components
import { ButtonAdd } from "../../common/Button";

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  appBar: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const Header = (props) => {
  const classes = useStyles();

  return (
    <AppBar className="header" position="fixed" className={classes.appBar}>
      <Toolbar className="headerToolbar">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={props.onDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <div className='wrapperMenu'>
          <div className="mainMenu">
            <ButtonAdd label="Create new campaign" />
            <Button
              className="btnCustom"
              color="default"
              endIcon={<img alt="" src="./assets/images/share.png" />}
            >
              View public campaigns
            </Button>
          </div>

          <div className="rightMenu">
            <a href="#" className="notify">
              <img src="./assets/images/bell.png" alt="" />
            </a>
            <Avatar className='avatar' size={40} src="./assets/images/user.png" alt="" />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
