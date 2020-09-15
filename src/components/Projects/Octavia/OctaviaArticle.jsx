import React from 'react'
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";
import withStyles from "@material-ui/core/styles/withStyles";

class OctaviaArticle extends React.Component {
    render() {
      const { classes } = this.props;
      return (
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h5 className={classes.title}>Why The Online Office?</h5>
            <p className={classes.description}>The idea for The Online Office came about when I was looking for a final year project at university. A friend I had worked with on The Physique Factory pitched her idea to me and we went from there</p>
            <h5 className={classes.title}>What does it do?</h5>
            <p className={classes.description}>The Online Office allows companies to consolidate information about their contracts, disputes and businesses they have deals with, in one place with an easy to use interface.
                The platform is intended to reduce costs associated with contract disputes by streamlining as much of the process as possible. We achieve this by having all the information about contracts available to those who need it and by bringing technical experts and mediators with the relevant experience to those who need them.
            </p>
          </GridItem>
        </GridContainer>
    );
    }
  }
  
  export default withStyles(productStyle)(OctaviaArticle);