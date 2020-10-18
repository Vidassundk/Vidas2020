import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";

export default function HeaderTextMobile(props) {
  // const [active, setActive] = useState(props.active ? props.active : true);
  // STYLES
  const useStyles = makeStyles({
    textContainer: {
      overflow: "hidden",
    },
    text: {
      fontSize: 30,
      pointerEvents: "none",
      fontFamily: "League-Spartain",
      letterSpacing: 10,
      fontWeight: props.fontWeight ? props.fontWeight : 500,
      WebkitTextStroke: props.weird ? `1px  ${props.mainColor}` : "none",
      transitionDelay: "0.1s",
      transition: "0.2s",
      transitionTimingFunction: "ease-in-out",
      // transform: !active ? "translateY(15px)" : null,
      textAlign: "end",
      textTransform: "uppercase",
      marginTop: 1,
      marginBottom: 1,
      color: props.weird
        ? "transparent"
        : props.mainColor
        ? props.mainColor
        : "black",
    },
    animation: {
      animationName: "slidein200",
      animationDuration: props.animationDuration,

      animationTimingFunction: "ease-in-out",
    },
  });

  const classes = useStyles();
  return (
    <div className={classes.textContainer}>
      <div className={classes.animation}>
        <p className={classes.text}>{props.children}</p>
      </div>
    </div>
  );
}
