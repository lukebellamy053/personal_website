import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

class TeamSection extends React.Component {
    render() {
        const {items, classes} = this.props;
        const imageClasses = classNames(
            classes.imgRaised,
            classes.imgRoundedCircle,
            classes.imgFluid
        );
        return (
            <div className={classes.section}>
                <div>
                    <GridContainer>
                        {this.makeItems({classes: classes, imageClasses: imageClasses, items: items})}
                    </GridContainer>
                </div>
            </div>
        );
    }

    makeItems({classes, imageClasses, items}) {
        const itemCode = [];

        items.forEach((item) => {
            itemCode.push(this.makeItem({classes: classes, imageClasses: imageClasses, ...item}))
        });

        return itemCode;
    }

    makeItem({classes, imageClasses, text, content, icon, footer}) {
        return (
            <GridItem xs={12} sm={12} md={4}>
                <Card plain>
                    <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                        <img src={icon} alt="..." className={imageClasses}/>
                    </GridItem>
                    <h4 className={classes.cardTitle}>
                        {text}
                    </h4>
                    <CardBody>
                        <p className={classes.description}>
                            {content}
                        </p>
                    </CardBody>
                    {footer &&
                    <CardFooter className={classes.justifyCenter}>
                        {footer}
                    </CardFooter>
                    }
                </Card>
            </GridItem>
        )
    }

}

export default withStyles(teamStyle)(TeamSection);
