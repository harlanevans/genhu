import React, { useEffect, useState } from "react";
import handleViewport from 'react-in-viewport';
import { Fade } from 'react-reveal'
import "./Landing.scss";
import LandingKids from "../../assets/images/KidsLanding.jpg";

import ProvenPage from "./Proven/Proven";
import Success from "./Success/Success";
import Learn from "./Learn/Learn";
import Stages from "./Stages/Stages";
import Footer from '../Footer/Footer';

const Landing = () => {
  const [inComp, setInComp] = useState(false)
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
        <section style={styles.sectionPadding}>
          <Footer />
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
