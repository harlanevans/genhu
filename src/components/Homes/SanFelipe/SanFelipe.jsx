import React from "react";
import "./SanFelipe.scss";
import GoogleMaps from "../GoogleMaps/GoogleMaps";
import Numbers from "../Numbers";
// import Center from "../../../assets/images/homes/sanfelipe/Center.bmp";
// import Meeting from "../../../assets/images/homes/sanfelipe/VanAndGovernor.jpeg";
import { Link } from "react-router-dom";

const SanFelipe = () => {
  const location = {
    lat: 10.340186454447643,
    lng: -68.74568247476785,
  };

  return (
    <section id="sanfelipe-main">
      <section id="sanfelipe-cont">
        <div id="sanfelipe-content">
          <header>
            <h1 id="sanfelipe-header">San Felipe Home</h1>
          </header>
          <section id="sanfelipe-sections">
            <h3 id="sanfelipe-names">Ana Julia Giraud</h3>
            <p id="sanfelipe-titles">
              <i>Director</i>
            </p>
          </section>
          <section id="sanfelipe-sections">
            <h3 id="sanfelipe-names">Mitch Burton</h3>
            <p id="sanfelipe-titles">
              <i>Home Sponsor</i>
            </p>
          </section>
        </div>
        <section id="sanfelipe-maps-cont">
          <GoogleMaps center={location} />
        </section>
      </section>
      <Numbers
        firstNumber={85}
        firstString={"Sheltered Children"}
        secondNumber={0}
        secondString={"Victims of Armed Conflict or Refugees"}
        thirdNumber={20}
        thirdString={"Orphans"}
        lastNumber={3}
        lastString={"Regular Volunteers"}
      />
      <AboutSanFelipe />
      <div id="sanfelipe-button-cont">
        <Link to="/homes&projects">
          <button id="sanfelipe-button">More Homes</button>
        </Link>
      </div>
    </section>
  );
};

export default SanFelipe;

const AboutSanFelipe = () => (
  <section id="about-sanfelipe">
    <header>
      <h3 id="sanfelipe-names">About SanFelipe Home</h3>
    </header>
    <p id="sanfelipe-paragraphs">Coming Soon...</p>
    <p id="sanfelipe-paragraphs">Stay tuned!</p>

    <section style={{ padding: "2em 0em" }}>
      <div>
        {/* <img id="sanfelipe-images" src={Center} alt="sanfelipe-center" /> */}
      </div>
      <div>
        {/* <img id="sanfelipe-images" src={Meeting} alt="sanfelipe-meeting" /> */}
      </div>
    </section>
  </section>
);
