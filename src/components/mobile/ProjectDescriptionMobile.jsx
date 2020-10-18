import React, { useState, useEffect } from "react";
import ParagraphText from "../text/ParagraphText";
import { makeStyles } from "@material-ui/styles";

export default function ProjectDescriptionMobile(props) {
  const useStyles = makeStyles({
    descriptionItem: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1,
      minWidth: props.active ? 0 : "80vw",
      width: "80vw",
      height: "80vw",
    },
    descriptionItemContent: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      width: 260,
      textAlign: "center",
      marginBottom: props.hovered ? 0 : 100,
      transition: "0.3s",
    },
    line: {
      backgroundColor: props.mainColor,
      height: 3,
      width: "100%",
      marginTop: 14,
      marginBottom: 14,
    },
  });
  const classes = useStyles();

  return (
    <div className={classes.descriptionItem}>
      <div className={classes.descriptionItemContent}>
        <div className={classes.line}></div>
        <ParagraphText {...props} fontWeight="100" capitalise>
          {props.description}
        </ParagraphText>
      </div>
    </div>
  );
}
