import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";

export default function BoldTitleText(props) {
  // STYLES
  const useStyles = makeStyles({
    text: {
      fontSize: 18,
      color: props.mainColor,
      fontFamily: "Roboto",
      letterSpacing: 1.5,
      fontWeight: "bold",
      userSelect: "none",
      WebkitUserSelect: "none",
      transitionDelay: "0.1s",
      transition: "0.2s",
      lineHeight: 1.35,
      textTransform: "uppercase",
      fontWeight: 400,
      marginTop: 20,

      marginBottom: 15,
      cursor: props.link ? "pointer" : "auto",
      textDecoration: props.link ? "underline" : "auto",
    },
  });

  const classes = useStyles();
  return <p className={classes.text}>{props.children}</p>;
}
