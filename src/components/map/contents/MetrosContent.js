import React from 'react';
import { Marker } from "react-google-maps";

const noOp = () => { };

const MetroMarker = ({ metro, onClick = noOp }) => {
  const position = { lat: metro.latitude, lng: metro.longitude };
  return <Marker position={position} onClick={onClick} />
};

const MetroContents = ({ metros, selectMetro }) => {
  const metroMarkers = metros.map((metro, i) => (
    <MetroMarker metro={metro} key={i} onClick={() => selectMetro(metro)} />
  ));
  return metroMarkers;
}

export default MetroContents;