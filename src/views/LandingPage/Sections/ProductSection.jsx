import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

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
              The projects shown below demonstrate my work from college through to the end of university.
              Some of these projects were done as part of my courses but others were done while learning a new skill. This website for instance, was made while learning ReactJS
            </h5>
          </GridItem>
        </GridContainer>
        <SectionCarousel items={this.props.items} />

      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
