

import React from 'react';
import ReactMapGL from 'react-map-gl';

const MapComponent = () => {
  const MAPBOX_TOKEN = 'YOUR_MAPBOX_TOKEN'; 

  const viewport = {
    width: '100%',
    height: '100%',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 10,
  };

  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxApiAccessToken={MAPBOX_TOKEN}
    />
  );
};

export default MapComponent;
