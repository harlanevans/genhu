import React from "react";
import "./Melgar.scss";
import GoogleMaps from "../GoogleMaps/GoogleMaps";
import Numbers from "../Numbers";
// import Center from "../../../assets/images/homes/melgar/Center.bmp";
// import Meeting from "../../../assets/images/homes/melgar/VanAndGovernor.jpeg";
import { Link } from "react-router-dom";

const Melgar = () => {
  const location = {
    lat: 4.202999609460414,
    lng: -74.63428108980403,
  };

  return (
    <section id="melgar-main">
      <section id="melgar-cont">
        <div id="melgar-content">
          <header>
            <h1 id="melgar-header">Melgar Home</h1>
          </header>
          <section id="melgar-sections">
            <h3 id="melgar-names">Maria Gabriela Romero</h3>
            <p id="melgar-titles">
              <i>Director</i>
            </p>
          </section>
          <section id="melgar-sections">
            <h3 id="melgar-names">Ron & Sonja Goodman</h3>
            <p id="melgar-titles">
              <i>Home Sponsor</i>
            </p>
          </section>
        </div>
        <section id="melgar-maps-cont">
          <GoogleMaps center={location} />
        </section>
      </section>
      <Numbers
        firstNumber={71}
        firstString={"Sheltered Children"}
        secondNumber={40}
        secondString={"Victims of Armed Conflict"}
        thirdNumber={75}
        thirdString={"Orphans"}
        lastNumber={20}
        lastString={"Regular Volunteers"}
      />
      <AboutMelgar />
      <div id="melgar-button-cont">
        <Link to="/homes&projects">
          <button id="melgar-button">More Homes</button>
        </Link>
      </div>
    </section>
  );
};

export default Melgar;

const AboutMelgar = () => (
  <section id="about-melgar">
    <header>
      <h3 id="melgar-names">About Melgar Home</h3>
    </header>
    <p id="melgar-paragraphs">Coming Soon...</p>
    <p id="melgar-paragraphs">Stay tuned!</p>

    <section style={{ padding: "2em 0em" }}>
      <div>
        {/* <img id="melgar-images" src={Center} alt="melgar-center" /> */}
      </div>
      <div>
        {/* <img id="melgar-images" src={Meeting} alt="melgar-meeting" /> */}
      </div>
    </section>
  </section>
);
