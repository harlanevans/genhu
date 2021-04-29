import React from "react";
import "./Cucuta.scss";
import GoogleMaps from "../GoogleMaps/GoogleMaps";
import Numbers from "../Numbers";
// import Center from "../../../assets/images/homes/cucuta/Center.bmp";
// import Meeting from "../../../assets/images/homes/cucuta/VanAndGovernor.jpeg";
import { Link } from "react-router-dom";

const Cucuta = () => {
  const location = {
    lat: 7.889518163401565,
    lng: -72.49675329465414,
  };

  return (
    <section id="cucuta-main">
      <section id="cucuta-cont">
        <div id="cucuta-content">
          <header>
            <h1 id="cucuta-header">Cucuta Home</h1>
          </header>
          <section id="cucuta-sections">
            <h3 id="cucuta-names">Ana Julia Giraud</h3>
            <p id="cucuta-titles">
              <i>Director</i>
            </p>
          </section>
          <section id="cucuta-sections">
            <h3 id="cucuta-names">Mitch Burton & Steve Hunt</h3>
            <p id="cucuta-titles">
              <i>Home Sponsor</i>
            </p>
          </section>
        </div>
        <section id="cucuta-maps-cont">
          <GoogleMaps center={location} />
        </section>
      </section>
      <Numbers
        firstNumber={375}
        firstString={"Sheltered Children"}
        secondNumber={100}
        secondString={"Victims of Armed Conflict or Refugees"}
        thirdNumber={80}
        thirdString={"Orphans"}
        lastNumber={16}
        lastString={"Regular Volunteers"}
      />
      <AboutCucuta />
      <div id="cucuta-button-cont">
        <Link to="/homes&projects">
          <button id="cucuta-button">More Homes</button>
        </Link>
      </div>
    </section>
  );
};

export default Cucuta;

const AboutCucuta = () => (
  <section id="about-cucuta">
    <header>
      <h3 id="cucuta-names">About Cucuta Home</h3>
    </header>
    <p id="cucuta-paragraphs">Coming Soon...</p>
    <p id="cucuta-paragraphs">Stay tuned!</p>

    <section style={{ padding: "2em 0em" }}>
      <div>
        {/* <img id="cucuta-images" src={Center} alt="cucuta-center" /> */}
      </div>
      <div>
        {/* <img id="cucuta-images" src={Meeting} alt="cucuta-meeting" /> */}
      </div>
    </section>
  </section>
);
