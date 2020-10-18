import React from "react";
import { makeStyles } from "@material-ui/styles";
import TopBar from "../desktop/TopBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutMe from "../AboutMe";
import HeaderMobile from "./HeaderMobile";
import WorkMobile from "./WorkMobile";
import ProjectPage from "../ProjectPage";
import HomePageMobile from "./HomePageMobile";

export default function Mobile(props) {
  // STYLES
  const useStyles = makeStyles({
    mobileLayout: {},
  });

  const classes = useStyles();
  return (
    <div className={classes.mobileLayout}>
      <Switch>
        <Route exact path="/">
          <HomePageMobile {...props} />
        </Route>
        <Route path="/Pard App" mobile onUpdate={() => window.scrollTo(0, 0)}>
          <ProjectPage mobile title="Pard App" link="pard.lt" {...props} />
        </Route>
        <Route path="/Danske Bank" onUpdate={() => window.scrollTo(0, 0)}>
          <ProjectPage
            mobile
            title="Danske Bank"
            link="danskebank.dk"
            {...props}
          />
        </Route>
        <Route path="/Valuer.AI" mobile onUpdate={() => window.scrollTo(0, 0)}>
          <ProjectPage mobile title="Valuer AI" link="valuer.ai" {...props} />
        </Route>
      </Switch>
    </div>
  );
}
