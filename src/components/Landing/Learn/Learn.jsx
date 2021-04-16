import React from 'react';
import './Learn.scss';

const Learn = () => {

  return (
    <section id='learn-section'>
      <h1 id='header-learn-more'>
      Learn More About Generations Humanitarian
      </h1>
      <article>
        <header className="learn-header">OUR MISSION</header>
        <hr style={{ width: "20%" }}></hr>
        <p className="learn-content">
          Generations Humanitarian is committed to transforming street children
          toward an abundance of health, hope, and loving homes—thereby breaking
          the cycle of scarcity for generations to come. This is done through
          broad research, novel development, strengthening nonprofit entities in
          development, and individual nurturing in a home environment.
        </p>
      </article>
      <article>
        <header className="learn-header">BECOME CONVERTED</header>
        <hr style={{ width: "20%" }}></hr>
        <p className="learn-content">
          Come with us to Peru or Colombia and know these children first hand.
          Strip away the materialism that surrounds us here in the USA and
          experience how these children view the world—their humility,
          authenticity, and love. Over time, those who have come on expeditions
          join this meaningful battle to save these kids and give them life.
          Most comment how happy it makes them. There are many worthy causes in
          the world today—arts, environment, animals, and public benefit—but no
          greater joy comes from loving our fellowman and serving the “least of
          these.”
        </p>
      </article>
    </section>
  );
}

export default Learn;