import React from "react";
import { makeStyles } from "@material-ui/styles";
import ProjectHeading from "../text/ProjectHeading";

import ProjectParagraph from "../text/ProjectParagraph";
import copenhagen1 from "../../img/copenhagen1.png";
import minnaPhone from "../../img/minnaPhone.png";
import mobileBankingApp from "../../img/mobileBankingApp.png";
import DelayLink from "react-delay-link";
import BoldTitleText from "../text/BoldTitleText";
import ParagraphText from "../text/ParagraphText";
import ImageContainer from "../ImageContainer";
import ProjectHeadingSmaller from "../text/ProjectHeadingSmaller";
import BackButton from "../BackButton";

export default function DanskePage(props) {
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
      backgroundImage: `url(${copenhagen1})`,
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
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.danskebank.mobilebank3.uk&hl=en_US&gl=US"
              >
                <ParagraphText link {...props} fontWeight="400" capitalise>
                  Mobile Bank
                </ParagraphText>
              </a>
            </div>
          </div>
          <div className={classes.container}>
            <div className={classes.section}>
              <div>
                <ProjectHeading {...props}>Application Feature</ProjectHeading>
                <ProjectParagraph {...props}>
                  Subscription Manager in Danske Mobile Banking – a feature that
                  makes it easy to keep track of payment agreements and
                  subscriptions. With just a few taps, it is now possible for
                  customers to get help to cancel agreements and subscriptions
                  that they no longer want but which they never get around to
                  cancelling.
                </ProjectParagraph>
                <ProjectParagraph {...props}>
                  Our long-term strategy is to develop new solutions in
                  partnership with fintech companies across the Nordic
                  countries. Our partnership with Minna Technologies on
                  Subscription Manager is an example of Open Banking – and it’s
                  also an example of how such partnerships enable us to offer
                  new solutions for the benefit of our customers.
                </ProjectParagraph>
              </div>
              <div>
                <ProjectHeading {...props}>How does it work?</ProjectHeading>
                <ProjectParagraph {...props}>
                  Subscription Manager provides customers with an overview of
                  their subscriptions, and customers can sign up for the service
                  in the Danske Mobile Banking app.
                </ProjectParagraph>
                <ProjectParagraph {...props}>
                  Based on an analysis of a customer’s account and payment
                  information, Subscription Manager detects subscriptions and
                  transfers them directly to the app. Here, customers can view
                  all their subscriptions – both those charged to a credit card
                  and those paid by direct debit.
                </ProjectParagraph>
                <ProjectParagraph {...props}>
                  By simply tapping a button, a customer can terminate a
                  subscription, and – if the customer desires – Subscription
                  Manager can also help set up new subscription contracts.
                </ProjectParagraph>
              </div>
              <div>
                <ProjectHeading {...props}>
                  More about Minna Technologies
                </ProjectHeading>
                <ProjectParagraph {...props}>
                  Swedish fintech company established in 2015 by three founders
                  – Joakim Sjöblom (CEO), Jonas Karles (COO) and Marcus Lönnberg
                  (CTO).
                </ProjectParagraph>
                <ProjectParagraph {...props}>
                  Winner of several European fintech awards for its subscription
                  management solution for the banking sector.
                </ProjectParagraph>
                <ProjectParagraph {...props}>
                  Specialises in the growing subscription economy.
                </ProjectParagraph>
                <ProjectParagraph {...props}>
                  Has 52 employees.
                </ProjectParagraph>
              </div>
              <div>
                <ProjectHeading {...props}>Development</ProjectHeading>
                <ProjectParagraph {...props}>
                  Development work consisted of picking up various tasks
                  regarding bug fixing, unit testing and new screen
                  implementations. In many cases I had to work with other
                  developers from across different departments.
                </ProjectParagraph>
              </div>
            </div>
            <div className={classes.section}>
              <ImageContainer
                src={minnaPhone}
                width={400}
                color="#00B5B9"
                mobileHeight={500}
                {...props}
              />
              <div>
                <ProjectHeading {...props}>Role in a team</ProjectHeading>
                <ProjectParagraph {...props}>
                  REACT NATIVE DEVELOPMENT / ANDROID / IOS / IMPLEMENTING NEW
                  SCREENS AND FEATURES / BUG FIXING / COOPERATING WITH BACK AND
                  FRONT END DEVELOPERS / GITLAB
                </ProjectParagraph>
              </div>
              <ImageContainer
                src={mobileBankingApp}
                width={800}
                mobileHeight={500}
                {...props}
              />
              <div>
                <ProjectHeading {...props}>STUDENT EXPERIENCE</ProjectHeading>
                <ProjectParagraph {...props}>
                  I have participated in the project as a Student Worker, and
                  have learned a lot regarding:
                </ProjectParagraph>
                <ProjectParagraph {...props}>
                  - React Native <br />- Use of internal component libraries
                  <br /> - Version management Git / Gitlab
                  <br /> - Redux Saga state management
                  <br /> - Unit Testing
                </ProjectParagraph>
              </div>
            </div>
          </div>
          <div className={`${classes.countryImage} ${classes.bigImage} `}>
            <ProjectHeading white big {...props}>
              Copenhagen
            </ProjectHeading>
          </div>
          <div className={classes.container}>
            <BackButton {...props} />
          </div>
        </div>
      </div>
    </>
  );
}
