import React, { useState } from "react";
import "./Homes.scss";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import HomeMarker from "../../assets/icons/HomeMarker.svg";
import { Link } from "react-router-dom";

const Homes = () => {
  const center = {
    lat: -0.5394375824270202,
    lng: -71.85000184049142,
  };

  return (
    <section id="homes-main">
      <header id="homes-header">Homes & Projects</header>
      <section id="homes-maps-cont">
        <GoogleMapsHomes center={center} />
      </section>
    </section>
  );
};

export default Homes;

const containerStyle = {
  width: "100%",
  height: "500px",
};

const GoogleMapsHomes = (props) => {
  const locations = [
    {
      position: { lat: -13.59, lng: -71.775 },
      label: "Azul Wasi",
      link: "azulwasi",
      windowOpen: false,
    },
    {
      position: { lat: 7.889518163401565, lng: -72.49675329465414 },
      label: " Cucuta",
      link: "cucuta",
      windowOpen: false,
    },
    {
      position: { lat: 10.340186454447643, lng: -68.74568247476785 },
      label: "Espinal",
      link: "espinal",
      windowOpen: false,
    },
    {
      position: { lat: 4.4383092814137575, lng: -75.19585248362887 },
      label: "San Jose",
      link: "sanjose",
      windowOpen: false,
    },
    {
      position: { lat: 10.340186454447643, lng: -68.74568247476785 },
      label: "La Guajira",
      link: "laguajira",
      windowOpen: false,
    },
    {
      position: { lat: -68.74568247476785, lng: -75.59549786566869 },
      label: "Medellin",
      link: "medellin",
      windowOpen: false,
    },
    {
      position: { lat: 4.202999609460414, lng: -74.63428108980403 },
      label: "Melgar",
      link: "melgar",
      windowOpen: false,
    },
    {
      position: { lat: 10.340186454447643, lng: -68.74568247476785 },
      label: "San Felipe",
      link: "sanfelipe",
      windowOpen: false,
    },
  ];

  const renderMarkers = () => {
    return locations.map((location, index) => (
      <InfoWindowMap key={index} {...location} />
    ));
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDKttBtjme2qyt16YJqCsAiPTscvMB4F7s">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={props.center}
        zoom={4}
      >
        {renderMarkers()}
      </GoogleMap>
    </LoadScript>
  );
};

const InfoWindowMap = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Marker
      key={props.index}
      position={{ lat: props.position.lat, lng: props.position.lng }}
      label={props.label}
      onClick={() => setIsOpen(!isOpen)}
      icon={HomeMarker}
    >
      {isOpen && (
        <InfoWindow onCloseClick={() => setIsOpen(!isOpen)}>
          <div>
            <h5>{props.label}</h5>
            <Link to={{ pathname: `/homes&projects/${props.link}` }}>
              Go To Home Page
            </Link>
          </div>
        </InfoWindow>
      )}
    </Marker>
  );
};
