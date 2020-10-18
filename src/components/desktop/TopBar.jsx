import React, { useState, useEffect } from "react";
import LogoWrapper from "./LogoWrapper";
import { makeStyles } from "@material-ui/styles";
import SmallText from "../text/SmallText";

export default function TopBar(props) {
  // STYLES
  const useStyles = makeStyles({
    container: {
      padding: 20,
    },
  });

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <LogoWrapper {...props} />
    </div>
  );
}
