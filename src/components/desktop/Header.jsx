import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import HeaderText from "../text/HeaderText";

export default function Header(props) {
  const [active, setActive] = useState(false);
  const [oHovered, setOHovered] = useState(false);

  useEffect(() => {
    setTimeout(function () {
      setActive(true);
    }, 1400);
  }, []);
  // STYLES
  const useStyles = makeStyles({
    container: {
      height: "85vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      zIndex: 2,
      position: "relative",
      marginBottom: -160,
      marginRight: "5vw",
      pointerEvents: "none",
    },
    portfolio: {
      position: "relative",
    },
    porfolioText: {
      position: "absolute",
      right: 0,
    },
    one: {
      marginRight: active ? "0.8vw" : 0,
      transition: "1s",
    },
    two: {
      marginRight: active ? "1.6vw" : 0,
      transition: "1s",
    },
    o: {
      transition: "0.3s",
    },
  });

  const classes = useStyles();
  return (
    <div
      onMouseEnter={() => setOHovered(true)}
      onMouseLeave={() => setOHovered(false)}
      className={`${classes.container} parallax1`}
    >
      <div className={classes.portfolio}>
        <div className={`${classes.porfolioText} ${classes.one}  `}>
          <HeaderText weird animationDuration="1.3s" {...props}>
            Portfolio
          </HeaderText>
        </div>
        <div className={`${classes.porfolioText} ${classes.two}  `}>
          <HeaderText animationDuration="1.2s" weird {...props}>
            Portfolio
          </HeaderText>
        </div>

        <HeaderText animationDuration="1.1s" weird {...props}>
          Portfolio
        </HeaderText>
      </div>
      <HeaderText animationDuration="1.4s" {...props}>
        K<span className={classes.o}>ø</span>benhavn,
      </HeaderText>

      <HeaderText animationDuration="1.5s" {...props}>
        Denmark
      </HeaderText>
    </div>
  );
}
