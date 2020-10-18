import React from "react";
import BoldTitleText from "./text/BoldTitleText";
import DelayLink from "react-delay-link";
export default function BackButton(props) {
  return (
    <DelayLink
      // delay={1000}
      // clickAction={props.transition}
      to={`/`}
    >
      <BoldTitleText back {...props}>
        back
      </BoldTitleText>
    </DelayLink>
  );
}
