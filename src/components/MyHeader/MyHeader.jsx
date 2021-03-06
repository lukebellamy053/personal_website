import React from "react";
import HeaderLinks from "components/Header/HeaderLinks";
import withStyles from "@material-ui/core/styles/withStyles";
import Header from "components/Header/Header";

function MyHeader({...props}) {
    const dashboardRoutes = [];
    const {links, ...rest} = props;
    return (
        <Header
            color="white"
            routes={dashboardRoutes}
            brand="Luke Bellamy"
            rightLinks={<HeaderLinks links={links}/>}
            fixed
            changeColorOnScroll={{
                height: 400,
                color: "dark"
            }}
            {...rest}
        />
    );
}

export default withStyles({})(MyHeader);