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
import PropTypes from "prop-types";
import { farsiFontWithoutSize } from "../../../helpers";

const useStyles = makeStyles(styles);
const infoParagraphStyle = { color: "#999999", margin: "0 5px 10px", fontFamily: "Vazir" };

export default function OurServicesSection(props) {
    const classes = useStyles();
    const { isFarsi } = props;
    return (
        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                    <h2 style={farsiFontWithoutSize(isFarsi)} className={classes.title} id="our-services">
                        {isFarsi ? "خدمات ما" : "Our Services"}
                    </h2>
                    <h5 className={classes.description} style={farsiFontWithoutSize(isFarsi)}>
                        {isFarsi
                            ? "(GTA) خدمات جمع آوری مصالح ساختمانی در سراسر تورنتو"
                            : "We offer high quality and efficient junk removal services throughout GTA,"}
                        <br />
                        {isFarsi ? ".و تخریبات داخلی" : "as well as indoor demolition projects."}
                        <br />
                        {
                            // eslint-disable-next-line
                            isFarsi ? ".همچنین بین " + "های ۱۴ و ۲۱ یارد برای اجاره موجود می باشد " : "We also provide 14- or 21-cubic-yard bins."
                        }
                    </h5>
                </GridItem>
            </GridContainer>
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea title={isFarsi ? "جمع آوری مصالح ساختمانی" : "Junk Removal"} icon={DeleteSweep} iconColor="info" vertical isFarsi />
                        <p style={infoParagraphStyle}>
                            {isFarsi
                                ? "جمع آوری تقریباً هرگونه مصالح ساختمانی، مصالح نوسازی خوانه، چوب، وسایل گاراژ، مبلمان و موارد دیگر"
                                : "We remove almost anything construction material, wood, renovation waste, garage waste, scrap metals, furniture, and more."}
                        </p>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea title={isFarsi ? "تخریبات داخلی" : "Indoor Demolition"} icon={MeetingRoom} iconColor="success" vertical isFarsi />
                        <p style={infoParagraphStyle}>
                            {isFarsi ? (
                                <>
                                    <div>،(Drywall) خدمات تخریبات داخلی مانند از بین بردن دیوار های خشک</div>
                                    <div>کاشی، عایق بندی و غیره</div>
                                </>
                            ) : (
                                "We offer indoor demolition services such as removing drywalls, tiles, insulation, etc. Contact us for a free estimate."
                            )}
                        </p>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea title={isFarsi ? "اجاره بین" : "Bin Rental"} icon={LocalShipping} iconColor="danger" vertical isFarsi />
                        <p style={infoParagraphStyle}>
                            {isFarsi ? (
                                <div>
                                    برای اطلاعات بیشتر در رابطه به اجاره بین{" "}
                                    <div>
                                        <Tooltip
                                            id="instagram-tooltip"
                                            title="solang.ca"
                                            placement={window.innerWidth > 959 ? "top" : "left"}
                                            classes={{ tooltip: classes.tooltip }}>
                                            <a rel="noopener noreferrer" target="_blank" href="http://www.solang.ca">
                                                به سایت سولنج مراجعه فرمایید
                                            </a>
                                        </Tooltip>
                                    </div>
                                </div>
                            ) : (
                                <>
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
                                </>
                            )}
                        </p>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}

OurServicesSection.propTypes = {
    isFarsi: PropTypes.bool
};
