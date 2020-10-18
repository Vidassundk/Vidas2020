import React from "react";
import TopBar from "./TopBar";
import Header from "./Header";
import { makeStyles } from "@material-ui/styles";
import Work from "./Work";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProjectPage from "../ProjectPage";
import Parallax from "../Parallax";
import AboutMe from "../AboutMe";
import HomePage from "./HomePage";
import Cursor from "../Cursor";

export default function Desktop(props) {
  // STYLES
  const useStyles = makeStyles({
    desktopLayout: {
      backgroundColor: props.mainBackgroundCollor,
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.desktopLayout}>
      <Switch>
        <Route exact path="/">
          <HomePage {...props} />
          <Cursor {...props} />
        </Route>
        <Route path="/Pard App" onUpdate={() => window.scrollTo(0, 0)}>
          <ProjectPage title="Pard App" link="pard.lt" {...props} />
        </Route>
        <Route path="/Danske Bank" onUpdate={() => window.scrollTo(0, 0)}>
          <ProjectPage title="Danske Bank" link="danskebank.dk" {...props} />
        </Route>
        <Route path="/Valuer.AI" onUpdate={() => window.scrollTo(0, 0)}>
          <ProjectPage title="Valuer AI" link="valuer.ai" {...props} />
        </Route>
      </Switch>
    </div>
  );
}
