import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
    const classes = useStyles();
    return (
        <List className={classes.list}>
            <ListItem className={classes.listItem}>
                <Button
                    onClick={() => document.querySelector("#our-services").scrollIntoView({ behavior: "smooth", block: "center" })}
                    color="transparent"
                    className={classes.navLink}>
                    Our Services
                </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Button
                    color="transparent"
                    className={classes.navLink}
                    onClick={() => document.querySelector("#pricing").scrollIntoView({ behavior: "smooth", block: "center" })}>
                    Pricing
                </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Button href="#contact us" color="transparent" target="_blank" className={classes.navLink}>
                    Contact Us
                </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Tooltip id="solang-tooltip" title="See solang.ca" placement={window.innerWidth > 959 ? "top" : "left"} classes={{ tooltip: classes.tooltip }}>
                    <Button href="http://solang.ca" color="transparent" target="_blank" className={classes.navLink}>
                        Bin Rental
                    </Button>
                </Tooltip>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Tooltip
                    id="instagram-tooltip"
                    title="Follow us on instagram"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}>
                    <Button color="transparent" href="https://www.instagram.com/arshanjunk/" target="_blank" className={classes.navLink}>
                        <i className={classes.socialIcons + " fab fa-instagram"} />
                    </Button>
                </Tooltip>
            </ListItem>
        </List>
    );
}
