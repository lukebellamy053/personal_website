import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import carouselStyle from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx";

class SectionCarousel extends React.Component {
    render() {
        const {classes} = this.props;
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false
        };

        const items = [
            {
                img: require('assets/img/bg.jpg'),
                text: 'Test 1'
            },
            {
                img: require('assets/img/bg2.jpg'),
                text: 'Test 2'
            }
        ];

        return (
            <div className={classes.section}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
                            <Card carousel>
                                <Carousel {...settings}>
                                    {this.makeCarousel(items)}
                                </Carousel>
                            </Card>
                        </GridItem>
                    </GridContainer>
                </div>
            </div>
        );
    }

    makeCarousel(slides) {
        const slides_data = [];
        slides.forEach((slide) => {
           slides_data.push(this.makeSlide(slide))
        });
        return slides_data;
    }

    makeSlide({img, text}) {
        return (<div>
            <img
                src={img}
                alt="First slide"
                className="slick-image"
            />
            <div className="slick-caption">
                <h4>
                    {text}
                </h4>
            </div>
        </div>)
    }


}

export default withStyles(carouselStyle)(SectionCarousel);
