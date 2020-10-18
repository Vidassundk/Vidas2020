import React from "react";
import ProjectBoxContent from "../desktop/ProjectBoxContent";
import ProjectBoxContentMobile from "../mobile/ProjectBoxContentMobile";
import ValuerBaseBig from "../../img/ValuerBaseBig.png";
import ValuerCardBig from "../../img/ValuerCardBig.png";

import Floating from "../Floating";
import { makeStyles } from "@material-ui/styles";

export default function Valuer(props) {
  // RELLAX

  const useStyles = makeStyles({
    retina: {
      width: "100%",
      willChange: "transform",
    },
    shadow: {
      filter: props.hovered
        ? "drop-shadow(-4mm 15mm 4mm rgba(0, 0, 0, 0.1))"
        : "drop-shadow(-4mm 15mm 4mm rgba(0, 0, 0, 0.0))",
      willChange: "filter",
    },
    movement: {
      transition: "0.3s",
    },
    valuerBaseWrapper: {
      position: "absolute",
      zIndex: 1,
    },
    valuerBase: {
      width: 400,
    },
    valuerCardWrapper: {
      zIndex: 3,
      position: "absolute",
      display: "flex",
      paddingBottom: 80,
      width: "100%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    valuerCard: {
      width: props.hovered ? 320 : 260,
    },
  });
  const classes = useStyles();

  return (
    <>
      {!props.mobile ? (
        <ProjectBoxContent {...props}>
          <div className={`${classes.valuerBaseWrapper} ${classes.movement} `}>
            <div className={`${classes.valuerBase} ${classes.movement} `}>
              <img
                alt="UI element showcase card"
                src={ValuerBaseBig}
                className={`${classes.retina} `}
              ></img>
            </div>
          </div>

          <div
            // className="parallax3"
            // top={props.matches ? 0 - props.scroll : 50 - props.scroll}

            className={`${classes.valuerCardWrapper} ${classes.movement}  `}
          >
            <Floating
              animationName={
                props.projectPage
                  ? "floatingStraight"
                  : props.active
                  ? null
                  : !props.hovered
                  ? null
                  : "floatingStraight"
              }
              intensity="4s"
            >
              <div className={`${classes.valuerCard} ${classes.movement} `}>
                <img
                  alt="UI element showcase card"
                  src={ValuerCardBig}
                  className={`${classes.retina} ${classes.shadow} ${classes.movement} `}
                ></img>
              </div>
            </Floating>
          </div>
        </ProjectBoxContent>
      ) : (
        <ProjectBoxContentMobile {...props}>
          <div className={`${classes.valuerBaseWrapper} ${classes.movement} `}>
            <div className={`${classes.valuerBase} ${classes.movement} `}>
              <img
                alt="UI element showcase card"
                src={ValuerBaseBig}
                className={`${classes.retina} `}
              ></img>
            </div>
          </div>

          <div
            // className="parallax3"
            // top={props.matches ? 0 - props.scroll : 50 - props.scroll}

            className={`${classes.valuerCardWrapper} ${classes.movement}  `}
          >
            <Floating
              animationName={
                props.projectPage
                  ? "floatingStraight"
                  : props.active
                  ? null
                  : !props.hovered
                  ? null
                  : "floatingStraight"
              }
              intensity="4s"
            >
              <div className={`${classes.valuerCard} ${classes.movement} `}>
                <img
                  alt="UI element showcase card"
                  src={ValuerCardBig}
                  className={`${classes.retina} ${classes.shadow} ${classes.movement} `}
                ></img>
              </div>
            </Floating>
          </div>
        </ProjectBoxContentMobile>
      )}
    </>
  );
}
