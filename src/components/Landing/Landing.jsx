import React from 'react';
import "./Landing.scss"
import LandingKids from '../../assets/images/KidsLanding.jpg';

import ProvenPage from './Proven/Proven';

const Landing = () => {
  
  return (
    <>
    <section id='landing-page'>
      <h1 id='landing-header'>
        Generations Humanitarian
        </h1>
      <div id='image-container'>
        <img alt='Espinal Happy and Smiling Kids' src={ LandingKids} id='kids-landing-image'/>
      </div>
      </section>
      <section>

      <ProvenPage />
    </section>
    </>
  )
}

export default Landing;