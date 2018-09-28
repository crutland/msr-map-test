import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { actions as propertyActions } from "../../../store/properties/actions";
import MetroContents from "./MetrosContent";
import PropertiesContents from "./PropertiesContent";


const MapContents = ({ metros, selectedMetro, properties, actions }) => {
  if (metros == null) { //no data is loaded yet. Render nothing.
    return null;
  }
  if (selectedMetro != null && properties != null) { //a metro has been selected and its properties have been loaded. render actual properties
    return <PropertiesContents properties={properties} selectProperty={actions.selectProperty} />
  }
  //if we've gotten this far, either we should be showing metros, 
  //or we've selected a metro but haven't loaded the properties yet.
  //either way, render metros.
  return <MetroContents metros={metros} selectMetro={actions.selectMetro} />
}

const mapState = ({ properties }) => ({ ...properties });
const mapDispatch = (dispatch) => ({
  actions: bindActionCreators({
    selectMetro: propertyActions.selectMetro,
    selectProperty: propertyActions.selectProperty
  }, dispatch)
});
export default connect(mapState, mapDispatch)(MapContents);
