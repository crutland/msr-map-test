import React, { Component } from 'react';
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { AppBar, Toolbar, Typography, IconButton } from "../mui";
import { CloseIcon } from "../mui/icons";
import { Flex } from "../layout/Flex";
import { actions as uiActions } from "../../store/ui/actions";
import MetroDetails from './MetroDetails';

const InfoPanelHeader = ({ title, subtitle, iconAction }) => {
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Flex grow>
          <Typography variant="title">{title}</Typography>
          <Typography variant="subheading">{subtitle}</Typography>
        </Flex>
        <IconButton onClick={iconAction}>
          <CloseIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

const MetroSelectedHeader = ({ selectedMetro, actions }) => {
  const iconAction = () => actions.setShowInfoPanel(false);
  const title = selectedMetro.name;
  const subtitle = `${selectedMetro.propertyCount} properties`;
  return <InfoPanelHeader title={title} subtitle={subtitle} iconAction={iconAction} />
}

// const InfoPanel = ({ selectedMetro, showInfoPanel, actions }) => {
//   const hide = !showInfoPanel || (selectedMetro == null);
//   const header = <MetroSelectedHeader selectedMetro={selectedMetro} actions={actions} />
//   return hide ? null : (
//     <Flex grow basis={0}>
//       {header}
//       <MetroDetails selectedMetro={selectedMetro} />
//     </Flex>
//   );
// }

class InfoPanel extends Component {

  get shouldRender() {
    return this.props.selectedMetro != null;
  }

  renderHeader = () => {
    return <MetroSelectedHeader selectedMetro={this.props.selectedMetro} actions={this.props.actions} />
  }

  renderDetails = () => {
    if(!this.props.showInfoPanel) return null;
    return <MetroDetails selectedMetro={this.props.selectedMetro} />
  }


  render() {
    if (!this.shouldRender) return null;
    const grow = this.props.showInfoPanel ? 1 : 0;
    const style = { flexGrow: grow, flexShrink: 0, flexBasis: 0 };
    return (
      <div style={style}>
        {this.renderHeader()}
        {this.renderDetails()}
      </div>
    )
  }
}

const mapState = ({ ui, properties }) => ({
  showInfoPanel: ui.showInfoPanel,
  selectedMetro: properties.selectedMetro
});
const mapDispatch = (dispatch) => ({
  actions: bindActionCreators({
    setShowInfoPanel: uiActions.setShowInfoPanel
  }, dispatch)
});
export default compose(
  connect(mapState, mapDispatch)
)(InfoPanel);
