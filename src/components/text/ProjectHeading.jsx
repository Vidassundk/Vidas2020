import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";

export default function ProjectHeading(props) {
  // STYLES
  const useStyles = makeStyles({
    text: {
      fontSize: props.big ? 50 : 28,
      color: props.white ? props.lightColor : props.mainColor,
      fontFamily: "Roboto",
      letterSpacing: 3,
      fontWeight: 400,
      transitionDelay: "0.1s",
      userSelect: "none",
      WebkitUserSelect: "none",
      transition: "0.2s",
      lineHeight: 1.35,
      transitionTimingFunction: "ease-in-out",
      textTransform: "uppercase",
      marginTop: 0,
      marginBottom: 15,
    },
  });

  const classes = useStyles();
  return <p className={classes.text}>{props.children}</p>;
}
