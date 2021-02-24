import React from "react";
import "./index.scss";

import { Button } from "@material-ui/core";

const ButtonAdd = (props) => {
  return (
    <Button
      className="buttonAdd"
      variant={props.variant}
      color="primary"
      startIcon={<img alt="" src="./assets/images/edit.png" />}
    >
      {props.label}
    </Button>
  );
};

export { ButtonAdd };
