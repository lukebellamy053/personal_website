import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";
import MyHeader from "components/MyHeader/MyHeader.jsx"
import items from "settings/products.jsx";
// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx";
import TeamSection from "./Sections/TeamSection.jsx";
import WorkSection from "./Sections/WorkSection.jsx";


class LandingPage extends React.Component {


    constructor(props) {
        super(props);
    }

    render() {
        const {classes, ...rest} = this.props;

        return (
            <div>
                <MyHeader
                    links={items}
                    {...rest}
                />
                <Parallax filter image={require("assets/img/landing-bg.jpg")}>
                    <div className={classes.container}>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={6}>
                                <h1 className={classes.title}>Junior Software Engineer</h1>
                                <h4>
                                    A recent Computer Science graduate from Loughborough University in the UK.
                                    I am always improving my software engineering skills through building real-world
                                    applications and small personal projects.
                                    This website is a collection of the various projects I have worked
                                    on
                                </h4>
                                <br/>
                                <Button
                                    color="white"
                                    size="lg"
                                    href="https://github.com/lukebellamy053"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fab fa-github"/>
                                    Github
                                </Button>
                            </GridItem>
                        </GridContainer>
                    </div>
                </Parallax>
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.container}>
                        <ProductSection items={items}/>
                        <TeamSection items={items}/>
                        <WorkSection/>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default withStyles(landingPageStyle)(LandingPage);
