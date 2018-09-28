import React from 'react';
import { Marker } from "react-google-maps";

import HomeIcon from "../../../assets/icons/home.svg";

console.log("Home Icon", HomeIcon);

const noOp = () => { };

const PropertyMarker = ({ property, onClick = noOp }) => {
    const position = { lat: property.latitude, lng: property.longitude };
    const icon = {
        url: HomeIcon,
        scaledSize: { width: 32, height: 32 }
    }
    return <Marker position={position} onClick={onClick} icon={icon} />
};

const PropertiesContents = ({ properties, selectProperty }) => {
    const propertyMarkers = properties.map((property, i) => (
        <PropertyMarker property={property} key={i} onClick={() => selectProperty(property)} />
    ));
    return propertyMarkers;
};

export default PropertiesContents;