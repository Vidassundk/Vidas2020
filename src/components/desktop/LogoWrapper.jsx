import React, { useState, useEffect } from "react";
import Logo from "../Logo";
import { makeStyles } from "@material-ui/styles";
import SmallText from "../text/SmallText";
import DelayLink from "react-delay-link";
export default function LogoWrapper(props) {
  // STATE
  const [open, setOpen] = useState(false);

  // STYLES
  const useStyles = makeStyles({
    container: {
      display: "flex",
      justifyContent: "row",
    },
    logoContainer: {
      paddingRight: 20,
    },
    textWrapper: {
      overflow: "hidden",
      height: 16,
      cursor: "pointer",
    },
    up: {
      animationName: "slideDownS",
      animationDuration: "1s",
      animationTimingFunction: "ease-in-out",
    },
    down: {
      animationName: "slideUpS",
      animationDuration: "1s",
      animationTimingFunction: "ease-in-out",
    },
  });

  const classes = useStyles();
  return (
    <div
      className={classes.container}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className={` ${classes.logoContainer} mouseHoverItem`}>
        <Logo open={open} {...props} />
      </div>

      <DelayLink
        // delay={1000}
        // clickAction={props.transition}
        to={`/`}
      >
        <div className={`${classes.textWrapper} `}>
          <div className={classes.up}>
            <SmallText fontWeight="bold" {...props}>
              Vidas Stirbys
            </SmallText>
          </div>
        </div>
        <div className={classes.textWrapper}>
          <div className={classes.down}>
            <SmallText fontWeight="300" {...props}>
              Web Developer / Designer
            </SmallText>
          </div>
        </div>
      </DelayLink>
    </div>
  );
}
