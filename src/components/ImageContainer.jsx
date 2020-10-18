import React from "react";
import { makeStyles } from "@material-ui/styles";
import Floating from "./Floating";
export default function ImageContainer(props) {
  const useStyles = makeStyles({
    container: {
      width: "100%",
      height: props.mobile
        ? props.mobileHeight
          ? props.mobileHeight
          : "100%"
        : "100%",
      backgroundColor: props.color ? props.color : null,
      backgroundImage: props.backgroundImage
        ? `url(${props.backgroundImage})`
        : null,
      backgroundPosition: "center",
      backgroundSize: "cover",

      backgroundRepeat: "no-repeat",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: props.mobileHeight,
      overflow: "hidden",
    },
    image: {
      width: props.width,
      height: props.height,
      transform: props.mobile ? "scale(0.8)" : null,
    },
  });

  const classes = useStyles();

  return (
    <>
      {props.floating ? (
        <div className={classes.container}>
          <Floating animationName="floatingStraight" intensity="6s">
            <img className={classes.image} src={props.src} />
          </Floating>
        </div>
      ) : (
        <div className={classes.container}>
          <img className={classes.image} src={props.src} />
        </div>
      )}
    </>
  );
}
