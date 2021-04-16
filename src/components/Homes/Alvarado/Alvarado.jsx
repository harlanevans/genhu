import React from "react";
import "./Alvarado.scss";
import GoogleMaps from "../GoogleMaps/GoogleMaps";
import Numbers from "../Numbers";
// import alvaradoGirls from "../../../assets/images/homes/alvarado/alvaradoGirls.jpeg";
// import alvaradoGroup from "../../../assets/images/homes/alvarado/alvaradoGroup.jpeg";
// import MakeupGirls from "../../../assets/images/homes/alvarado/MakeupGirls.jpeg";
import { Link } from "react-router-dom";

const Alvarado = () => {
  const location = {
    lat: -13.59,
    lng: -71.775,
  };

  return (
    <section id="alvarado-main">
      <section id="alvarado-cont">
        <div id="alvarado-content">
          <header>
            <h1 id="alvarado-header">Alvarado Drop-In Center</h1>
          </header>
          <section id="alvarado-sections">
            <h3 id="alvarado-names">Jose Santos</h3>
            <p id="alvarado-titles">
              <i>Director</i>
            </p>
          </section>
          <section id="alvarado-sections">
            <h3 id="alvarado-names">Reid Moon</h3>
            <p id="alvarado-titles">
              <i>Center Sponsor</i>
            </p>
          </section>
        </div>
        <section id="alvarado-maps-cont">
          <GoogleMaps center={location} />
        </section>
      </section>
      <Numbers
        firstNumber={32}
        firstString={"Sheltered Children"}
        secondNumber={100}
        secondString={"Victims of Armed Conflict"}
        thirdNumber={40}
        thirdString={"Orphans"}
        lastNumber={4}
        lastString={"Regular Volunteers"}
      />
      <AboutAlvarado />
      <div id="alvarado-button-cont">
        <Link to="/homes&projects">
          <button id="alvarado-button">More Homes</button>
        </Link>
      </div>
    </section>
  );
};

export default Alvarado;

const AboutAlvarado = () => (
  <section id="about-alvarado">
    <header>
      <h3 id="alvarado-names">About Alvarado Drop-In Center</h3>
    </header>
    <p style={{ padding: "2em 0em" }}>Coming Soon...</p>
    {/* <p id="alvarado-paragraphs">
      Just 45 minutes west of Cusco, the alvarado home is snuggled against a
      hillside in the town of Izcuchaca. Founded by a Catholic nun decades ago,
      it is home to about 25 girls or have been orphaned or abandoned. In
      addition many children who attend elementary school in Izcuchaca live in
      the surrounding villages atop the mountains surrounding the home. The nuns
      feed these children lunch (school lunch is not provided) as they leave
      school to return to their homes. Some of them live a 1-2 hour hike away
      and have had nothing to eat all day. These children live in improverish
      peasant homes made of adobe and dirt floors.
    </p>
    <p id="alvarado-paragraphs">
      The bishop of the local diocese donates approximately $300 USD monthly,
      and Generations Humanitarian pays the rest. The home is run by three nuns,
      who love and care for the children and are very frugal.
    </p>
    <p id="alvarado-paragraphs">
      The alvarado home has a basketball/volleyball court, two greenhouses,
      classrooms, a multipurpose room, kitchen, laundry area (done by hand), and
      dorms.
    </p>
    <p id="alvarado-paragraphs">
      Beginning in 2017, we are launching an education fund for the full time
      residents of the home. This includes private education, technical trade
      such as making pottery and ceramics, and university scholarships.
    </p>
    <section style={{ padding: "2em 0em" }}>
      <div>
        <img id="alvarado-images" src={alvaradoGirls} alt="alvarado-girls" />
      </div>
      <div>
        <img id="alvarado-images" src={alvaradoGroup} alt="alvarado-group" />
      </div>
      <div>
        <img id="alvarado-images" src={MakeupGirls} alt="alvarado-makeup girls" />
      </div>
    </section> */}
  </section>
);
