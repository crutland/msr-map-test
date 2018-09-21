import React from 'react';
import { withStyles } from "@material-ui/core/styles";

const styles = {
    root: {
        flex: "0 1 auto"
    },
    grow: {
        flexGrow: 1
    }
};

const Cell = ({ children, classes, grow = false }) => {
    let divClassNames = classes.root;
    if (grow)
        divClassNames += ` ${classes.grow}`;
    return (
        <div className={divClassNames}>
            {children}
        </div>
    )
};

const StyledCell = withStyles(styles)(Cell);

export default StyledCell;