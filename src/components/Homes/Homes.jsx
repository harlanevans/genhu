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
    <section id='homes-main'>
      <header id="homes-header">Homes & Projects</header>
      <ul id="homes-links-cont">
        <li id='homes-list'>
          <Link to="/homes&projects/anta" id="homes-link">
            Anta
          </Link>
        </li>
        <li id='homes-list'>
          <Link to="/homes&projects/alvarado" id="homes-link">
            Alvarado
          </Link>
        </li>
        <li id='homes-list'>
          <Link to="/homes&projects/azulwasi" id="homes-link">
            Azul Wasi
          </Link>
        </li>
        <li id='homes-list'>
          <Link to="/homes&projects/greenhouse-hydroponics" id="homes-link">
            Greenhouse & Hydroponics
          </Link>
        </li>
        <li id='homes-list'>
          <Link to="/homes&projects/ibague/ricaurte" id="homes-link">
            Ibague-Ricaurte
          </Link>
        </li>
        <li id='homes-list'>
          <Link to="/homes&projects/ibague/sanjose" id="homes-link">
            Ibague-San Jose
          </Link>
        </li>
      </ul>
      <section id="homes-maps-cont">
        <GoogleMaps center={center} />
      </section>
    </section>
  );
};

export default Homes;
