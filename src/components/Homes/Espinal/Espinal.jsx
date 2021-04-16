import React from "react";
import "./Espinal.scss";
import GoogleMaps from "../GoogleMaps/GoogleMaps";
import Numbers from "../Numbers";
import { Link } from "react-router-dom";

const Espinal = () => {
  const location = {
    lat: -13.59,
    lng: -71.775,
  };

  return (
    <section id="espinal-main">
      <section id="espinal-cont">
        <div id="espinal-content">
          <header>
            <h1 id="espinal-header">Espinal Drop-In Center</h1>
          </header>
          <section id="espinal-sections">
            <h3 id="espinal-names">Rosario Vasquez</h3>
            <p id="espinal-titles">
              <i>Director</i>
            </p>
          </section>
          <section id="espinal-sections">
            <h3 id="espinal-names">General Funds</h3>
            <p id="espinal-titles">
              <i>Center Sponsor</i>
            </p>
          </section>
        </div>
        <section id="espinal-maps-cont">
          <GoogleMaps center={location} />
        </section>
      </section>
      <Numbers
        firstNumber={100}
        firstString={"Sheltered Children"}
        secondNumber={50}
        secondString={"Victims of Armed Conflict"}
        thirdNumber={80}
        thirdString={"Orphans"}
        lastNumber={10}
        lastString={"Regular Volunteers"}
      />
      <AboutEspinal />
      <div id="espinal-button-cont">
        <Link to="/homes&projects">
          <button id="espinal-button">More Homes</button>
        </Link>
      </div>
    </section>
  );
};

export default Espinal;

const AboutEspinal = () => (
  <section id="about-espinal">
    <header>
      <h3 id="espinal-names">About Espinal Drop-In Center</h3>
    </header>
    <p id="espinal-paragraphs">
      Two and a half hours west of Bogota, Espinal is a town of agriculture,
      mostly cotton, rice, and mangos. It is also home to thousands of
      internally displaced people from the armed conflict. Founded in 2007, the
      Espinal Drop-In Center is a collaboration with the Mayor’s Office of
      Espinal. The Alcaldia (mayor) provides the home, which we remodeled to
      accommodate the large numbers of children.
    </p>
    <p id="espinal-paragraphs">
      A drop-in center is a place of refuge where children can “drop in” for a
      meal, clothes, a shower, medical attention, psychological attention, help
      with homework, cultural enhancement, and friendship. Our children love to
      spend hours at the center, either before and after school. They often have
      no other comfortable or safe place to go. But children do not sleep at the
      drop in center. They have a guardian that they live with. For example, one
      girl slept on the floor of a restaurant’s kitchen and was cared for by her
      grandmother who was also homeless. These children range from 3 years to 16
      years of age. Children may not show up at random. They must qualify to
      come to the center. We have four criteria:
    </p>
    <p id="espinal-paragraphs">
      <ol id="espinal-numbers">
        <li>
          They have 1 or 0 parents. This is the United Nations’ criterion for an
          orphan.
        </li>
        <li>Ours is the only real meal they will eat each day.</li>
        <li>
          They either sleep on the floor or have a dirt floor in their home.
        </li>
        <li>They do not attend school.</li>
      </ol>
    </p>
    <p id="espinal-paragraphs">
      If children meet 3 of the 4 criteria, we register them. This means we put
      them in school (including matriculation fees, shoes, and uniform), put
      clothes on their back, give them a snack in the morning before school, a
      full lunch after school, and other services as needed. We often give them
      second helpings, if we know they won’t have any dinner that night. We
      currently have 61 children at this center, the numbers fluctuate with
      funding and transient nature of some of the families. We have a waiting
      list of more than 150 children as of January 2017.
    </p>
    <p id="espinal-paragraphs">
      These children are always in need of clothing. We only take new underwear
      and socks. 60 percent of the children are girls ages 3-13. Espinal is a
      very hot climate, and they do not need coats or blankets. They do need
      shoes, however, as nearly 25 percent of the children do not have shoes.
      Their feet get diseased and infected and cut. While the children do not
      suffer from the cold, they are more susceptible to tropical diseases.
    </p>
    <p id="espinal-paragraphs">
      Here is one example of what you can do to help: A few years back, a group
      of church women made dresses for the girls. You can see the pure joy on
      this little girl’s face for owning a dress for the first time in her life.
    </p>
    <header>Costs</header>
    <p id="espinal-paragraphs">
      It costs us approximately $37 USD per month to care for a child at our
      drop-in center. The majority of the cost is food. A Home Sponsor who gives
      $1000 per month will care for approximately 30 children. We need at least
      two more home sponsors to reach capacity for this home.
    </p>
    <header>Our Loving Staff and Volunteers</header>
    <p id="espinal-paragraphs">
      The Espinal home is run mostly by a volunteer staff. Only home director
      Sandra (4th from the right), the night guard, and the cook are paid
      employees. The staff, shown below are professional, loving women with
      decades of combined social work and business administration experience.
    </p>
    <header>Model Drop-In Centers</header>
    <p id="espinal-paragraphs">
      Our goal is to establish a simple step-by-step model that can be
      duplicated by the relatively unsophisticated thereby enabling a franchise
      of hundreds of homes in the years to come in an affordable manner. For our
      purposes, we generally use the terms “homes” and “drop-in centers”
      synonymously, although we may have some homes or farms that work as
      full-time orphanages.
    </p>
    <p id="espinal-paragraphs">
      We hold the minimum standards for parenting to be:
    </p>
    <p id="espinal-paragraphs">
      <ol id="espinal-numbers">
        <li>Physical security</li>
        <li>Minimum amount of love and nurturing</li>
        <li>Role modeling for children</li>
        <li>
          Negotiate the system on behalf of the children (Dentist,
          Parent-Teacher conference)
        </li>
      </ol>
    </p>
    <p id="espinal-paragraphs">
      We believe that if street children are given these, even minimally, they
      can transform their lives. Our blueprint for Model Drop-In Centers (MDICs)
      provides for children to drop in and receive the deficits of these
      standards on a consistent basis. It will be home to them before and after
      school, rather than the streets. Model drop-in centers provide the
      following that corresponds to the standards above:
    </p>
    <p id="espinal-paragraphs">
      <ol id="espinal-numbers">
        <li>
          Food, shelter, clothing, hygiene needs, medical attention, and safety.
        </li>
        <li>
          Loving and nurturing staff, volunteers, interns, and mental health
          professionals.
        </li>
        <li>High standards of conduct, discipline, and education.</li>
        <li>
          Negotiate medical, educational, legal and guardianship issues on
          behalf of the children.
        </li>
      </ol>
    </p>
  </section>
);
