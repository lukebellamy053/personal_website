import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";
import SectionCarousel from "../../Components/Sections/SectionCarousel";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Projects</h2>
            <h5 className={classes.description}>
              The projects shown below demonstrate my work from college and encompass various levels of software development skill.
              Some of these projects were done as part of my courses but others were done while learning a new skill. For instance, this website was made whilst learning ReactJS
            </h5>
          </GridItem>
        </GridContainer>
        <SectionCarousel items={this.props.items} />
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
