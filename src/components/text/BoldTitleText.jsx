import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";

export default function BoldTitleText(props) {
  // STYLES
  const useStyles = makeStyles({
    text: {
      fontSize: 24,
      color: props.mainColor,
      fontFamily: "League-Spartain",
      letterSpacing: 1.5,
      fontWeight: "bold",
      transitionDelay: "0.1s",
      transition: "0.2s",
      lineHeight: 1.35,
      transitionTimingFunction: "ease-in-out",
      textTransform: "uppercase",
      marginTop: 20,
      color: props.mainColor,
      marginBottom: 15,
      color: props.mainColor ? props.mainColor : "black",
    },
  });

  const classes = useStyles();
  return <p className={classes.text}>{props.children}</p>;
}
