import React, { useRef, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";

export default function Cursor(props) {
  // CURSOR

  const [activeLinkHovered, setActiveLinkHovered] = useState(false);
  const [disapear, setDisapear] = useState(false);

  const useStyles = makeStyles({
    cursor: {
      width: disapear ? 1 : activeLinkHovered ? 50 : 10,
      height: disapear ? 1 : activeLinkHovered ? 50 : 10,
      // backgroundColor: activeLinkHovered ? color : color,
      border: activeLinkHovered ? "" : `1px solid ${props.mainColor}`,
      borderRadius: "50%",
      position: "absolute",
      transition: "1s opacity, 0.7s width, 0.7s height 30ms",
      transitionTimingFunction: "ease-out",
      transform: "translate(-50%, -50%)",
      zIndex: 6,
      pointerEvents: "none",
      // opacity: activeLinkHovered ? 0.5 : 1,
      backdropFilter: activeLinkHovered ? "invert(1) hue-rotate(120deg)" : "",
    },
    cursor2: {
      width: disapear ? 1 : activeLinkHovered ? 120 : 10,
      height: disapear ? 1 : activeLinkHovered ? 120 : 10,
      // backgroundColor: activeLinkHovered ? color : color,
      border: activeLinkHovered ? "" : `1px solid ${props.mainColor}`,
      borderRadius: "50%",
      position: "absolute",
      transition: "1s opacity, 0.3s width, 0.3s height 30ms",
      transitionTimingFunction: "ease-out",
      transform: "translate(-50%, -50%)",
      zIndex: 6,
      pointerEvents: "none",
      // opacity: activeLinkHovered ? 0.5 : 1,
      backdropFilter: activeLinkHovered ? "invert(1) hue-rotate(180deg)" : "",
    },
  });
  const classes = useStyles();

  useEffect(() => {
    const cursor = document.querySelector("#cursor");
    const cursor2 = document.querySelector("#cursor2");
    const navLinks = document.querySelectorAll(".mouseHoverItem");
    if (cursor) {
      document.addEventListener("mousemove", (e) => {
        cursor.setAttribute(
          "style",
          "top: " + e.pageY + "px; left: " + e.pageX + "px;"
        );
      });

      document.addEventListener("mousemove", (e) => {
        cursor2.setAttribute(
          "style",
          "top: " + e.pageY + "px; left: " + e.pageX + "px;"
        );
      });
    }
    navLinks.forEach((link) => {
      link.addEventListener("mouseover", () => {
        setActiveLinkHovered(true);
      });
      link.addEventListener("click", () => {
        setDisapear(true);

        setTimeout(function () {
          setDisapear(false);
        }, 500);
      });
      link.addEventListener("mouseleave", () => {
        setActiveLinkHovered(false);
      });
    });
  }, []);
  return (
    <>
      <div className={classes.cursor} id="cursor"></div>
      <div className={classes.cursor2} id="cursor2"></div>
    </>
  );
}
