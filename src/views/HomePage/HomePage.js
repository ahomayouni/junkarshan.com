import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Parallax from "../../components/Parallax/Parallax.js";
import styles from "../../assets/jss/material-kit-react/views/landingPage.js";
import OurServicesSection from "./Sections/OurServicesSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";

const useStyles = makeStyles(styles);

export default function HomePage(props) {
    const classes = useStyles();
    const { ...rest } = props;
    return (
        <div id="home">
            <Header
                color="transparent"
                brand="Arshan Junk Removal"
                onClickDescription={() => window.scrollTo(0, 0)}
                rightLinks={<HeaderLinks />}
                fixed
                changeColorOnScroll={{
                    height: 300,
                    color: "white"
                }}
                {...rest}
            />
            <Parallax filter image={require("assets/img/truck.jfif")}>
                <div className={classes.container} id="home-top">
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={12} align={"center"}>
                            <h1 className="landing-page-title" style={{ marginBottom: 0 }}>
                                Arshan Junk Removal
                            </h1>
                            <h3 style={{ color: "white", marginTop: 0 }} className="call-info" id="call us today">
                                CALL US TODAY
                            </h3>
                            <br />
                            <Button size={"lg"} href="tel:647-381-4747">
                                <h5 href="tel:647-381-4747" style={{ margin: 0, padding: 0 }}>
                                    <i className="fas fa-phone" style={{ marginRight: 10 }} />
                                    (647) 381-4747
                                </h5>
                            </Button>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    <OurServicesSection />
                    <TeamSection />
                    <WorkSection />
                    <div id="pricing">pricing</div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
