import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Footer from "components/Footer/Footer.jsx";


import projectPageStyle from "assets/jss/material-kit-react/views/productPage.jsx";
import MyHeader from "components/MyHeader/MyHeader.jsx";
import items from "settings/products.jsx";
import {ProjectDetails} from "components/ProjectDetails/ProjectDetails";
import {NoProject} from "components/NoProject/NoProject";

class ProjectPage extends React.Component {

    state = {
        id: null,
        project: null,
        background: require("assets/img/profile-bg.jpg")
    };

    componentDidMount() {
        const id = this.props.match.params.project_id;
        let newState = {};
        newState.id = id;
        if (id) {
            newState.project = items.filter(item => item.id === id)[0];
        } else {
            newState.project = null;
        }
        this.setState(newState);
    }


    render() {
        const {classes, ...rest} = this.props;
        const imageClasses = classNames(
            classes.imgRaised,
            classes.imgRoundedCircle,
            classes.imgFluid
        );
        const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
        return (
            <div>
                <MyHeader
                    links={items}
                    {...rest}
                />
                {
                    this.state.project ?
                        <ProjectDetails classes={classes} imageClasses={imageClasses} navImageClasses={navImageClasses}
                                        background={this.state.background} project={this.state.project}
                                        {...rest}/> :
                        <NoProject classes={classes} imageClasses={imageClasses} navImageClasses={navImageClasses}
                                   background={this.state.background}
                                   {...rest}/>
                }
                <Footer/>
            </div>
        );
    }
}

export default withStyles(projectPageStyle)(ProjectPage);
