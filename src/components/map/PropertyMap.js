import React, { PureComponent, createRef } from 'react'
import { compose, withProps } from "recompose";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import { MarkerClusterer } from "react-google-maps/lib/components/addons/MarkerClusterer";
import { Flex } from '../layout/Flex';
import MapContents from './contents/MapContents';
import { actions as mapActions } from "../../store/map/actions";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const apiKey = process.env.REACT_APP_GMAPS_API_KEY;
const gmapsApiUrl = process.env.REACT_APP_GMAPS_URL.replace("|key|", apiKey);

const options = {
    fullScreenControl: false
};

class PropertyMap extends PureComponent {
    constructor(props) {
        super(props);
        this.mapRef = createRef();
    }

    onCenterChanged = () => {
        const map = this.mapRef.current;
        const center = map.getCenter();
        const position = {
            lat: center.lat(),
            lng: center.lng()
        };
        this.props.actions.setCenter(position);
    };

    onZoomChanged = () => {
        const map = this.mapRef.current;
        const zoom = map.getZoom();
        this.props.actions.setZoom(zoom);
    }

    render() {
        const { center, zoom } = this.props;
        return (
            <GoogleMap
                ref={this.mapRef}
                center={center}
                zoom={zoom}
                onCenterChanged={this.onCenterChanged}
                onZoomChanged={this.onZoomChanged}
                options={options}
            >
                <MarkerClusterer>
                    <MapContents />
                </MarkerClusterer>
            </GoogleMap>
        );
    }
}

const mapState = ({ map }) => map;
const mapDispatch = (dispatch) => ({
    actions: bindActionCreators({
        setCenter: mapActions.setCenter,
        setZoom: mapActions.setZoom
    }, dispatch)
});
export default compose(
    withProps({
        googleMapURL: gmapsApiUrl,
        loadingElement: <div>Loading...</div>,
        containerElement: <Flex grow basis={0} />,
        mapElement: <div style={{ flex: "1 1 auto" }} />
    }),
    withScriptjs,
    withGoogleMap,
    connect(mapState, mapDispatch)
)(PropertyMap); //(PropertyMap);
