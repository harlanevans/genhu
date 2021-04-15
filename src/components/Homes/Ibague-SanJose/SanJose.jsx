import React from "react";
import "./SanJose.scss";
import GoogleMaps from "../GoogleMaps/GoogleMaps";
import Numbers from "../Numbers";
// import Center from "../../../assets/images/homes/sanjose/Center.bmp";
// import Meeting from "../../../assets/images/homes/sanjose/VanAndGovernor.jpeg";
import { Link } from "react-router-dom";

const SanJose = () => {
  const location = {
    lat: -13.59,
    lng: -71.775,
  };

  return (
    <section style={{ paddingTop: "6em" }}>
      <section id="sanjose-cont">
        <header>
          <h1 id="sanjose-header">Ibague-SanJose Drop-In Center</h1>
        </header>
        <section id="sanjose-sections">
          <h3 id="sanjose-names">Elsa Yanile Cortes</h3>
          <p id="sanjose-titles">
            <i>Director</i>
          </p>
        </section>
        <section id="sanjose-sections">
          <h3 id="sanjose-names">Reid Moon</h3>
          <p id="sanjose-titles">
            <i>Center Sponsor</i>
          </p>
        </section>
      </section>
      <section id="sanjose-maps-cont">
        <GoogleMaps center={location} />
      </section>
      <Numbers
        firstNumber={63}
        firstString={"Sheltered Children"}
        secondNumber={6}
        secondString={"Victims of Armed Conflict"}
        thirdNumber={46}
        thirdString={"Orphans"}
        lastNumber={5}
        lastString={"Regular Volunteers"}
      />
      <AboutSanJose />
      <div id="sanjose-button-cont">
        <Link to="/homes&projects">
          <button id="sanjose-button">More Homes</button>
        </Link>
      </div>
    </section>
  );
};

export default SanJose;

const AboutSanJose = () => (
  <section style={{ paddingTop: "2em" }}>
    <header>
      <h3 id="sanjose-names">About Ibague-sanjose Drop-In Center</h3>
    </header>
    <p id="sanjose-paragraphs">
      Coming Soon...
    </p>
    <p id="sanjose-paragraphs">Stay tuned!</p>

    <section style={{ padding: "2em 0em" }}>
      <div>
        {/* <img id="sanjose-images" src={Center} alt="sanjose-center" /> */}
      </div>
      <div>
        {/* <img id="sanjose-images" src={Meeting} alt="sanjose-meeting" /> */}
      </div>
    </section>
  </section>
);
