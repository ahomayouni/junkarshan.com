import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Parallax from "../../components/Parallax/Parallax.js";

import styles from "../../assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
    const classes = useStyles();
    const { ...rest } = props;
    return (
        <div>
            <Header
                color="transparent"
                routes={dashboardRoutes}
                brand="Arshan Junk Removal"
                rightLinks={<HeaderLinks />}
                fixed
                changeColorOnScroll={{
                    height: 400,
                    color: "white"
                }}
                {...rest}
            />
            <Parallax filter image={require("assets/img/truck.jfif")}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={12} align={"center"}>
                            <h1 className={classes.title} className="landing-page-title" style={{ marginBottom: 0 }}>
                                Arshan Junk Removal
                            </h1>
                            <h3 style={{ color: "white" }} className="call-info" style={{ marginTop: 0 }}>
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
                    <ProductSection />
                    <TeamSection />
                    <WorkSection />
                </div>
            </div>
            <Footer />
        </div>
    );
}
