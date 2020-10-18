import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";

export default function ProjectHeading(props) {
  // STYLES
  const useStyles = makeStyles({
    text: {
      fontSize: 28,
      color: props.mainColor,
      fontFamily: "Roboto",
      letterSpacing: 3,
      fontWeight: 400,
      transitionDelay: "0.1s",
      transition: "0.2s",
      lineHeight: 1.35,
      transitionTimingFunction: "ease-in-out",
      textTransform: "uppercase",
      marginTop: 0,
      color: props.mainColor,
      marginBottom: 15,
      color: props.mainColor ? props.mainColor : "black",
    },
  });

  const classes = useStyles();
  return <p className={classes.text}>{props.children}</p>;
}
