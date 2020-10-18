import React from "react";
import { makeStyles } from "@material-ui/styles";
import AboutMeText from "./text/AboutMeText";

export default function AboutMe(props) {
  // STYLES
  const useStyles = makeStyles({
    container: {
      height: "90vh",
      display: "flex",
      alignItems: "center",
      marginLeft: "10vw",
    },
    textContainer: {
      maxWidth: 400,
    },
  });

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <AboutMeText {...props}>
          Front End / Web / Mobile developer specialising in JAVASCRIPT / CSS /
          NODE JS / REACT Also interested in UI DESIGN / WebGl
        </AboutMeText>

        <AboutMeText {...props} link>
          vidas@email.com
        </AboutMeText>
      </div>
    </div>
  );
}
