import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import WorkGridRow from "./WorkGridRow";
import Cursor from "../Cursor";

export default function Work(props) {
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
  });

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.animateIn}>
        <WorkGridRow
          description="Shopping platform for small businesses"
          left
          title="Pard App"
          number={1}
          {...props}
        />
      </div>
      <WorkGridRow
        description="Mobile bank subscription manager"
        right
        title="Danske Bank"
        number={2}
        {...props}
      />
      <WorkGridRow
        description="INTERNAL STARTUP DATABASE WEBSITE"
        left
        title="Valuer.AI"
        number={3}
        {...props}
      />
    </div>
  );
}
