import React, { useState } from "react";
import "./index.scss";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

// ui
import { CssBaseline, Grid } from "@material-ui/core";

// components
import Header from "../Layouts/Header";
import Sidebar from "../Layouts/Sidebar";
import { LinearProgressCustom } from "../common/Progress";
import Wallets from "./Wallets";
import LatestTransactions from "./LatestTransactions";
import Charts from "./Charts";
import LineChart from "./GoogleCharts/LineChart";

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
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
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  // progress
  top: {
    color: "#1a90ff",
    animationDuration: "550ms",
    position: "absolute",
    left: 0,
  },
  circle: {
    strokeLinecap: "round",
  },
}));

const DashboardLayout = (props) => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />

      {/* header */}
      <Header onDrawerToggle={handleDrawerToggle} />

      {/* sidebar */}
      <Sidebar onDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />

      <main className="mainDashboard">
        <div className="mainContent">
          <Grid container spacing={4}>
            <Grid item sm={7}>
              <h3 className="title">
                First token sell of Jigstack! Premier Ethereum network assets of
                2021
              </h3>

              <div className="bonusPeriod">
                <h3>Bonus period</h3>
                <div className="times">
                  <span className="totalTime">48 hrs</span>
                  <span className="lastTime">Last 1 hour</span>
                </div>
              </div>
              <div className="viewChart">
                <Charts />
              </div>

              <div className="status">
                <h4>24 hours to go</h4>
                <p>Pledged 16.000.000</p>
                <LinearProgressCustom variant="determinate" value={70} />
                <div className="info">
                  <div className="infoLeft">
                    <h5>9.767.342</h5>
                    <p>Sold</p>
                  </div>
                  <div className="infoRight">
                    <h5>6.232.658</h5>
                    <p>Left</p>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item sm={5}>
              <Wallets />
              <LatestTransactions />
            </Grid>
          </Grid>

          {/* <LineChart /> */}
        </div>
      </main>
    </div>
  );
};

DashboardLayout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashboardLayout;
