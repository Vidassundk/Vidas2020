import React from "react";
import ProjectBoxContent from "../desktop/ProjectBoxContent";
import ProjectBoxContentMobile from "../mobile/ProjectBoxContentMobile";

import DanskeBaseBig from "../../img/DanskeBaseBig.png";
import DanskeLogoBig from "../../img/DankseLogoBig.png";
import DanskeMinnaBig from "../../img/DanskeMinnaBig.png";

import Floating from "../Floating";

import { makeStyles } from "@material-ui/styles";

export default function Danske(props) {
  // RELLAX

  const useStyles = makeStyles({
    retina: {
      width: "100%",
      willChange: "transform",
    },
    shadow: {
      filter: props.hovered
        ? "drop-shadow(-4mm 15mm 4mm rgba(0, 0, 0, 0.4))"
        : "drop-shadow(-4mm 15mm 4mm rgba(0, 0, 0, 0.0))",
      willChange: "filter",
    },
    movement: {
      transition: "0.3s",
    },
    danskeBaseWrapper: {
      zIndex: 1,
      position: "absolute",
      paddingTop: props.hovered ? 10 : 0,
    },
    danskeBase: {
      width: 630,
    },
    danskeLogoWrapper: {
      zIndex: 4,
      position: "absolute",
      paddingBottom: props.hovered ? 115 : 113,
      paddingRight: props.hovered ? 315 : 295,
    },
    danskeLogo: {
      width: props.hovered ? 130 : 110,
    },
    danskeMinnaWrapper: {
      zIndex: 3,
      position: "absolute",
      paddingBottom: props.hovered ? 250 : 235,
      paddingRight: props.hovered ? 72 : 82,
    },
    danskeMinna: {
      width: props.hovered ? 80 : 60,
    },
  });
  const classes = useStyles();

  return (
    <>
      {!props.mobile ? (
        <ProjectBoxContent {...props}>
          <div className={`${classes.movement} ${classes.danskeBaseWrapper} `}>
            <Floating
              animationName={
                props.projectPage
                  ? "floating"
                  : props.active
                  ? null
                  : !props.hovered
                  ? null
                  : "floating"
              }
              intensity="6s"
            >
              <div className={`${classes.danskeBase} ${classes.movement} `}>
                <img
                  alt="UI element showcase card"
                  src={DanskeBaseBig}
                  className={`${classes.retina} `}
                ></img>
              </div>
            </Floating>
          </div>
          <div className={`${classes.movement} ${classes.danskeMinnaWrapper}`}>
            <Floating
              animationName={
                props.projectPage
                  ? "floating"
                  : props.active
                  ? null
                  : !props.hovered
                  ? null
                  : "floating"
              }
              intensity="4s"
            >
              <div className={`${classes.danskeMinna} ${classes.movement} `}>
                <img
                  alt="UI element showcase card"
                  src={DanskeMinnaBig}
                  className={`${classes.retina} ${classes.shadow} ${classes.movement} `}
                ></img>
              </div>
            </Floating>
          </div>
          <div className={`${classes.danskeLogoWrapper} ${classes.movement} `}>
            <Floating
              animationName={
                props.projectPage
                  ? "floating"
                  : props.active
                  ? null
                  : !props.hovered
                  ? null
                  : "floating"
              }
              intensity="3s"
            >
              <div className={`${classes.movement} ${classes.danskeLogo}`}>
                <img
                  alt="UI element showcase card"
                  src={DanskeLogoBig}
                  className={`${classes.retina} ${classes.shadow}`}
                ></img>
              </div>
            </Floating>
          </div>
        </ProjectBoxContent>
      ) : (
        <ProjectBoxContentMobile {...props}>
          <div className={`${classes.movement} ${classes.danskeBaseWrapper} `}>
            <Floating
              animationName={
                props.projectPage
                  ? "floating"
                  : props.active
                  ? null
                  : !props.hovered
                  ? null
                  : "floating"
              }
              intensity="6s"
            >
              <div className={`${classes.danskeBase} ${classes.movement} `}>
                <img
                  alt="UI element showcase card"
                  src={DanskeBaseBig}
                  className={`${classes.retina} `}
                ></img>
              </div>
            </Floating>
          </div>
          <div className={`${classes.movement} ${classes.danskeMinnaWrapper}`}>
            <Floating
              animationName={
                props.projectPage
                  ? "floating"
                  : props.active
                  ? null
                  : !props.hovered
                  ? null
                  : "floating"
              }
              intensity="4s"
            >
              <div className={`${classes.danskeMinna} ${classes.movement} `}>
                <img
                  alt="UI element showcase card"
                  src={DanskeMinnaBig}
                  className={`${classes.retina} ${classes.shadow} ${classes.movement} `}
                ></img>
              </div>
            </Floating>
          </div>
          <div className={`${classes.danskeLogoWrapper} ${classes.movement} `}>
            <Floating
              animationName={
                props.projectPage
                  ? "floating"
                  : props.active
                  ? null
                  : !props.hovered
                  ? null
                  : "floating"
              }
              intensity="3s"
            >
              <div className={`${classes.movement} ${classes.danskeLogo}`}>
                <img
                  alt="UI element showcase card"
                  src={DanskeLogoBig}
                  className={`${classes.retina} ${classes.shadow}`}
                ></img>
              </div>
            </Floating>
          </div>
        </ProjectBoxContentMobile>
      )}
    </>
  );
}
