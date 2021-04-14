import React from "react";
import "./Ricaurte.scss";
import GoogleMaps from "../GoogleMaps/GoogleMaps";
import Numbers from "../Numbers";
import Center from '../../../assets/images/homes/ricaurte/Center.bmp'
import Meeting from '../../../assets/images/homes/ricaurte/VanAndGovernor.jpeg'
import { Link } from "react-router-dom";

const Ricaurte = () => {
  const location = {
    lat: -13.59,
    lng: -71.775,
  };

  return (
    <section style={{ paddingTop: "6em" }}>
      <section id="ricaurte-cont">
        <header>
          <h1 id="ricaurte-header">Ibague-Ricaurte Drop-In Center</h1>
        </header>
        <section id="ricaurte-sections">
          <h3 id="ricaurte-names">Ruth Floreira Munoz</h3>
          <p id="ricaurte-titles">
            <i>Director</i>
          </p>
        </section>
        <section id="ricaurte-sections">
          <h3 id="ricaurte-names">General Funds</h3>
          <p id="ricaurte-titles">
            <i>Center Sponsor</i>
          </p>
        </section>
      </section>
      <section id="ricaurte-maps-cont">
        <GoogleMaps center={location} />
      </section>
      <Numbers
        firstNumber={80}
        firstString={"Sheltered Children"}
        secondNumber={16}
        secondString={"Victims of Armed Conflict"}
        thirdNumber={48}
        thirdString={"Orphans"}
        lastNumber={6}
        lastString={"Regular Volunteers"}
      />
      <AboutRicaurte />
      <div id="ricaurte-button-cont">
        <Link to="/homes&projects">
          <button id="ricaurte-button">More Homes</button>
        </Link>
      </div>
    </section>
  );
};

export default Ricaurte;

const AboutRicaurte = () => (
  <section style={{ paddingTop: "2em" }}>
    <header>
      <h3 id="ricaurte-names">About Ibague-Ricaurte Drop-In Center</h3>
    </header>
    <p id="ricaurte-paragraphs">
      In October 2016, Generations Humanitarian Chairman Van Evans met with
      Governor Barreto of the state of Tolima, Colombia. They agreed to open a
      new home for children internally displaced from the guerrilla war. This
      home will be opened in the capital city and will start with 50 children,
      with a goal to increase to 500 children.
    </p>
    <p id="ricaurte-paragraphs">
     Stay tuned!
    </p>
    
    <section style={{ padding: "2em 0em" }}>
      <div>
        <img id="ricaurte-images" src={Center} alt="ricaurte-center" />
      </div>
      <div>
        <img id="ricaurte-images" src={Meeting} alt="ricaurte-meeting" />
      </div>
    </section>
  </section>
);
