import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";

export default function ProjectParagraph(props) {
  // STYLES
  const useStyles = makeStyles({
    text: {
      fontSize: 18,
      color: props.mainColor,
      fontFamily: "Roboto",
      letterSpacing: 0.6,
      fontWeight: props.bold ? "bold" : 400,
      lineHeight: 1.35,
      userSelect: "none",
      WebkitUserSelect: "none",
      marginTop: 20,
      color: props.mainColor,
      marginBottom: 15,
      color: props.mainColor ? props.mainColor : "black",
    },
  });

  const classes = useStyles();
  return <p className={classes.text}>{props.children}</p>;
}
