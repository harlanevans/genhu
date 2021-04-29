import React from "react";
import "./LaGuajira.scss";
import GoogleMaps from "../GoogleMaps/GoogleMaps";
import Numbers from "../Numbers";
// import Center from "../../../assets/images/homes/laguajira/Center.bmp";
// import Meeting from "../../../assets/images/homes/laguajira/VanAndGovernor.jpeg";
import { Link } from "react-router-dom";

const LaGuajira = () => {
  const location = {
    lat: 11.707239221100238,
    lng: -72.28196340453023,
  };

  return (
    <section id="laguajira-main">
      <section id="laguajira-cont">
        <div id="laguajira-content">
          <header>
            <h1 id="laguajira-header">La Guajira Home</h1>
          </header>
          <section id="laguajira-sections">
            <h3 id="laguajira-names">Oriana Rincon</h3>
            <p id="laguajira-titles">
              <i>Director</i>
            </p>
          </section>
          <section id="laguajira-sections">
            <h3 id="laguajira-names">Reid Moon</h3>
            <p id="laguajira-titles">
              <i>Home Sponsor</i>
            </p>
          </section>
        </div>
        <section id="laguajira-maps-cont">
          <GoogleMaps center={location} />
        </section>
      </section>
      <Numbers
        firstNumber={200}
        firstString={"Sheltered Children"}
        secondNumber={0}
        secondString={"Victims of Armed Conflict"}
        thirdNumber={30}
        thirdString={"Orphans"}
        lastNumber={10}
        lastString={"Regular Volunteers"}
      />
      <AboutLaGuajira />
      <div id="laguajira-button-cont">
        <Link to="/homes&projects">
          <button id="laguajira-button">More Homes</button>
        </Link>
      </div>
    </section>
  );
};

export default LaGuajira;

const AboutLaGuajira = () => (
  <section id="about-laguajira">
    <header>
      <h3 id="laguajira-names">About La Guajira Home</h3>
    </header>
    <p id="laguajira-paragraphs">Coming Soon...</p>
    <p id="laguajira-paragraphs">Stay tuned!</p>

    <section style={{ padding: "2em 0em" }}>
      <div>
        {/* <img id="laguajira-images" src={Center} alt="laguajira-center" /> */}
      </div>
      <div>
        {/* <img id="laguajira-images" src={Meeting} alt="laguajira-meeting" /> */}
      </div>
    </section>
  </section>
);
