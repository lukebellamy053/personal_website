import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import logo from "assets/img/logo.png";


export function NoProject({classes, imageClasses, navImageClasses, background, ...props}) {

    const logoStyle = {
        background: 'white'
    };

    return (
        <>
            <Parallax small filter image={background}/>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div>
                    <div className={classes.container}>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={6}>
                                <div className={classes.profile}>
                                    <div>
                                        <img style={logoStyle} src={logo} alt="..." className={imageClasses}/>
                                    </div>
                                    <div className={classes.name}>
                                        <h3 className={classes.title}>Project Not Found!</h3>
                                        <p>I'm sorry but this project doesn't seem to exist! Please visit the home page
                                            to view another project</p>
                                    </div>
                                </div>
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
            </div>
        </>
    );

}