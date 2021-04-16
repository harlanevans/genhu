import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const GoogleMaps = (props) => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyDKttBtjme2qyt16YJqCsAiPTscvMB4F7s">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={props.center}
        zoom={7}
      >
        <Marker position={props.center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMaps;
