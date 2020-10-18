import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";

import Cursor from "../Cursor";
import WorkGridRowMobile from "./WorkGridRowMobile";

export default function WorkMobile(props) {
  // STYLES
  const useStyles = makeStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    animateIn: {
      animationName: "slidein400",
      animationDuration: "2s",
      width: "100%",
    },
    line: {
      backgroundColor: props.mainColor,
      height: 2,
      width: "90%",
      marginTop: 40,
      marginBottom: 40,
    },
  });

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.animateIn}>
        <WorkGridRowMobile
          description="Shopping platform for small businesses"
          title="Pard App"
          number={1}
          {...props}
        />
      </div>
      <div className={classes.line}></div>
      <WorkGridRowMobile
        description="Mobile bank subscription manager"
        title="Danske Bank"
        number={2}
        {...props}
      />
      <div className={classes.line}></div>
      <WorkGridRowMobile
        description="INTERNAL STARTUP DATABASE WEBSITE"
        title="Valuer.AI"
        number={3}
        {...props}
      />
    </div>
  );
}
