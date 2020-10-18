import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/styles";
import ProjectBoxMobile from "./ProjectBoxMobile";
import ProjectDescriptionMobile from "./ProjectDescriptionMobile";
import BoldTitleText from "../text/BoldTitleText";
import ParagraphText from "../text/ParagraphText";

export default function WorkGridRowMobile(props) {
  const [hovered, setHovered] = useState(true);
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
      flexDirection: "column",
      alignItems: "center",
    },
    rowItem: {
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,

      transition: "0.3s",
    },
    descriptionWrapper: {
      width: "80vw",
    },
  });
  const classes = useStyles();

  return (
    <div className={classes.rowItemContainer}>
      <div className={classes.rowItem}>
        <ProjectBoxMobile
          handleClick={handleClick}
          hovered={hovered}
          project={project}
          active={active}
          {...props}
        />
        <div className={classes.descriptionWrapper}>
          <BoldTitleText {...props}>{props.title}</BoldTitleText>
          <ParagraphText {...props} fontWeight="400" capitalise>
            {props.description}
          </ParagraphText>
        </div>
        {/* <ProjectDescriptionMobile
          hovered={hovered}
          project={project}
          active={active}
          {...props}
        /> */}
      </div>
    </div>
  );
}
