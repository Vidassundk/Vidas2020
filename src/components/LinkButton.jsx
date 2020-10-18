import React from "react";
import BoldTitleText from "./text/BoldTitleText";
import DelayLink from "react-delay-link";
export default function LinkButton(props) {
  return (
    <DelayLink
      // delay={1000}
      // clickAction={props.transition}
      to={`/${props.title}`}
    >
      <BoldTitleText back {...props}>
        {props.children}
      </BoldTitleText>
    </DelayLink>
  );
}
