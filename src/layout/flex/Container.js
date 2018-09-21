import React from 'react';
import { withStyles } from "@material-ui/core/styles";

const styles = {
    root: {
        display: "flex",
        height: "100vh",
        flexFlow: "column nowrap"
    }
};

const Container = ({ children, classes }) => {
    return (
        <div className={classes.root}>
            {children}
        </div>
    )
};

const StyledContainer = withStyles(styles)(Container);

export default StyledContainer;