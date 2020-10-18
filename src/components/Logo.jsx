import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";

export default function Logo(props) {
  // STYLES
  const useStyles = makeStyles({
    container: {
      width: 61,
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignContent: "center",
      cursor: "pointer",
      transform: "translateY(-6px)",
    },
    textContainer: {
      overflow: "hidden",
      height: 29,
      animationName: props.open ? "floatingLogo" : null,
      animationDuration: "3s",
      animationIterationCount: "infinite",
      animationTimingFunction: "ease-in-out",
    },
    text: {
      fontSize: 20,
      color: props.mainColor,
      fontFamily: "League-Spartain",
      transition: "0.3s",
      transitionTimingFunction: "ease-in-out",
      transform: !props.open ? "translateY(17px)" : "translateY(9px)",
      animationName: "slideDownLogo",
      animationDuration: "2s",
      animationTimingFunction: "ease-in-out",
    },
    line: {
      backgroundColor: props.mainColor,
      height: 3.2,
      width: "100%",
      marginTop: 3,
      animationName: "line",
      animationDuration: "1s",
      animationTimingFunction: "ease-in-out",
    },
  });

  const classes = useStyles();

  return (
    <div onClick={props.switchMode} className={classes.container}>
      <div className={classes.textContainer}>
        <div className={classes.text}>2020</div>
      </div>
      <div className={classes.line}></div>
    </div>
  );
}
