import React, { useRef, useEffect } from "react";
import PardBaseBig from "../../img/PardBaseBig.png";
import PardCardOneBig from "../../img/PardCardOneBig.png";
import PardCardTwoBig from "../../img/PardCardTwoBig.png";
import ProjectBoxContentMobile from "../mobile/ProjectBoxContentMobile";
import ProjectBoxContent from "../desktop/ProjectBoxContent";
import Floating from "../Floating";

import { makeStyles } from "@material-ui/styles";

export default function Pard(props) {
  const useStyles = makeStyles({
    retina: { width: "100%", willChange: "transform" },
    movement: {
      transition: "0.3s",
    },
    pardBaseWrapper: {
      position: "absolute",
    },
    shadow: {
      filter: props.hovered
        ? "drop-shadow(-4mm 15mm 4mm rgba(0, 0, 0, 0.1))"
        : "drop-shadow(-4mm 15mm 4mm rgba(0, 0, 0, 0.0))",
      willChange: "filter",
    },
    pardBasePic: { width: 830 },
    pardBase: {
      paddingTop: props.hovered ? 20 : 0,

      zIndex: 3,
    },
    cardOneWrapper: {
      zIndex: 3,
      position: "absolute",
    },
    pardCardOnePic: {
      paddingBottom: 70,
      paddingRight: 1,
      width: props.hovered ? 300 : 288,
    },
    cardTwoWrapper: {
      zIndex: 4,
      position: "absolute",
      paddingBottom: props.hovered ? 240 : 210,
      paddingLeft: 240,
    },
    cardTwo: {
      width: props.hovered ? 320 : 280,
    },
  });
  const classes = useStyles();

  return (
    <>
      {!props.mobile ? (
        <ProjectBoxContent {...props}>
          <div className={classes.pardBaseWrapper}>
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
              <div className={classes.pardBasePic}>
                <img
                  alt="UI element showcase card"
                  src={PardBaseBig}
                  className={`${classes.pardBase} ${classes.movement} ${classes.retina}`}
                ></img>
              </div>
            </Floating>
          </div>

          <div className={classes.cardOneWrapper}>
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
              <div
                className={`${classes.pardCardOnePic}  ${classes.movement} `}
              >
                <img
                  alt="UI element showcase card"
                  src={PardCardOneBig}
                  className={`${classes.retina} ${classes.shadow} ${classes.movement} `}
                ></img>
              </div>
            </Floating>
          </div>

          <div className={` ${classes.cardTwoWrapper}  ${classes.movement}  `}>
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
              <div className={`${classes.cardTwo} ${classes.movement} `}>
                <img
                  alt="UI element showcase card"
                  src={PardCardTwoBig}
                  className={`${classes.retina}  ${classes.movement} ${classes.shadow}`}
                ></img>
              </div>
            </Floating>
          </div>
        </ProjectBoxContent>
      ) : (
        <ProjectBoxContentMobile {...props}>
          <div className={classes.pardBaseWrapper}>
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
              <div className={classes.pardBasePic}>
                <img
                  alt="UI element showcase card"
                  src={PardBaseBig}
                  className={`${classes.pardBase} ${classes.movement} ${classes.retina}`}
                ></img>
              </div>
            </Floating>
          </div>

          <div className={classes.cardOneWrapper}>
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
              <div
                className={`${classes.pardCardOnePic}  ${classes.movement} `}
              >
                <img
                  alt="UI element showcase card"
                  src={PardCardOneBig}
                  className={`${classes.retina} ${classes.shadow} ${classes.movement} `}
                ></img>
              </div>
            </Floating>
          </div>

          <div className={` ${classes.cardTwoWrapper}  ${classes.movement}  `}>
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
              <div className={`${classes.cardTwo} ${classes.movement} `}>
                <img
                  alt="UI element showcase card"
                  src={PardCardTwoBig}
                  className={`${classes.retina}  ${classes.movement} ${classes.shadow}`}
                ></img>
              </div>
            </Floating>
          </div>
        </ProjectBoxContentMobile>
      )}
    </>
  );
}
