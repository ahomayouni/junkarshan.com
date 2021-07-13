import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import Card from "components/Card/Card.js";
import Carousel from "react-slick";
import PropTypes from "prop-types";
import LocationOn from "@material-ui/icons/LocationOn";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import { farsiFontWithoutSize } from "../../../helpers";
import before1 from "../../../assets/img/before1.jpg";
import before2 from "assets/img/before2.jpg";
import before3 from "assets/img/before3.jpg";
import before4 from "assets/img/before4.jpg";
import before5 from "assets/img/before5.jpg";
import before6 from "assets/img/before6.jpg";
import before7 from "assets/img/before7.jpg";
import before8 from "assets/img/before8.jpg";
import after1 from "assets/img/after1.jpg";
import after2 from "assets/img/after2.jpg";
import after3 from "assets/img/after3.jpg";
import after4 from "assets/img/after4.jpg";
import after5 from "assets/img/after5.jpg";
import after6 from "assets/img/after6.jpg";
import after7 from "assets/img/after7.jpg";
import after8 from "assets/img/after8.jpg";
import after9 from "assets/img/after9.jpg";
import f550 from "assets/img/f550.jpg";

const useStyles = makeStyles(styles);

export default function CarouselSection(props) {
    const classes = useStyles();
    const { isFarsi } = props;
    return (
        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                    <h2 style={farsiFontWithoutSize(isFarsi)} className={classes.title} id="our-work">
                        {isFarsi ? "نمونه کار ما" : "Our Work"}
                    </h2>
                    <ImageList className={classes.imageList} cols={12}>
                        <ImageListItem cols={6} rows={2}>
                            <img src={before1} />
                        </ImageListItem>
                        <ImageListItem cols={6} rows={2}>
                            <img src={after1} />
                        </ImageListItem>
                        <ImageListItem cols={6} rows={2}>
                            <img src={before2} />
                        </ImageListItem>
                        <ImageListItem cols={6} rows={2}>
                            <img src={after2} />
                        </ImageListItem>
                        <ImageListItem cols={12} rows={2}>
                            <img src={f550} />
                        </ImageListItem>
                        <ImageListItem cols={3} rows={1}>
                            <img src={before3} />
                        </ImageListItem>
                        <ImageListItem cols={3} rows={1}>
                            <img src={after3} />
                        </ImageListItem>
                        <ImageListItem cols={3} rows={1}>
                            <img src={before4} />
                        </ImageListItem>
                        <ImageListItem cols={3} rows={1}>
                            <img src={after4} />
                        </ImageListItem>
                        <ImageListItem cols={6} rows={2}>
                            <img src={before5} />
                        </ImageListItem>
                        <ImageListItem cols={6} rows={2}>
                            <img src={after5} />
                        </ImageListItem>
                        <ImageListItem cols={6} rows={1}>
                            <img src={before7} />
                        </ImageListItem>
                        <ImageListItem cols={6} rows={1}>
                            <img src={after7} />
                        </ImageListItem>
                        <ImageListItem cols={4} rows={2}>
                            <img src={before8} />
                        </ImageListItem>
                        <ImageListItem cols={4} rows={2}>
                            <img src={after8} />
                        </ImageListItem>
                        <ImageListItem cols={4} rows={2}>
                            <img src={after9} />
                        </ImageListItem>
                    </ImageList>
                </GridItem>
            </GridContainer>
        </div>
    );
}

CarouselSection.propTypes = {
    isFarsi: PropTypes.bool
};
