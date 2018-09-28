import React, { PureComponent } from 'react';
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import SwipeableViews from "react-swipeable-views";
import { AppBar, Tabs, Tab, Typography } from "../mui";
import { Flex } from "../layout/Flex";
import { actions as uiActions } from "../../store/ui/actions";
import { actions as propertyActions } from "../../store/properties/actions";
import { withDisplayProperty } from "../../hoc/withDisplayProperty";
import MetroDetails from './MetroDetails';

class InfoPanel extends PureComponent {
  state = {
    activeTab: 0
  };

  handleTabChange = (_, activeTab) => {
    this.setState({ activeTab });
    this.props.actions.setActiveInfoWindowTab(activeTab);
  };

  handleSwipe = (activeTab) => {
    this.setState({ activeTab });
    this.props.actions.setActiveInfoWindowTab(activeTab);
  }

  componentDidUpdate() {
    if (this.state.activeTab != this.props.activeInfoWindowTab) {
      this.setState({ activeTab: this.props.activeInfoWindowTab });
    }
  }

  render() {
    return (
      <Flex grow={0.75} basis={0}>
        <AppBar position="static" color="default">
          <Tabs fullWidth textColor="primary" value={this.state.activeTab} indicatorColor="primary" onChange={this.handleTabChange}>
            <Tab label="Metro Details" />
            <Tab label="Properties" />
          </Tabs>
        </AppBar>
        <SwipeableViews axis="x" index={this.state.activeTab} onChangeIndex={this.handleSwipe}>
          <MetroDetails selectedMetro={this.props.selectedMetro} />
          <Typography>Item Two</Typography>
        </SwipeableViews>
      </Flex>
    )
  }
}

const mapState = ({ ui, properties }) => ({
  showInfoPanel: ui.showInfoPanel,
  activeInfoWindowTab: properties.activeInfoWindowTab,
  selectedMetro: properties.selectedMetro
});
const mapDispatch = (dispatch) => ({
  actions: bindActionCreators({
    setShowInfoPanel: uiActions.setShowInfoPanel,
    setActiveInfoWindowTab: propertyActions.setActiveInfoWindowTab
  }, dispatch)
});
export default compose(
  connect(mapState, mapDispatch),
  withDisplayProperty("showInfoPanel")
)(InfoPanel);
