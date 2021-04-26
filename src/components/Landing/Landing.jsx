import React from "react";
import { Fade } from "react-reveal";
import Carousel from "react-bootstrap/Carousel";
import "./Landing.scss";

import LandingKids from "../../assets/images/HeroCarousel/KidsLanding.jpg";
import UrosWomen from "../../assets/images/HeroCarousel/Uros-women.jpeg";
import PeruBoys from "../../assets/images/HeroCarousel/PeruBoys.png";

import ProvenPage from "./Proven/Proven";
import Success from "./Success/Success";
import Learn from "./Learn/Learn";
import Stages from "./Stages/Stages";
// import Footer from '../Footer/Footer';

const Landing = () => {
  return (
    <>
      <Fade>
        <section id='landing-page'>
        <HeroPage />
        </section>
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
  // <section id="landing-page">
  <Carousel fade indicators={false} controls={false}>
    <Carousel.Item>
      <div id="image-container">
        <Carousel.Caption id="carousel-text">
          <Fade left cascade duration={1500}>
            <h1 id="carousel-text-details">Generations</h1>
            <h1 id="carousel-text-details">Humanitarian</h1>
            <p>Example text goes here</p>
          </Fade>
        </Carousel.Caption>
        <img
          className=" kenburns-bottom-right"
          alt="Espinal Happy and Smiling Kids"
          src={LandingKids}
          id="kids-landing-image"
        />
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <div id="image-container">
        <Carousel.Caption id="carousel-text">
          <Fade left cascade duration={1500}>
            <h1 id="carousel-text-details">You have cared</h1>
            <p>Example text here</p>
          </Fade>
        </Carousel.Caption>
        <img
          className=" kenburns-bottom-right"
          alt="Espinal Happy and Smiling Kids"
          src={UrosWomen}
          id="kids-landing-image"
        />
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <div id="image-container">
        <Carousel.Caption id="carousel-text">
          <Fade left cascade duration={1500}>
            <h1 id="carousel-text-details">Individual</h1>
            <h1 id="carousel-text-details">Nurturing</h1>
          </Fade>
        </Carousel.Caption>
        <img
          className=" kenburns-bottom-right"
          alt="Espinal Happy and Smiling Kids"
          src={PeruBoys}
          id="kids-landing-image"
        />
      </div>
    </Carousel.Item>
  </Carousel>
  // </section>
);
