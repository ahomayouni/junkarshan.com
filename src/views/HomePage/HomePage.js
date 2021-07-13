import React, { useState } from "react";
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
import CarouselSection from "./Sections/CarouselSection.js";

const useStyles = makeStyles(styles);
const farsiFont = { fontFamily: "Vazir" };
export default function HomePage(props) {
    const classes = useStyles();
    const [isFarsi, setFarsi] = useState(false);
    const { ...rest } = props;
    return (
        <div id="home">
            <Header
                color="transparent"
                brand="Arshan Junk Removal / Bin Rentals"
                farsiBrand="خدمات جمع آوری مصالح ساختمانی ارشان"
                isFarsi={isFarsi}
                onClickDescription={() => window.scrollTo(0, 0)}
                rightLinks={<HeaderLinks isFarsi={isFarsi} setFarsi={setFarsi} />}
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
                            <h1 className="landing-page-title" style={{ marginBottom: 40, ...farsiFont }}>
                                <span style={{ borderBottom: "5px solid #ce3b0f" }}>
                                    {isFarsi ? "جمع آوری مصالح ساختمانی" : "Arshan Junk Removal & Bin Rental"}
                                </span>
                            </h1>
                            <h3 style={{ color: "white", marginTop: 0, ...farsiFont, marginBottom: 0 }} className="call-info" id="call us today">
                                {isFarsi ? " با ما تماس بگیرید" : "CALL US TODAY"}
                            </h3>
                            <br />
                            <Button size={"lg"} href={`tel:${isFarsi ? "647-381-4747" : "647-740-7474"}`}>
                                <h5 href={`tel:${isFarsi ? "647-381-4747" : "647-740-7474"}`} style={{ margin: 0, padding: 0, ...farsiFont }}>
                                    {isFarsi ? "(۶۴۷) ۳۸۱-۴۷۴۷" : "(647) 740-7474"}
                                    <i className="fas fa-phone" style={{ marginLeft: 10 }} />
                                </h5>
                            </Button>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    <OurServicesSection isFarsi={isFarsi} />
                </div>
            </div>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    <CarouselSection isFarsi={isFarsi} />
                </div>
            </div>
        </div>
    );
}
