import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";

export default function AboutMeText(props) {
  // STYLES
  const useStyles = makeStyles({
    text: {
      fontSize: props.mobile ? 28 : 32,
      color: props.mainColor,
      fontFamily: "Roboto",
      userSelect: "none",
      WebkitUserSelect: "none",
      letterSpacing: 1.5,
      fontWeight: props.link ? 300 : 400,
      transitionDelay: "0.1s",
      transition: "0.2s",
      lineHeight: 1.35,
      transitionTimingFunction: "ease-in-out",
      textTransform: props.capitalise ? "uppercase" : "auto",
      cursor: props.link ? "pointer" : "auto",
      marginTop: 1,
      color: props.mainColor,
      marginBottom: 1,
      color: props.mainColor ? props.mainColor : "black",
      textDecoration: props.link ? "underline" : "none",
      marginBottom: 20,
    },
  });

  const classes = useStyles();
  return <p className={classes.text}>{props.children}</p>;
}
