import React from "react";
import { makeStyles } from "@material-ui/styles";
import ProjectHeading from "../text/ProjectHeading";
import ProjectParagraph from "../text/ProjectParagraph";
import pardMapGroup from "../../img/pardMapGroup.png";
import pardTablet from "../../img/pardTablet.png";
import pardCard from "../../img/pardCard.png";
import pardCardGroup from "../../img/pardCardGroup.png";
import pardCloudCard from "../../img/pardCloudCard.png";
import pardClouds from "../../img/pardClouds.png";
import pardBox from "../../img/pardBox.png";
import Lithuania from "../../img/Lithuania.png";
import DelayLink from "react-delay-link";
import BoldTitleText from "../text/BoldTitleText";
import ParagraphText from "../text/ParagraphText";
import ImageContainer from "../ImageContainer";
import ProjectHeadingSmaller from "../text/ProjectHeadingSmaller";
import BackButton from "../BackButton";

export default function PardPage(props) {
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
      backgroundImage: `url(${Lithuania})`,
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
              <a target="_blank" href="https://pard.lt/">
                <ParagraphText link {...props} fontWeight="400" capitalise>
                  Pard App
                </ParagraphText>
              </a>
            </div>
          </div>
          <div className={classes.container}>
            <div className={classes.section}>
              <div>
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

              <div>
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

              <div>
                <ProjectHeading {...props}>Role in a team</ProjectHeading>
                <ProjectParagraph {...props}>
                  SHOP PAGE / IDEAS / UX /UI / ANGULAR / CSS / GRAPHICS FOR
                  MEDIA / BRANDING
                </ProjectParagraph>
              </div>
            </div>

            <ImageContainer
              src={pardTablet}
              mobileHeight={600}
              width={400}
              color="#EFF3F9"
              {...props}
            />
          </div>
          <div className={classes.bigImage}>
            <ImageContainer
              src={pardMapGroup}
              height="70%"
              color="#74D8BD"
              {...props}
            />
          </div>
          <div className={classes.container}>
            <div className={classes.section}>
              <div>
                <ProjectHeading {...props}>Branding</ProjectHeading>
                <ProjectHeadingSmaller {...props}>
                  Why are we here?
                </ProjectHeadingSmaller>
                <ProjectHeadingSmaller small {...props}>
                  Who are we here for?
                </ProjectHeadingSmaller>
                <ProjectParagraph bold {...props}>
                  Small to Medium local businesses, who are interested in a
                  web-shop solution to sell their products, or to promote their
                  business.
                </ProjectParagraph>
                <ProjectParagraph {...props}>
                  Small to Medium local businesses, who are interested in a
                  web-shop solution to sell their products, or to promote their
                  business.
                </ProjectParagraph>
                <ProjectParagraph bold {...props}>
                  Users interested in ordering something online and receiving
                  delivery the same or next day.
                </ProjectParagraph>
                <ProjectParagraph {...props}>
                  We are faster than international web-shops, as our deliveries
                  are done from the same city. Using our service is aimed to
                  give a sense of pride as it supports local businesses and the
                  cities users are from.
                </ProjectParagraph>
              </div>
              <div>
                <ProjectHeadingSmaller small {...props}>
                  What makes us different ?
                </ProjectHeadingSmaller>
                <ProjectParagraph bold {...props}>
                  Helping local businesses and people, is in a core of our
                  identity.
                </ProjectParagraph>
                <ProjectParagraph {...props}>
                  We have started during a COVID-19 pandemic quarantine with a
                  mission to help local businesses during hard times and we will
                  always remain truthful to this ambition.
                </ProjectParagraph>
              </div>
              <div>
                <ProjectHeadingSmaller small {...props}>
                  Our ambition
                </ProjectHeadingSmaller>
                <ProjectParagraph bold {...props}>
                  To become a new selling norm in local businesses across
                  Lithuania, Latvia and wherever else it is needed the most.
                  Being a fair and opportunity providing safe-net for the small
                  and medium local business communities.
                </ProjectParagraph>
                <ProjectParagraph bold {...props}>
                  To inspire positive change in local communities, by providing
                  shopping-aid for those in need, cause they do not own a car,
                  are physically or mentally impaired or just simply do not have
                  time. By using our platform users will also get to contribute
                  to the economy of their local environment.
                </ProjectParagraph>
              </div>
              <div>
                <ProjectHeadingSmaller small {...props}>
                  What do we value the most ?
                </ProjectHeadingSmaller>
                <ProjectParagraph bold {...props}>
                  Local businesses and communities across Lithuania, Latvia as
                  starting countries.
                </ProjectParagraph>
                <ProjectParagraph {...props}>
                  Allowing local businesses equal opportunities, and technical
                  support to grow and improve together with communities
                  surrounding them.
                </ProjectParagraph>
              </div>
              <div>
                <ProjectHeadingSmaller small {...props}>
                  What do we do and how do we do it ?
                </ProjectHeadingSmaller>
                <ProjectParagraph bold {...props}>
                  We provide a platform for local businesses to create their
                  product catalogues that can be seen by, suggested and sold to
                  users living close to it.
                </ProjectParagraph>
                <ProjectParagraph {...props}>
                  The process is user friendly and does not require a lot of
                  Technical knowledge.
                </ProjectParagraph>
                <ProjectParagraph bold {...props}>
                  We provide a unified e-commerce shopping solution for users
                  interested in having their products to be delivered home and
                  for users interested in and/or wanting to support local
                  businesses.
                </ProjectParagraph>
                <ProjectParagraph {...props}>
                  We try to close the gap between local production and the user
                  who does not know about it or is unable to access it without
                  aid.
                </ProjectParagraph>
              </div>
            </div>
            <div className={classes.section}>
              <ImageContainer
                src={pardCard}
                width={400}
                color="#F5F6FF"
                mobileHeight={500}
                {...props}
              />
              <div>
                <ProjectHeadingSmaller small {...props}>
                  What is our personality ?
                </ProjectHeadingSmaller>
                <ProjectParagraph bold {...props}>
                  Young, adaptive and open-minded.
                </ProjectParagraph>
                <ProjectParagraph {...props}>
                  We do not assume to know better than our customer, we serve as
                  help and as a tool for the people.
                </ProjectParagraph>
                <ProjectParagraph {...props}>
                  We work constantly to listen and to adapt to our customers
                  needs. We are young team of individuals, and a young company
                  that is trying to make a positive change to our local
                  economies.
                </ProjectParagraph>
              </div>
              <ImageContainer
                src={pardCloudCard}
                width={400}
                backgroundImage={pardClouds}
                mobileHeight={500}
                {...props}
              />
              <div>
                <ProjectHeadingSmaller small {...props}>
                  Value Proposition / Key Selling Points / Why use our service ?
                </ProjectHeadingSmaller>
                <ProjectParagraph bold {...props}>
                  For Business
                </ProjectParagraph>
                <ProjectParagraph {...props}>
                  - Free Platform.
                  <br /> - Fast Sign Up Process. <br />- We take care of
                  technical stuff. <br />- Promotion. Being able to be seen.{" "}
                  <br />- Safe.
                </ProjectParagraph>
                <ProjectParagraph bold {...props}>
                  For Shopper
                </ProjectParagraph>
                <ProjectParagraph {...props}>
                  - Browse and Discover from home. <br /> - Home Delivery.{" "}
                  <br /> - Support Local Businesses.
                </ProjectParagraph>
              </div>
            </div>
          </div>
          <div className={classes.parCardGroup}>
            <img className={classes.pardCardGroupImage} src={pardCardGroup} />
          </div>
          <div className={classes.container}>
            <div className={classes.section}>
              <div>
                {" "}
                <ProjectHeadingSmaller {...props}>Vision</ProjectHeadingSmaller>
                <ProjectParagraph {...props}>
                  To improve the living quality of baltic countries and beyond.
                </ProjectParagraph>
              </div>
              <div>
                {" "}
                <ProjectHeadingSmaller {...props}>
                  Mission
                </ProjectHeadingSmaller>
                <ProjectParagraph {...props}>
                  To strengthen local communities, inspire growth for new
                  businesses and to become the most convenient shopping solution
                  in countries our platform is used in.
                </ProjectParagraph>
              </div>
              <div>
                {" "}
                <ProjectHeadingSmaller {...props}>Values</ProjectHeadingSmaller>
                <ProjectParagraph {...props}>
                  Equal opportunities, fairness, safety and aid to those in
                  need.
                </ProjectParagraph>
              </div>
            </div>
            <div className={classes.section}>
              <ImageContainer
                src={pardBox}
                width={400}
                color="#BCA18F"
                mobileHeight={500}
                {...props}
              />
            </div>
          </div>
          <div className={`${classes.countryImage} ${classes.bigImage} `}>
            <ProjectHeading white big {...props}>
              Lithuania
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
