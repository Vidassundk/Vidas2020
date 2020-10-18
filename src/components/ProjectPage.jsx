import React, { useState, useEffect, useCallback } from "react";
import { makeStyles } from "@material-ui/styles";
import DelayLink from "react-delay-link";
import Pard from "../components/Projects/Pard";
import Danske from "../components/Projects/Dankse";
import Valuer from "../components/Projects/Valuer";

import { useLocation } from "react-router-dom";
import TopBar from "./desktop/TopBar";

import PardPage from "./projectPages/PardPage";

export default function ProjectPage(props) {
  const [started, setStarted] = useState(false);
  const [started1, setStarted1] = useState(false);

  const { pathname } = useLocation();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(function () {
      setStarted(true);
    }, 100);
    setTimeout(function () {
      setStarted1(true);
    }, 200);
  }, []);

  const useStyles = makeStyles({
    topBar: {
      marginTop: !started1 ? -76 : 0,
      transition: "1s",
    },
    descriptionContainer: {
      transition: "1s",
      backgroundColor: props.mainBackgroundCollor,
      height: 400,

      position: "relative",
    },
    descriptionPicture: {
      transition: "1s",
    },
    container: {
      overflow: "hidden",
    },
  });
  const classes = useStyles();

  // Color
  const project = () => {
    switch (props.title) {
      case "Danske Bank":
        return "#023754";
      case "Pard App":
        return "#E3F2FC";
      case "Valuer AI":
        return props.mainColor;
      default:
        return;
    }
  };

  return (
    <div overflow="hidden">
      <div className={classes.topBar}>
        {" "}
        <TopBar {...props} />
      </div>

      <div className={classes.descriptionPicture}>
        {props.title === "Pard App" ? (
          <Pard
            static
            hovered={true}
            active={true}
            projectPage
            resize={started ? true : false}
            project={project}
            {...props}
          />
        ) : null}

        {props.title === "Danske Bank" ? (
          <Danske
            static
            hovered={true}
            active={true}
            projectPage
            resize={started ? true : false}
            project={project}
            {...props}
          />
        ) : null}

        {props.title === "Valuer AI" ? (
          <Valuer
            static
            hovered={true}
            active={true}
            projectPage
            resize={started ? true : false}
            project={project}
            {...props}
          />
        ) : null}
      </div>

      {started ? (
        <>
          {props.title === "Pard App" ? <PardPage {...props} /> : null}
          {props.title === "Danske Bank" ? null : null}
          {props.title === "Valuer.ai" ? null : null}
        </>
      ) : null}
      {/* <Danske hovered={false} active={true} {...props} />
        <Valuer hovered={false} active={true} {...props} /> */}
    </div>
  );
}

{
  /* <DelayLink
// delay={1000}
// clickAction={props.transition}
to={`/`}
>
<div>x</div>
</DelayLink> */
}
