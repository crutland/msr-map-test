import React from "react";
import { connect } from "react-redux";
import { AppBar, Toolbar, IconButton, Typography } from "../mui/index";
import { MenuIcon, MyLocationIcon } from "../mui/icons";
import { Row } from "../layout/Flex";
import { withStyles } from "@material-ui/core";
import { actions as uiActions } from "../../store/ui/actions";
import { actions as mapActions } from "../../store/map/actions";
import { compose, bindActionCreators } from "redux";

const styles = {
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


const TitleBar = ({ classes, title, actions }) => {
  const { openDrawer, reset } = actions;
  return (
    <Row>
      <AppBar position="static" elevation={5}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={openDrawer} >
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.grow}>{title}</Typography>
          <IconButton title="Re-center" color="inherit" onClick={reset}>
            <MyLocationIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Row>
  );
};

const mapState = ({ ui }) => ({ title: ui.title ? ui.title : "Title" });
const mapDispatch = (dispatch) => ({
  actions: bindActionCreators({
    openDrawer: uiActions.openDrawer,
    reset: mapActions.resetToDefault
  }, dispatch)
});
export default compose(
  withStyles(styles),
  connect(mapState, mapDispatch)
)(TitleBar);