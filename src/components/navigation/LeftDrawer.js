import React from 'react';
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { SwipeableDrawer } from "../mui";
import LeftDrawerContents from "./LeftDrawerContents";
import { actions as uiActions } from "../../store/ui/actions";
import { Flex } from '../layout/Flex';

const styles = {
    list: {
        width: 250,
        height: "100%"
    }
}

const LeftDrawer = ({ classes, drawerOpen, actions }) => {
    const { openDrawer, closeDrawer } = actions;
    return (
        <SwipeableDrawer open={drawerOpen} onOpen={openDrawer} onClose={closeDrawer}>
            <Flex tabIndex={0} role="button" onClick={closeDrawer} className={classes.list}>
                <LeftDrawerContents />
            </Flex >
        </SwipeableDrawer>
    )
};

const mapState = ({ ui }) => ({ theme: ui.theme, drawerOpen: ui.drawerOpen });
const mapDispatch = (dispatch) => ({
    actions: bindActionCreators({
        openDrawer: uiActions.openDrawer,
        closeDrawer: uiActions.closeDrawer
    }, dispatch)
});
export default compose(
    withStyles(styles),
    connect(mapState, mapDispatch)
)(LeftDrawer);