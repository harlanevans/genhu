import React from "react";
import "./Medellin.scss";
import GoogleMaps from "../GoogleMaps/GoogleMaps";
import Numbers from "../Numbers";
// import Center from "../../../assets/images/homes/medellin/Center.bmp";
// import Meeting from "../../../assets/images/homes/medellin/VanAndGovernor.jpeg";
import { Link } from "react-router-dom";

const Medellin = () => {
  const location = {
    lat: 6.220248552658661,
    lng: -75.59611268762504,
  };

  return (
    <section id="medellin-main">
      <section id="medellin-cont">
        <div id="medellin-content">
          <header>
            <h1 id="medellin-header">Medellin Home</h1>
          </header>
          <section id="medellin-sections">
            <h3 id="medellin-names">Zulma Castano</h3>
            <p id="medellin-titles">
              <i>Director</i>
            </p>
          </section>
          <section id="medellin-sections">
            <h3 id="medellin-names">Van Evans</h3>
            <p id="medellin-titles">
              <i>Home Sponsor</i>
            </p>
          </section>
        </div>
        <section id="medellin-maps-cont">
          <GoogleMaps center={location} />
        </section>
      </section>
      <Numbers
        firstNumber={41}
        firstString={"Sheltered Children"}
        secondNumber={80}
        secondString={"Victims of Armed Conflict or Refugees"}
        thirdNumber={60}
        thirdString={"Orphans"}
        lastNumber={4}
        lastString={"Regular Volunteers"}
      />
      <AboutMedellin />
      <div id="medellin-button-cont">
        <Link to="/homes&projects">
          <button id="medellin-button">More Homes</button>
        </Link>
      </div>
    </section>
  );
};

export default Medellin;

const AboutMedellin = () => (
  <section id="about-medellin">
    <header>
      <h3 id="medellin-names">About Medellin Home</h3>
    </header>
    <p id="medellin-paragraphs">Coming Soon...</p>
    <p id="medellin-paragraphs">Stay tuned!</p>

    <section style={{ padding: "2em 0em" }}>
      <div>
        {/* <img id="medellin-images" src={Center} alt="medellin-center" /> */}
      </div>
      <div>
        {/* <img id="medellin-images" src={Meeting} alt="medellin-meeting" /> */}
      </div>
    </section>
  </section>
);
