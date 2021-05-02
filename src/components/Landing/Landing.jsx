import React from "react";
import { Fade, Zoom } from "react-reveal";
import Carousel from "react-bootstrap/Carousel";
import "./Landing.scss";

import LandingKids from "../../assets/images/HeroCarousel/KidsLanding.jpg";
import UrosWomen from "../../assets/images/HeroCarousel/Uros-women.jpeg";
import StarvingBoy from "../../assets/images/HeroCarousel/StarvingBoy.jpg";
import MenSeeds from "../../assets/images/HeroCarousel/MenSeeds.jpg";
import Refugees from "../../assets/images/HeroCarousel/Refugees.jpg";
import WomenConference from "../../assets/images/HeroCarousel/Womensconference.jpg";

import ProvenPage from "./Proven/Proven";
import Success from "./Success/Success";
import Learn from "./Learn/Learn";
import Stages from "./Stages/Stages";
// import Footer from '../Footer/Footer';

const Landing = () => {
  return (
    <>
      <Fade>
        <section id="landing-page">
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
  <Carousel fade indicators controls>
    <Carousel.Item>
      <div id="image-container">
        <Carousel.Caption id="carousel-text">
          <Fade duration={2000}>
            <h1 id="carousel-larger-text">Generations</h1>
            <h1 id="carousel-larger-text">Humanitarian</h1>
            <br />
            <p id="carousel-smaller-text">
              Transforming street children toward an abundance of health, hope,
              and loving homes— thereby breaking the cycle of scarcity for
              generations to come.{" "}
            </p>
          </Fade>
        </Carousel.Caption>
        <img
          className="kenburns-bottom-right"
          alt="Espinal Happy and Smiling Kids"
          src={LandingKids}
          id="kids-landing-image"
        />
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <div id="image-container">
        <Carousel.Caption id="carousel-text">
          <Fade duration={2000}>
            <h1 id="carousel-larger-text">La Guajira, Colombia</h1>
            {/* <h1 id="carousel-larger-text">Nurturing</h1> */}
            <br />
            <p id="carousel-smaller-text">
              Some 70 children starved to death last year in this region. We are
              now feeding a whole school and digging a well to provide local
              water.{" "}
            </p>
          </Fade>
        </Carousel.Caption>
        <img
          className=" kenburns-bottom-right"
          alt="Starving boy"
          src={StarvingBoy}
          id="kids-landing-image"
        />
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <div id="image-container">
        <Carousel.Caption id="carousel-text">
          <Fade duration={2000}>
            <h1 id="carousel-larger-text">
              Women's Conference in Ibague, Colombia
            </h1>
            <p id="carousel-smaller-text">
              More than 600 women attended. Women who are ex-guerrilla soldiers,
              in the witness protection program, and internally displaced.{" "}
            </p>
          </Fade>
        </Carousel.Caption>
        <img
          className=" kenburns-bottom-right"
          alt="womens conference in Colombia"
          src={WomenConference}
          id="kids-landing-image"
        />
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <div id="image-container">
        <Carousel.Caption id="carousel-text">
          <Fade duration={2000}>
            <h1 id="carousel-larger-text">Venezuelan Refugees</h1>
            <p id="carousel-smaller-text">
              Little girls just across the border into Cucuta, Colombia, with no
              place to go. We feed 430 refugee children.{" "}
            </p>
          </Fade>
        </Carousel.Caption>
        <img
          className=" kenburns-bottom-right"
          alt="little girl refugees"
          src={Refugees}
          id="kids-landing-image"
        />
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <div id="image-container">
        <Carousel.Caption id="carousel-text">
          <Fade duration={2000}>
            <h1 id="carousel-larger-text">
              Join us on a humanitarian expedition to Peru in 2022
            </h1>
          </Fade>
        </Carousel.Caption>
        <img
          className=" kenburns-bottom-right"
          alt="uros women - join an expedition"
          src={UrosWomen}
          id="kids-landing-image"
        />
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <div id="image-container">
        <Carousel.Caption id="carousel-text">
          <Fade duration={2000}>
            <h1 id="carousel-larger-text">
              Self-sustaining greenhouses for our orphanages
            </h1>
          </Fade>
        </Carousel.Caption>
        <img
          className=" kenburns-bottom-right"
          alt="men holding seeds for greenhouse"
          src={MenSeeds}
          id="kids-landing-image"
        />
      </div>
    </Carousel.Item>
  </Carousel>
  // </section>
);
