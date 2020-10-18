import React, { useState, useRef, useEffect } from "react";

import { makeStyles } from "@material-ui/styles";

import Pard from "../Projects/Pard";
import Danske from "../Projects/Dankse";
import Valuer from "../Projects/Valuer";

export default function ProjectBoxMobile(props) {
  const [project, setProject] = useState(props.projectPage ? true : false);

  const useStyles = makeStyles({
    container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
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
      <div
        onMouseOver={props.handleHover}
        onMouseLeave={props.handleHoverLeave}
        className="mouseHoverItem"
        onClick={props.handleClick}
      >
        {props.title === "Danske Bank" ? (
          <Danske
            mobile
            hovered={props.hovered}
            setHovered={props.setHovered}
            active={props.active}
            {...props}
          />
        ) : null}
        {props.title === "Pard App" ? (
          <Pard
            mobile
            hovered={props.hovered}
            setHovered={props.setHovered}
            active={props.active}
            {...props}
          />
        ) : null}
        {props.title === "Valuer.AI" ? (
          <Valuer
            mobile
            hovered={props.hovered}
            setHovered={props.setHovered}
            active={props.active}
            {...props}
          />
        ) : null}
      </div>
    </div>
  );
}
