import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import logo from "assets/img/logo.png";

const logoStyles = {
    background: 'white'
};


export function ProjectDetails({classes, imageClasses, navImageClasses, background, project, ...props}) {
    return (
        <>
            <Parallax small filter image={project ? project.img : null}/>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div>
                    <div className={classes.container}>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={6}>
                                <div className={classes.profile}>
                                    <div>
                                        <img style={logoStyles} src={project && project.icon ? project.icon : logo}
                                             alt="..." className={imageClasses}/>
                                    </div>
                                    <div className={classes.name}>
                                        <h3 className={classes.title}>{project.text}</h3>
                                    </div>
                                </div>
                            </GridItem>
                        </GridContainer>
                        <div className={classes.description}>
                            {project.content}
                        </div>
                        <div style={{textAlign: 'center'}}>
                            {project.article ? project.article : null}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}