import React from "react";
import "./SanJose.scss";
import GoogleMaps from "../GoogleMaps/GoogleMaps";
import Numbers from "../Numbers";
// import Center from "../../../assets/images/homes/sanjose/Center.bmp";
// import Meeting from "../../../assets/images/homes/sanjose/VanAndGovernor.jpeg";
import { Link } from "react-router-dom";

const SanJose = () => {
  const location = {
    lat: 4.4383092814137575,
    lng: -75.19585248362887,
  };

  return (
    <section id='sanjose-main'>
      <section id="sanjose-cont">
        <div id='sanjose-content'>

        <header>
          <h1 id="sanjose-header">Ibague - San Jose Drop-In Center</h1>
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
        </div>
      <section id="sanjose-maps-cont">
        <GoogleMaps center={location} />
      </section>
      </section>
      <Numbers
        firstNumber={65}
        firstString={"Sheltered Children"}
        secondNumber={60}
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
  <section id='about-sanjose'>
    <header>
      <h3 id="sanjose-names">About Ibague - San Jose Drop-In Center</h3>
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
