import React, { useState, useRef, useEffect } from "react";

import { makeStyles } from "@material-ui/styles";

import Pard from "../Projects/Pard";
import Danske from "../Projects/Dankse";
import Valuer from "../Projects/Valuer";

export default function ProjectBox(props) {
  const [project, setProject] = useState(props.projectPage ? true : false);

  const useStyles = makeStyles({
    container: {
      display: "flex",
      flexDirection: "row",
    },
    rightprojecttext: {
      display: "flex",
      fontSize: 20,
      userSelect: "none",
      WebkitUserSelect: "none",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      // transform: "rotate(-90deg)",
      writingMode: "vertical-lr",
      textTransform: "uppercase",
      fontFamily: "League-Spartain",
      letterSpacing: 1,
      color: props.mainColor,

      lineHeight: 2,
    },
  });
  const classes = useStyles();

  const scrollToRef = (ref) =>
    window.scrollTo({
      top: ref.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });

  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);

  return (
    <div
      ref={myRef}
      onClick={executeScroll}
      className={classes.container}
      //   overflow={active ? "hidden" : null}
    >
      {props.right ? (
        <div className={classes.rightprojecttext}>{`${props.title}`} ↗</div>
      ) : null}
      <div
        onMouseOver={props.handleHover}
        onMouseLeave={props.handleHoverLeave}
        className="mouseHoverItem"
        onClick={props.handleClick}
      >
        {props.title === "Danske Bank" ? (
          <Danske
            hovered={props.hovered}
            setHovered={props.setHovered}
            active={props.active}
            {...props}
          />
        ) : null}
        {props.title === "Pard App" ? (
          <Pard
            hovered={props.hovered}
            setHovered={props.setHovered}
            active={props.active}
            {...props}
          />
        ) : null}
        {props.title === "Valuer.AI" ? (
          <Valuer
            hovered={props.hovered}
            setHovered={props.setHovered}
            active={props.active}
            {...props}
          />
        ) : null}
      </div>
      {props.left ? (
        <div className={classes.rightprojecttext}>{`${props.title}`} ↘</div>
      ) : null}
    </div>
  );
}
