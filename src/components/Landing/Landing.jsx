import React from "react";
import { Fade } from "react-reveal";
import "./Landing.scss";
import LandingKids from "../../assets/images/KidsLanding.jpg";

import ProvenPage from "./Proven/Proven";
import Success from "./Success/Success";
import Learn from "./Learn/Learn";
import Stages from "./Stages/Stages";
// import Footer from '../Footer/Footer';

const Landing = () => {
  return (
    <>
      <Fade>
        <HeroPage />
        <ProvenPage />
        <Success />
        <Learn />
        <Stages />
      </Fade>
    </>
  );
};

export default Landing;

const HeroPage = () => (
  <section id="landing-page">
    <h1 id="landing-header">Generations Humanitarian</h1>
    <div id="image-container">
      <img
        alt="Espinal Happy and Smiling Kids"
        src={LandingKids}
        id="kids-landing-image"
      />
    </div>
  </section>
);
