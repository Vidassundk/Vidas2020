import React from "react";

import { makeStyles } from "@material-ui/styles";

import "../Animations.css";

export default function Floating(props) {
  const useStyles = makeStyles({
    floating: {
      animationName: `${props.animationName}`,
      //   animationName: props.hovered ? "floating" : null,
      animationDuration: `${props.intensity}`,
      animationIterationCount: `${props.stop ? null : "infinite"}`,
      animationTimingFunction: "ease-in-out",
    },
  });

  const classes = useStyles();
  return <div className={classes.floating}>{props.children}</div>;
}
