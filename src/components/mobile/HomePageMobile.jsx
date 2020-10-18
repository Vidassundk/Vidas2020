import React, { useRef, useEffect } from "react";
import AboutMe from "../AboutMe";
import TopBar from "../desktop/TopBar";
import HeaderMobile from "./HeaderMobile";

import WorkMobile from "./WorkMobile";

export default function HomePageMobile(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopBar {...props} />
      <HeaderMobile {...props} />
      <WorkMobile {...props} />
      <AboutMe mobile {...props} />
    </>
  );
}
