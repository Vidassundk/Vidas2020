import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";

export default function SmallText(props) {
  const [active, setActive] = useState(props.active ? props.active : true);
  // STYLES
  const useStyles = makeStyles({
    text: {
      fontSize: 12,
      color: props.mainColor,
      fontFamily: "Roboto",
      letterSpacing: 1.5,
      fontWeight: props.fontWeight ? props.fontWeight : 500,
      transitionDelay: "0.1s",
      transition: "0.2s",
      userSelect: "none",
      WebkitUserSelect: "none",
      lineHeight: 1.35,
      transitionTimingFunction: "ease-in-out",
      transform: !active ? "translateY(15px)" : null,
      marginTop: 1,
      marginBottom: 1,
      color: props.mainColor ? props.mainColor : "black",
    },
  });

  const classes = useStyles();
  return <p className={classes.text}>{props.children}</p>;
}
