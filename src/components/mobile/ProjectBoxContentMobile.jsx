import React, { useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import DelayLink from "react-delay-link";

const ProjectBoxContentMobile = (props) => {
  //   const scrollHandler = () => {
  //     if (
  //       window.pageYOffset < props.activePoint + 600 &&
  //       window.pageYOffset > props.activePoint &&
  //       !props.matches &&
  //       !props.static
  //     ) {
  //       props.setHovered(true);
  //     } else if (!props.static) {
  //       props.setHovered(false);
  //     }
  //   };

  //   useEffect(() => {
  //     if (!props.matches) {
  //       window.addEventListener("scroll", scrollHandler);
  //       return () => {
  //         window.removeEventListener("scroll", scrollHandler);
  //       };
  //     }
  //   }, [props.matches]);

  const useStyles = makeStyles({
    projectbox: {
      width: props.active ? "100vw" : "80vw",
      webkitBoxShadow: props.active
        ? null
        : "0px 0px 14px 7px rgba(0, 0, 0, 0.01)",
      boxShadow: props.active ? null : "0px 0px 14px 7px rgba(0, 0, 0, 0.04)",
      height: props.active ? (props.resize ? "80vh" : "100vh") : "80vw",
      backgroundColor: props.dark
        ? props.hovered
          ? props.project
          : props.darkColor
        : props.project,
      marginLeft: props.right ? (props.active ? -40 : 0) : 0,
      transition: "0.5s",
      filter: props.dark && !props.hovered ? "grayscale(1)" : "",
      willChange: "filter",

      overflow: "hidden",
      position: "relative",
    },

    imagesContainer: {
      transform: props.resize ? "scale(0.8)" : "scale(0.7)",
      transition: "1s",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
    },
  });

  const classes = useStyles();

  return (
    <DelayLink
      delay={1000}
      clickAction={props.transition}
      to={`/${props.title}`}
    >
      <div className={`${classes.projectbox}`}>
        <div
          className={classes.imagesContainer}
          // className={props.active ? null : "parallax2"}
          // top={props.matches ? 0 - props.scroll : 100 - props.scroll}
        >
          {props.children}
        </div>
      </div>
    </DelayLink>
  );
};

export default ProjectBoxContentMobile;
