import React from "react";
import "./index.scss";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 8,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#FFCC00",
  },
}))(LinearProgress);

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const LinearProgressCustom = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BorderLinearProgress
        className="lineProgress"
        variant="determinate"
        value={props.value || 0}
      />
    </div>
  );
};

export { LinearProgressCustom };
