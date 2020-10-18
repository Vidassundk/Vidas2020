import React from "react";
import { makeStyles } from "@material-ui/styles";
import ProjectHeading from "../text/ProjectHeading";
import ProjectParagraph from "../text/ProjectParagraph";
import copenhagen2 from "../../img/copenhagen2.png";
import valuerLogo from "../../img/valuerLogo.png";
import valuerSky from "../../img/valuerSky.png";
import valuerDark from "../../img/valuerDark.png";
import valuerLight from "../../img/valuerLight.png";
import valuerLight2 from "../../img/valuerLight2.png";
import DelayLink from "react-delay-link";
import BoldTitleText from "../text/BoldTitleText";
import ParagraphText from "../text/ParagraphText";
import ImageContainer from "../ImageContainer";

import BackButton from "../BackButton";

export default function ValuerPage(props) {
  // STYLES
  const useStyles = makeStyles({
    container: {
      display: "grid",
      gridTemplateColumns: props.mobile ? "1fr" : "4fr 3fr",
      gridGap: 50,
      maxWidth: 1100,
      margin: "auto",
      paddingBottom: 50,
      paddingRight: props.mobile ? 20 : 40,
      paddingLeft: props.mobile ? 20 : 40,
    },
    projectDescriptionWrapper: {
      paddingBottom: 50,
    },
    projectDescription: { paddingTop: 10 },
    section: {
      display: "grid",
      gridGap: 20,
    },
    bigImage: {
      height: "70vh",
      marginBottom: 50,
    },
    countryImage: {
      backgroundImage: `url(${copenhagen2})`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    fullWidthImage: {
      height: "100%",
      position: "absolute",
      top: 0,
    },
    pardCardGroupImage: {
      width: "100%",
    },
    parCardGroup: {
      margin: "auto",
      marginBottom: 50,
      paddingRight: props.mobile ? 20 : 40,
      paddingLeft: props.mobile ? 20 : 40,
      maxWidth: 1100,
    },
  });

  const classes = useStyles();
  return (
    <>
      <div className={classes.projectDescriptionWrapper}>
        <div className={classes.projectDescription}>
          <div className={classes.container}>
            <div>
              <BoldTitleText {...props}>{props.title}</BoldTitleText>
              <a target="_blank" href="https://exam-260811.firebaseapp.com/">
                <ParagraphText link {...props} fontWeight="400" capitalise>
                  Mock Prototype
                </ParagraphText>
              </a>
            </div>
          </div>
          <div className={classes.container}>
            <div className={classes.section}>
              <div>
                <ProjectHeading {...props}>Application</ProjectHeading>
                <ProjectParagraph {...props}>
                  Internal startup database website with a dashboard. Ability to
                  search / browse / edit data entries. In addition, the website
                  is provided with custom data visualisation graphs and dark
                  mode.
                </ProjectParagraph>
              </div>
              <div>
                <ProjectHeading {...props}>Role in a team</ProjectHeading>
                <ProjectParagraph {...props}>
                  BUILDING AND DESIGNING THE ENTIRE FRONT END / REACT JS / CSS /
                  MATERIAL UI COMPONENT LIBRARY.
                </ProjectParagraph>
              </div>
              <ImageContainer
                src={valuerDark}
                width={400}
                color="#3E3E3E"
                mobileHeight={500}
                {...props}
              />
              <ImageContainer
                src={valuerLight}
                width={400}
                color="#FAFAFA"
                mobileHeight={500}
                {...props}
              />
            </div>
            <div className={classes.section}>
              <ImageContainer
                src={valuerLogo}
                width={300}
                backgroundImage={valuerSky}
                mobileHeight={500}
                {...props}
              />
              <ImageContainer
                src={valuerLight2}
                width={400}
                color="#FAFAFA"
                mobileHeight={500}
                {...props}
              />
            </div>
          </div>
          <div className={`${classes.countryImage} ${classes.bigImage} `}>
            <ProjectHeading white big {...props}>
              Copenhagen
            </ProjectHeading>
          </div>
          <div className={classes.container}>
            {" "}
            <BackButton {...props} />
          </div>
        </div>
      </div>
    </>
  );
}
