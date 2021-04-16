import React from "react";
import './About.scss';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <section id='about-main'>
      <header id="about-headers">
        <h2>About Us</h2>
      </header>
      <section id="about-section">
        <p id="about-p">
          Genhu is a team of loving, charitable, educated, and dedicated men and
          women who care about changing the lives of others. Some volunteer
          their time, others are paid.
        </p>
        <div id="about-button-cont">
          <NavLink to="/our-staff">
            <button id="about-staff-btn">Our Staff</button>
          </NavLink>
        </div>
      </section>
      <section id="about-section">
        <header id="about-headers">VISION</header>
        <p id="about-p">
          Generations Humanitarian envisions a world without street children.
        </p>
      </section>
      <section id="about-section">
        <header id="about-headers">MISSION</header>
        <p id="about-p">
          Generations Humanitarian is committed to transform street children
          toward an abundance of health, hope, and loving homes—thereby breaking
          the cycle of scarcity for generations to come. This is done through
          broad research, novel development, strengthening nonprofit entities in
          development, and individual nurturing in a home environment.
        </p>
      </section>
      <section id="about-section">
        <header id="about-headers">MANDATES</header>
        <p id="about-p">
          We are mandated by regulatory agencies of the U.S. to create public
          value and insure the common good is advanced. We will comply with
          accounting and regulatory requirements. As we develop our alliances
          with government agencies and other actors in the field, we are aware
          that some mandates may be set forth.
        </p>
      </section>
      <section id="about-section">
        <header id="about-headers">BELIEFS</header>
          <ul id="about-list">
        <p id="about-p">
            <li id="about-li">
              We believe all children should grow up in a home with goodly,
              loving parents who provide for their physical, emotional, and
              spiritual needs.
            </li>
            <li id="about-li">
              We believe that street children are resilient and given
              opportunities and love, they can transform their own lives and
              become productive adults and rear happy families.
            </li>
            <li id="about-li">
              We believe in being subject to the sovereign power of the nations
              wherein we work and respect their political philosophies and forms
              of government.
            </li>
            <li id="about-li">
              We believe we have the right, however, to advocate for street
              children in any adversarial context provided we do so within the
              legal system of those countries and with its own citizens.
            </li>
            <li id="about-li">
              We believe that rigorous research helps bridge the gap between
              theory and praxis, especially in the field (foreign nations where
              we house children).
            </li>
            <li id="about-li">
              Latin American countries are Christian nations without a strong
              custom of separation of church and state. We hold a holistic
              ideology and believe spirituality is a necessary part of one’s
              wellbeing. We are faith-based to the extent that we share the
              belief in Christian ideals and promote them to the children. Other
              than professing a belief in Jesus Christ and his teachings, we do
              not permit our mission to coerce street children toward any
              religious institution, thereby respecting their right to
              self-determination.
            </li>
        </p>
          </ul>
      </section>
      <section id="about-section">
        <header id="about-headers">VALUES</header>
        <p id="about-p">
          Genhu does not participate in “turf wars” and we don’t view the world
          through the lens of scarcity. We are abundance minded. We strive to
          be:
        </p>
          <ul id="about-list">
            <li id="about-li">Loving</li>
            <li id="about-li">Culturally Sensitive</li>
            <li id="about-li">Collaborative</li>
            <li id="about-li">Accountable</li>
            <li id="about-li">Open and Transparent</li>
          </ul>
      </section>
    </section>
  );
};

export default About;
