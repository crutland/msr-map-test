import React from 'react';
import { CircularProgress } from "../components/mui";
import { withStyles } from "@material-ui/core/styles";
import { compose } from 'redux';
import { connect } from "react-redux";
import { withDisplayProperty } from "../hoc/withDisplayProperty";

const styles = {
  backdrop: {
    backgroundColor: "#222A",
    position: "fixed",
    top: 0,
    left: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100000,
    width: "100vw",
    height: "100vh"
  }
}

const Loading = ({ classes }) => (
  <div className={classes.backdrop}>
    <CircularProgress color="secondary" size={200} />
  </div>
);

const mapState = ({ ui }) => ({ loading: ui.loading });

export default compose(
  withStyles(styles),
  connect(mapState),
  withDisplayProperty("loading")
)(Loading);
