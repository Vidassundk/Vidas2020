import React, { useEffect, useState } from "react";
import smoothscroll from "smoothscroll-polyfill";
import { makeStyles } from "@material-ui/styles";
import Desktop from "./desktop/Desktop";
import { useMediaQuery } from "@react-hook/media-query";
import Mobile from "./mobile/Mobile";

export default function Layout(props) {
  // Mobile
  const matches = useMediaQuery("only screen and (min-width: 850px)");

  // Theme
  const [dark, setDark] = useState(false);
  const switchMode = () => setDark(!dark);

  const lightColor = "#FFFEFA";
  const darkColor = "#383737";

  const mainColor = dark ? lightColor : darkColor;
  const mainBackgroundCollor = dark ? darkColor : lightColor;

  // STYLES
  const useStyles = makeStyles({
    container: {
      backgroundColor: mainBackgroundCollor,
    },
  });

  // SMOOTHSCROLL
  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.container}>
      {matches ? (
        <Desktop
          mainColor={mainColor}
          mainBackgroundCollor={mainBackgroundCollor}
          dark={dark}
          darkColor={darkColor}
          switchMode={switchMode}
        />
      ) : (
        <Mobile
          mainColor={mainColor}
          mainBackgroundCollor={mainBackgroundCollor}
          dark={dark}
          darkColor={darkColor}
          switchMode={switchMode}
        />
      )}
    </div>
  );
}
