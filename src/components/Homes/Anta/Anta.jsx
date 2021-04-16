import React from "react";
import "./Anta.scss";
import GoogleMaps from "../GoogleMaps/GoogleMaps";
import Numbers from "../Numbers";
import AntaGirls from "../../../assets/images/homes/anta/AntaGirls.jpeg";
import AntaGroup from "../../../assets/images/homes/anta/AntaGroup.jpeg";
import MakeupGirls from "../../../assets/images/homes/anta/MakeupGirls.jpeg";
import { Link } from "react-router-dom";

const Anta = () => {
  const location = {
    lat: -13.59,
    lng: -71.775,
  };

  return (
    <section id="anta-main">
      <section id="anta-cont">
        <div id="anta-content">
          <header>
            <h1 id="anta-header">Anta Home</h1>
          </header>
          <section id="anta-sections">
            <h3 id="anta-names">Yanina Cisneros Zegarra</h3>
            <p id="anta-titles">
              <i>Director</i>
            </p>
          </section>
          <section id="anta-sections">
            <h3 id="anta-names">Barry and Kathy Rudd</h3>
            <p id="anta-titles">
              <i>Home Sponsor</i>
            </p>
          </section>
        </div>
        <section id="anta-maps-cont">
          <GoogleMaps center={location} />
        </section>
      </section>
      <Numbers
        firstNumber={11}
        firstString={"Sheltered Children"}
        secondNumber={0}
        secondString={"Victims of Armed Conflict"}
        thirdNumber={80}
        thirdString={"Orphans"}
        lastNumber={3}
        lastString={"Regular Volunteers"}
      />
      <AboutAnta />
      <div id="anta-button-cont">
        <Link to="/homes&projects">
          <button id="anta-button">More Homes</button>
        </Link>
      </div>
    </section>
  );
};

export default Anta;

const AboutAnta = () => (
  <section id="about-anta">
    <header>
      <h3 id="anta-names">About Anta Home</h3>
    </header>
    <p id="anta-paragraphs">
      Just 45 minutes west of Cusco, the Anta home is snuggled against a
      hillside in the town of Izcuchaca. Founded by a Catholic nun decades ago,
      it is home to about 25 girls or have been orphaned or abandoned. In
      addition many children who attend elementary school in Izcuchaca live in
      the surrounding villages atop the mountains surrounding the home. The nuns
      feed these children lunch (school lunch is not provided) as they leave
      school to return to their homes. Some of them live a 1-2 hour hike away
      and have had nothing to eat all day. These children live in improverish
      peasant homes made of adobe and dirt floors.
    </p>
    <p id="anta-paragraphs">
      The bishop of the local diocese donates approximately $300 USD monthly,
      and Generations Humanitarian pays the rest. The home is run by three nuns,
      who love and care for the children and are very frugal.
    </p>
    <p id="anta-paragraphs">
      The Anta home has a basketball/volleyball court, two greenhouses,
      classrooms, a multipurpose room, kitchen, laundry area (done by hand), and
      dorms.
    </p>
    <p id="anta-paragraphs">
      Beginning in 2017, we are launching an education fund for the full time
      residents of the home. This includes private education, technical trade
      such as making pottery and ceramics, and university scholarships.
    </p>
    <section style={{ padding: "2em 0em" }}>
      <div id="anta-image-cont">
        <img id="anta-images" src={AntaGirls} alt="anta-girls" />
      </div>
      <div id="anta-image-cont">
        <img id="anta-images" src={AntaGroup} alt="anta-group" />
      </div>
      <div id="anta-image-cont">
        <img id="anta-images" src={MakeupGirls} alt="anta-makeup girls" />
      </div>
    </section>
  </section>
);
