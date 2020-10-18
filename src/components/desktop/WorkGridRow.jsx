import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/styles";
import ProjectBox from "./ProjectBox";
import ProjectDescription from "./ProjectDescription";

export default function WorkGridRow(props) {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleHoverLeave = () => {
    setHovered(false);
  };

  const handleClick = () => {
    setActive(true);
  };

  // Color
  const project = () => {
    switch (props.title) {
      case "Danske Bank":
        return "#023754";
      case "Pard App":
        return "#E3F2FC";
      case "Valuer.AI":
        return props.mainColor;
      default:
        return;
    }
  };

  const useStyles = makeStyles({
    rowItemContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },
    rowItem: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "nowrap",
      flexGrow: 1,
      maxWidth: active ? "100vw" : 1100,
      marginBottom: 80,
      transition: "0.3s",
    },
  });
  const classes = useStyles();

  return (
    <div className={classes.rowItemContainer}>
      <div className={classes.rowItem}>
        {props.left ? (
          <ProjectDescription
            hovered={hovered}
            project={project}
            active={active}
            {...props}
          />
        ) : null}
        <ProjectBox
          handleHover={handleHover}
          handleHoverLeave={handleHoverLeave}
          handleClick={handleClick}
          hovered={hovered}
          project={project}
          active={active}
          {...props}
        />
        {props.right ? (
          <ProjectDescription
            hovered={hovered}
            project={project}
            active={active}
            {...props}
          />
        ) : null}
      </div>
    </div>
  );
}
