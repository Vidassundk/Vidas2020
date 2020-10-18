import React, { useRef, useEffect } from "react";
import AboutMe from "../AboutMe";
import Parallax from "../Parallax";
import Header from "./Header";
import TopBar from "./TopBar";
import Work from "./Work";

export default function HomePage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopBar {...props} />
      <Parallax />
      <Header {...props} />
      <Work {...props} />
      <AboutMe {...props} />
    </>
  );
}
