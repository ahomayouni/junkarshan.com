import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "../../components/CustomButtons/Button.js";
import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle.js";
import PropTypes from "prop-types";
import CustomDropdown from "../../components/CustomDropdown/CustomDropdown.js";
import Translate from "@material-ui/icons/Translate";

const useStyles = makeStyles(styles);
function farsiFont(isFarsi) {
    return { fontFamily: "Vazir", fontSize: isFarsi ? 16 : 12 };
}

export default function HeaderLinks(props) {
    const classes = useStyles();
    const { isFarsi } = props;
    return (
        <List className={classes.list}>
            <ListItem className={classes.listItem}>
                <Button
                    onClick={() => document.querySelector("#our-services").scrollIntoView({ behavior: "smooth", block: "center" })}
                    color="transparent"
                    className={classes.navLink}>
                    <div style={farsiFont(isFarsi)}>{isFarsi ? "خدمات ما" : "Our Services"}</div>
                </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Button
                    color="transparent"
                    className={classes.navLink}
                    onClick={() => document.querySelector("#pricing").scrollIntoView({ behavior: "smooth", block: "center" })}>
                    <div style={farsiFont(isFarsi)}>{isFarsi ? "قیمت های ما" : "Pricing"}</div>
                </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Button href="#contact us" color="transparent" target="_blank" className={classes.navLink}>
                    <div style={farsiFont(isFarsi)}>{isFarsi ? "با ما تماس بگیرید" : "Contact us"}</div>
                </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Tooltip id="solang-tooltip" title="See solang.ca" placement={window.innerWidth > 959 ? "top" : "left"} classes={{ tooltip: classes.tooltip }}>
                    <Button href="http://solang.ca" color="transparent" target="_blank" className={classes.navLink}>
                        <div style={farsiFont(isFarsi)}>{isFarsi ? "اجاره بین" : "Bin Rental"}</div>
                    </Button>
                </Tooltip>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Tooltip
                    id="instagram-tooltip"
                    title={isFarsi ? "ما را در اینستاگرام دنبال کنید" : "Follow us on instagram"}
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}>
                    <Button color="transparent" href="https://www.instagram.com/arshanjunk/" target="_blank" className={classes.navLink}>
                        <i className={classes.socialIcons + " fab fa-instagram"} />
                    </Button>
                </Tooltip>
            </ListItem>
            <ListItem className={classes.listItem}>
                <CustomDropdown
                    isFarsi={isFarsi}
                    left
                    buttonText={"Language"}
                    farsiButtonText={"زبان"}
                    hoverColor="info"
                    dropdownHeader="Dropdown Header"
                    buttonIcon={Translate}
                    buttonProps={{
                        className: classes.navLink,
                        color: "transparent"
                    }}
                    dropdownList={[
                        "Action",
                        "Another action",
                        "Something else here",
                        { divider: true },
                        "Separated link",
                        { divider: true },
                        "One more separated link"
                    ]}
                />
            </ListItem>
        </List>
    );
}

HeaderLinks.propTypes = {
    isFarsi: PropTypes.bool
};
