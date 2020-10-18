import React, { useState, useEffect } from "react";
import ParagraphText from "../text/ParagraphText";
import { makeStyles } from "@material-ui/styles";

export default function ProjectDescription(props) {
  const useStyles = makeStyles({
    descriptionItem: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1,
      minWidth: 260,
      marginLeft: props.left ? (props.active ? -270 : 0) : 0,
      marginRight: props.right ? (props.active ? -270 : 0) : 0,
      maxWidth: 490,
      height: 450,
    },
    descriptionItemContent: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      width: 260,
      textAlign: "center",
      marginBottom: props.hovered ? 0 : 100,
      transition: "0.3s",
      paddingRight: props.active ? 0 : props.right ? 40 : 0,
      paddingLeft: props.active ? 0 : props.left ? 40 : 0,
    },
    line: {
      backgroundColor: props.mainColor,
      height: 3,
      width: "100%",
      marginTop: 14,
      marginBottom: 14,
    },
    numberWrapper: { overflow: "hidden", height: 210 },
    number: {
      color: props.dark ? props.mainColor : props.project,
      fontWeight: "bold",
      fontFamily: "League-Spartain",
      fontSize: 200,
      userSelect: "none",
      WebkitUserSelect: "none",
      transform: props.hovered ? "translateY(-10px)" : "translateY(100px)",
      transition: "0.3s",
      transitionTimingFunction: "ease-in-out",
    },
  });
  const classes = useStyles();

  return (
    <div className={classes.descriptionItem}>
      <div className={classes.descriptionItemContent}>
        <div className={classes.numberWrapper}>
          <div className={classes.number}>0{props.number}</div>
        </div>
        <div className={classes.line}></div>
        <ParagraphText {...props} fontWeight="100" capitalise>
          {props.description}
        </ParagraphText>
      </div>
    </div>
  );
}
