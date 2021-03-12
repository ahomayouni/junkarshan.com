import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteSweep from "@material-ui/icons/DeleteSweep";
import MeetingRoom from "@material-ui/icons/MeetingRoom";
import LocalShipping from "@material-ui/icons/LocalShipping";
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import InfoArea from "../../../components/InfoArea/InfoArea.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);
const infoParagraphStyle = { color: "#999999", margin: "0 5px 10px" };

export default function OurServicesSection() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                    <h2 className={classes.title} id="our-services">
                        Our Services
                    </h2>
                    <h5 className={classes.description}>
                        We offer high quality and efficient junk removal services throughout GTA, <br />
                        as well as indoor demolition projects. <br />
                        We also provide 14- or 21-cubic-yard bins
                    </h5>
                </GridItem>
            </GridContainer>
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea title="Junk Removal" icon={DeleteSweep} iconColor="info" vertical />
                        <p style={infoParagraphStyle}>
                            We remove almost anything from construction materials, renovation waste, garage waste, scrap metals, furniture, and garbage.
                        </p>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea title="Indoor Demolition" icon={MeetingRoom} iconColor="success" vertical />
                        <p style={infoParagraphStyle}>
                            We offer indoor demolition services such as removing drywalls, tiles, insulation, etc. Contact us for a free estimate.
                        </p>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea title="Bin Rental" icon={LocalShipping} iconColor="danger" vertical />
                        <p style={infoParagraphStyle}>
                            Refer to{" "}
                            <Tooltip
                                id="instagram-tooltip"
                                title="solang.ca"
                                placement={window.innerWidth > 959 ? "top" : "left"}
                                classes={{ tooltip: classes.tooltip }}>
                                <a rel="noopener noreferrer" target="_blank" href="http://www.solang.ca">
                                    Solange Bin Rentals
                                </a>
                            </Tooltip>{" "}
                            for more information.
                        </p>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
