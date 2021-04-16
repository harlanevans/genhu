import React from "react";
import "./Greenhouse.scss";
import { Link } from "react-router-dom";
import MainGreenhouse from "../../../assets/images/homes/greenhouse/MainGreenhouse.jpg";
import JaimePlants from "../../../assets/images/homes/greenhouse/JaimePlants.jpg";
import ModelBluePrint from "../../../assets/images/homes/greenhouse/Blueprint.png";
import ModelBirdsEye from "../../../assets/images/homes/greenhouse/BirdsEye.png";
import Construction from "../../../assets/images/homes/greenhouse/Construction.jpg";
import Farm from "../../../assets/images/homes/greenhouse/Farm.jpg";
import GreenhousePic from "../../../assets/images/homes/greenhouse/Greenhouse.jpg";
import Veggies from "../../../assets/images/homes/greenhouse/Veggies.jpg";

const Greenhouse = () => {
  return (
    <section id='greenhouse-main'>
      <header>
        <h1 id='greenhouse-header'>Greenhouse and Hydroponics</h1>
      </header>
      <section id="greenhouse-sections">
        <div id='greenhouse-image-cont'>
        <img src={MainGreenhouse} id="greenhouse-images" alt="greenhouse" />
        </div>
        <p id="greenhouse-paragraphs">
          The harsh conditions of altitude and cold in the Andean range prohibit
          the growth of certain vegetables and fruits. These are grown in warmer
          climates and shipped to Andean cities. We proposed to streamline this
          process by producing self-sustaining, scalable, water-efficient,
          organic greenhouses.
        </p>
      </section>
      <section id="greenhouse-sections">
        <header>Serving Two Purposes</header>
        <p id="greenhouse-paragraphs">
          We have two types of greenhouses, each for a specific production
          purpose:
          <ul>
            <li id='greenhouse-list'>
              Greenhouse for production for consumption of the orphanage (IPCO
              in Spanish) that uses an area of 100 m², the frame is of tubes of
              metal soldier and for their construction requires a roll of
              plastic agrofilm. In this greenhouse we can grow from 15 to 20
              different vegetables, legums, spices, medicinal plants, and
              condiments to be used by the kitchen of the orphanage. The
              children at the orphange each have duties in planting, weeding,
              and caring for the plants. They also reap the benefits of the
              harvest. This model teaches the children to connect with the
              Earth, improve ancient farming techniques still used by peasants,
              develop a work ethic, and eat fresh foods they helped to grow.
            </li>
            <li id='greenhouse-list'>
              Greenhouse for agribusiness production (IPA in Spanish), is a
              greenhouse of 240 m² of area, of welded metal and uses 2 rolls of
              plastic agrofilm. In this greenhouse we can cultivate one or two
              cash crops that will be sold in the local market to generate
              profit to the orphanage. In the past we have grown strawberries
              and sold them to hotels in Cusco. This year we are selling Big
              Beef Tomatoes and Cherry Tomatoes. These fetch a high price in the
              tourist industry in the Peruvian Andes.
            </li>
          </ul>
        </p>
        <div id='greenhouse-image-cont'>
        <img src={JaimePlants} alt="jaime" id="greenhouse-images-jaime" />
        </div>
      </section>
      <section id="greenhouse-sections">
        <header>Construction Models</header>
        <p id="greenhouse-paragraphs">
          In addition to model design for production, we also have designs for
          climate optimization.
          <ul>
            <li id="greenhouse-list">
              Generations humanitarian constructs two models of greenhouses:
              First, those that are adapted to the Andean climate of high
              altitude, cold nights. Later when we have perfected this model and
              have produce successfully to market, we will begin to work in
              greenhouses modified for the coast and the jungle that have
              temperate and warm climates.
            </li>
            <li id="greenhouse-list">
              Our greenhouses are constructed of welded metal frame covered with
              200 micron thick plastic agrofilm containing various additives
              that counteract the UV rays, prevent fungus/mold, and for
              elasticity.
            </li>
            <div id='greenhouse-blueprint-img-cont'>
            <img src={ModelBluePrint} alt="blueprint" id="greenhouse-images-blue-print" />
            <img src={ModelBirdsEye} alt="diagram" id="greenhouse-images-blue-print" />
            </div>

            <li id="greenhouse-list">
              Both greenhouses are the same width, but vary in length.
            </li>
            <li id="greenhouse-list">
              Both greenhouses are calculated to optimize the plastic and the
              area of land permitting.
            </li>
            <li id="greenhouse-list">
              We use a natural homemade fertilizer and pesticide called “Biol”
              to increase production and ensure a healthy crop.
            </li>
          </ul>
          The cost of building a greenhouse is $6,000 USD. In three harvests we
          can break even on construction costs. Since these can operate year
          round, they can become self-sustaining in under two years. We are
          looking for sponsors who will donate the construction costs and first
          planting. Contact{" "}
          <a id="greenhouse-link" href="mailto:van@genhu.org">
            van@genhu.org
          </a>{" "}
          {""}
          or make a donation.
        </p>
      </section>
      <p id="greenhouse-paragraphs">
        We currently have greenhouses in our Anta and Azul Wasi homes as well as
        Ccor-Ccor.
      </p>
      <hr />
      <section id='greenhouse-image-cont'>
        <img src={Construction} alt="construction" id="greenhouse-images" />
      </section>
      <section id='greenhouse-image-cont'>
        <img src={GreenhousePic} alt="greenhouse" id="greenhouse-images" />
      </section>
      <hr />
      <section id='greenhouse-image-cont'>
        <img src={Farm} alt="farm" id="greenhouse-images" />
      </section>
      <section id='greenhouse-image-cont'>
        <img src={Veggies} alt="veggies" id="greenhouse-images" />
      </section>
      <div id="greenhouse-button-cont">
        <Link to="/homes&projects">
          <button id="greenhouse-button">More Homes</button>
        </Link>
      </div>
    </section>
  );
};

export default Greenhouse;
