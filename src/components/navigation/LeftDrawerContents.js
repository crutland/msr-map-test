import React, { Fragment } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Divider } from "../mui";
import { CheckBoxIcon, CheckBoxOutlineIcon, RefreshIcon } from "../mui/icons";
import { Flex } from '../layout/Flex';
import { bindActionCreators, compose } from 'redux';
import { connect } from "react-redux";
import { actions as uiActions } from "../../store/ui/actions";
import { actions as propertyActions } from "../../store/properties/actions";

const LeftDrawerContents = ({ theme, actions }) => {
    const { getMetros, setTheme } = actions;
    const nextTheme = theme === "dark" ? "light" : "dark";
    const icon = theme === "dark" ? <CheckBoxIcon /> : <CheckBoxOutlineIcon />;
    const updateTheme = () => setTheme(nextTheme);
    return (
        <Fragment>
            <List>
                <ListItem button onClick={getMetros}>
                    <ListItemIcon>
                        <RefreshIcon />
                    </ListItemIcon>
                    <ListItemText>
                        Refresh Data
                    </ListItemText>
                </ListItem>
            </List>
            <Flex grow />
            <List>
                <Divider />
                <ListItem button onClick={updateTheme}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText>Use Dark Theme</ListItemText>
                </ListItem>
            </List>
        </Fragment>
    )
};

const mapState = ({ ui }) => ({ theme: ui.theme });
const mapDispatch = (dispatch) => ({
    actions: bindActionCreators({
        setTheme: uiActions.setTheme,
        getMetros: propertyActions.getMetros
    }, dispatch)
});
export default compose(
    connect(mapState, mapDispatch)
)(LeftDrawerContents);