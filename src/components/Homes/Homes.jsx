import React from "react";
import "./Homes.scss";
import GoogleMaps from "./GoogleMaps/GoogleMaps";
import { Link } from "react-router-dom";

// const containerStyle = {
//   width: "20em",
//   height: "20em",
// };

const Homes = () => {
  const center = {
    // Azul Wasi
    // -13.590490307154065, -71.77554817640579
    lat: -13.59,
    lng: -71.775,
  };

  return (
    <section id="homes-main">
      <header id="homes-header">Homes & Projects</header>
      <ul id="homes-links-cont">
        <Link to="/homes&projects/anta" id="homes-link">
          <button id="homes-button">Anta</button>
        </Link>
        <Link to="/homes&projects/alvarado" id="homes-link">
          <button id="homes-button">Alvarado</button>
        </Link>
        <Link to="/homes&projects/azulwasi" id="homes-link">
          <button id="homes-button">Azul Wasi</button>
        </Link>
        <Link to="/homes&projects/greenhouse-hydroponics" id="homes-link">
          <button id="homes-button">Greenhouse & Hydroponics</button>
        </Link>
        <Link to="/homes&projects/espinal" id="homes-link">
          <button id="homes-button">Espinal</button>
        </Link>
        <Link to="/homes&projects/ibague/ricaurte" id="homes-link">
          <button id="homes-button">Ibague-Ricaurte</button>
        </Link>
        <Link to="/homes&projects/ibague/sanjose" id="homes-link">
          <button id="homes-button">Ibague-San Jose</button>
        </Link>
      </ul>
      <section id="homes-maps-cont">
        <GoogleMaps center={center} />
      </section>
    </section>
  );
};

export default Homes;
