import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";

export default function ProjectHeadingSmaller(props) {
  // STYLES
  const useStyles = makeStyles({
    text: {
      fontSize: props.small ? 22 : 26,
      color: props.mainColor,
      fontFamily: "Roboto",
      letterSpacing: 1,
      fontWeight: "bold",
      transitionDelay: "0.1s",
      transition: "0.2s",
      lineHeight: 1.35,
      transitionTimingFunction: "ease-in-out",
      marginTop: 0,
      userSelect: "none",
      WebkitUserSelect: "none",
      color: props.mainColor,
      marginBottom: 15,
      color: props.mainColor ? props.mainColor : "black",
    },
  });

  const classes = useStyles();
  return <p className={classes.text}>{props.children}</p>;
}
