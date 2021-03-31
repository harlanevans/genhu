import React from "react";
import "./Landing.scss";
import LandingKids from "../../assets/images/KidsLanding.jpg";

import ProvenPage from "./Proven/Proven";
import Success from "./Success/Success";
import Learn from "./Learn/Learn";
import Stages from "./Stages/Stages";

const Landing = () => {
  return (
    <>
      <section id="landing-page" style={styles.sectionPadding}>
        <h1 id="landing-header">Generations Humanitarian</h1>
        <div id="image-container">
          <img
            alt="Espinal Happy and Smiling Kids"
            src={LandingKids}
            id="kids-landing-image"
          />
        </div>
      </section>
      <section style={styles.sectionPadding}>
        <ProvenPage />
      </section>
      <section>
        <Success />
        <section style={styles.sectionPadding}>
          <Learn />
        </section>
        <section style={styles.sectionPadding}>
          <Stages />
        </section>
      </section>
    </>
  );
};

export default Landing;

const styles = {
  sectionPadding: {
    padding: "2em 2em",
  },
};
