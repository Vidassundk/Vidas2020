import React from "react";
import { makeStyles } from "@material-ui/styles";
import ProjectHeading from "../text/ProjectHeading";
import ProjectParagraph from "../text/ProjectParagraph";
import pardLocation from "../../img/pardLocation.png";
import pardTablet from "../../img/pardTablet.png";
import BoldTitleText from "../text/BoldTitleText";
import ParagraphText from "../text/ParagraphText";
import ImageContainer from "../ImageContainer";

export default function PardPage(props) {
  // STYLES
  const useStyles = makeStyles({
    container: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      maxWidth: 1100,
    },
    projectDescriptionWrapper: {
      display: "flex",
      justifyContent: "center",
      paddingRight: props.mobile ? 20 : 40,
      paddingLeft: props.mobile ? 20 : 40,
    },
    image: { width: "100%", },
    imageBig: { width: "100%", minHeight: 300 },
    left: {
      width: props.mobile ? null : "50%",
     
    },
    right: { width: props.mobile ? null : "40%",    },
    section: {
      marginBottom: 80,
    },
    imageSection:{
      flexGrow:1,
      minHeight:400
    }

  });

  const classes = useStyles();
  return (
    <>
      <div className={classes.projectDescriptionWrapper}>
        <div className={classes.projectDescription}>
          <BoldTitleText {...props}>{props.title}</BoldTitleText>
          <ParagraphText link {...props} fontWeight="400" capitalise>
            {props.link}
          </ParagraphText>
          <div className={classes.container}>
            <div className={classes.left}>
              <div className={classes.section}>
                <ProjectHeading {...props}>Application</ProjectHeading>
                <ProjectParagraph {...props}>
                  Pard app is an ecommerce platform connecting local businesses
                  to online shoppers. Our goal is to help people create easy
                  online store as fast and simple as possible, and give people
                  an ability to support their local businesses through
                  convenient online shopping with home deliveries in Lithuania
                  and Latvia.
                </ProjectParagraph>
              </div>
              <div className={classes.section}>
                <ProjectHeading {...props}>
                  Accomplishments that we’re proud of
                </ProjectHeading>
                <ProjectParagraph {...props}>
                  We took part in Lithuania's "Hack the Crisis" and gained
                  recognition from Enterprise Lithuania and ChangeMakers'ON. In
                  a week's time and without any promotion, we already have
                  on-boarded our first vendor and have 15 more waiting to join
                  the app.
                </ProjectParagraph>
              </div>

              <div className={classes.section}>
                <ProjectHeading {...props}>Role in a team</ProjectHeading>
                <ProjectParagraph {...props}>
                  SHOP PAGE / IDEAS / UX /UI / ANGULAR / CSS / GRAPHICS FOR
                  MEDIA / BRANDING
                </ProjectParagraph>
              </div>
            </div>
            <div  className={`${classes.right}  ${classes.section} ${classes.imageSection} `}>
               <ImageContainer src={pardTablet} width={400} color="#EFF3F9"/>
              {/* <img className={classes.image} src={pardTablet} /> */}
            </div>
          </div>
        </div>
      </div>
      <img className={classes.imageBig} src={pardLocation} />
    </>
  );
}
