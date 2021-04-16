import React from "react";
import "./AzulWasi.scss";
import GoogleMaps from "../GoogleMaps/GoogleMaps";
import Numbers from "../Numbers";
import Dorms from "../../../assets/images/homes/azulwasi/AWDorm.jpeg";
import Carmen from "../../../assets/images/homes/azulwasi/Carmen.jpeg";
import Coats from "../../../assets/images/homes/azulwasi/ChildrenCoats.jpeg";
import Smiling from "../../../assets/images/homes/azulwasi/ManAndChild.jpeg";
import { Link } from "react-router-dom";

const AzulWasi = () => {
  const location = {
    lat: -13.59,
    lng: -71.775,
  };

  return (
    <section id="azulwasi-main">
      <section id="azulwasi-cont">
        <div id="azulwasi-content">
          <header>
            <h1 id="azulwasi-header">Azul Wasi Home</h1>
          </header>
          <section id="azulwasi-sections">
            <h3 id="azulwasi-names">Alcides Jordan</h3>
            <p id="azulwasi-titles">
              <i>Director</i>
            </p>
          </section>
          <section id="azulwasi-sections">
            <h3 id="azulwasi-names">Ron Winterton, Barry Rudd</h3>
            <p id="azulwasi-titles">
              <i>Home Sponsor</i>
            </p>
          </section>
        </div>
        <section id="azulwasi-maps-cont">
          <GoogleMaps center={location} />
        </section>
      </section>
      <Numbers
        firstNumber={22}
        firstString={"Sheltered Children"}
        secondNumber={0}
        secondString={"Victims of Armed Conflict"}
        thirdNumber={100}
        thirdString={"Orphans"}
        lastNumber={3}
        lastString={"Regular Volunteers"}
      />
      <AboutAzulWasi />
      <div id="azulwasi-button-cont">
        <Link to="/homes&projects">
          <button id="azulwasi-button">More Homes</button>
        </Link>
      </div>
    </section>
  );
};

export default AzulWasi;

const AboutAzulWasi = () => (
  <section id="about-azulwasi">
    <header>
      <h3 id="azulwasi-names">About Azul Wasi Home</h3>
    </header>
    <p id="azulwasi-paragraphs">
      Just 22 kms south-east of Cusco, Azul Wasi sits on several acres of
      converted swamp land in the district of Oropesa, Peru. This home is
      founded by Alcides Jordan, a retired police officer. Azul means blue in
      Spanish and Wasi means house in Quechua, the native tongue of the Andean
      people. A few years ago, after rescuing one of the boys off the street,
      Alcides had the boy draw a picture of what his dream home would look like.
      The boy drew a blue house from dreams he had at night while living on the
      street. That house is now a reality.
    </p>
    <p id="azulwasi-paragraphs">
      Home to 17 boys and 3 girls, this home has a lot of room to grow. In 2012
      we built new bathrooms, 2016 we finished the two-story dormitory as shown
      below.
    </p>
    <div id="azulwasi-image-cont">
      <img id="azulwasi-images" src={Dorms} alt="azulwasi-dorms" />
    </div>
    <div id="azulwasi-image-cont">
      <img id="azulwasi-images" src={Coats} alt="azulwasi-coats" />
    </div>
    <p id="azulwasi-paragraphs">
      The photo at above shows a few of the boys with their new coats. Each year
      we buy them shoes for Christmas.
    </p>
    <p id="azulwasi-paragraphs">
      These boys are wards of the state, but Alcides serves as guardian ad
      litem. In some cases, they have no memory of their parents or home. We let
      them select a birthday, and most choose December 25, saying they want to
      share their birthday with the Christchild. Others choose July 28, Peruvian
      Independence Day. All the children attend school and do their chores.
      Tutors volunteer their time from European countries to help the children
      with their studies. A few of the children are just learning to read and
      write. Others are excelling. The boys have a good work ethic and we farm
      our greenhouse and some of the area around the home. We have room for more
      dormitories, and since there is a surplus of street children in the city,
      we won’t have trouble filling them up.
    </p>
    <div id='azulwasi-image-row'>
    <div id="azulwasi-image-cont">
      <img id="azulwasi-smaller-images" src={Smiling} alt="azulwasi-smiling" />
    </div>
    <div id="azulwasi-image-cont">
      <img id="azulwasi-smaller-images" src={Carmen} alt="azulwasi-carmen" />
    </div>
    </div>
    {/* <section style={{ padding: "2em 0em" }}>
    </section> */}
    <header>
      <h3 id="azulwasi-names">A list of the current children:</h3>
    </header>
    <section>
      <header>
        {" "}
        <h4 id="azulwasi-childname">Andys Omar</h4>
      </header>
      <p id="azulwasi-paragraphs">
        7 years old. He lost his mother, his father is somewhere in the jungle.
        The father abandoned Andys with an aunt when he was 2 years old. The boy
        was moved from house to house and abused. Due to his trauma he could not
        speak at first. Now he stutters and suffers from anxiety.
      </p>
    </section>
    <section>
      <header>
        {" "}
        <h4 id="azulwasi-childname">Carmen Rosa, Ana Rita, Dany, Wilmer</h4>
      </header>
      <p id="azulwasi-paragraphs">
        Carmen, Ana, Dany, and Wilmer. They are 10, 16, 12, and 17,
        respectively. These four children were found in the streets begging and
        sleeping in the street six years ago with their mother. They are from
        the Chumbivilcas province, eight hours by car and another 7 hours by
        horse. Their father died of an incurable illness and the mother is very
        poor. When we found them they had no money or clothes. Azul Wasi took
        the children in and they have recovered. They are responsible and
        studious and have the best grades in their school.
      </p>
    </section>
    <section>
      <header>
        {" "}
        <h4 id="azulwasi-childname">Alfred Pacco, Nilo Pacco, Yuliño Pacco</h4>
      </header>
      <p id="azulwasi-paragraphs">
        These three brothers are from the Pataqueña community. Their father died
        and the mother abandoned the children to the community. Thanks to the
        village authorities, they were brought to Azul Wasi and each child has
        his story.
      </p>
      <ul id="azulwasi-paragraphs">
        <li className="azulwasi-list">
          Alfredo. Ten years old and never learned to read. He could not speak
          Spanish, only Quechua. He suffered a severe burn of boiling water over
          his body. He was a shepherd to the family’s sheep.
        </li>
        <li className="azulwasi-list">
          Nilo. Twelve years old. He and his brother Yuliño witness the death of
          their father at a young age and felt helpless because their were no
          doctors in their community. He arrived at the home hating women
          because he only saw his father beat women and repeat that their only
          worth was to hit them. He has since changed during his stay at Azul
          Wasi, and now believes women are important in life, learning that a
          woman gave birth to him. His education level is retarded, especially
          in mathematics. He is now learning to read.
        </li>
        <li className="azulwasi-list">
          Yuliño. Now 14 years old, at a young age he became the man of the
          house when his father died and mother abandoned them. He is advancing
          in his education.
        </li>
      </ul>
    </section>
    <section>
      <header>
        {" "}
        <h4 id="azulwasi-childname">Redy</h4>
      </header>
      <p id="azulwasi-paragraphs">
        Redy is 16. His mother died when he was 2 years old and his father
        abandoned him. Redy was bitten by an insect in the jungle and was
        hospitalized. As a result of the bite, he has lost sight in his left eye
        (completely blind in left eye). He is in first grade now, learning to
        read and write.
      </p>
    </section>
    <section>
      <header>
        {" "}
        <h4 id="azulwasi-childname">Raul</h4>
      </header>
      <p id="azulwasi-paragraphs">
        Raul is 17. He lived in the street for a long time where he suffered a
        great deal of violence. The police brought him to Azul Wasi. According
        to his memory, his mother died and his father is alive but he doesn’t
        know where. Raul has learned to read and write (Raul at left with Camila
        and Willy the Lama).
      </p>
    </section>
    <section>
      <header>
        {" "}
        <h4 id="azulwasi-childname">Ivan</h4>
      </header>
      <p id="azulwasi-paragraphs">
        Ivan is 18. He was abandoned by his father and never knew his mother. He
        lived for a time with a grandmother but she was too poor to raise him.
        He is from Pisaq in the Sacred Valley. He is a senior in high school.
        Dante is 19. He lived in the street for some time. His father was an
        alcoholic and his mother too poor to feed him and abandoned him. He is
        doing well at Azul Wasi and is student body president at his school. He
        is among the first in his class academically, and now attends the
        University.
      </p>
    </section>
    <section>
      <header>
        {" "}
        <h4 id="azulwasi-childname">Hernan</h4>
      </header>
      <p id="azulwasi-paragraphs">
        Hernan is 18 and a senior in high school. His mother died and his father
        left the home and never returned, abandoning Hernan. He has lived in
        Azul Wasi more than 5 years. He only spoke Quechua and could not read or
        write, but now speaks Spanish well. He is the “School Police” for his
        high school.
      </p>
    </section>
    <section>
      <header>
        {" "}
        <h4 id="azulwasi-childname">Carlos</h4>
      </header>
      <p id="azulwasi-paragraphs">
        Carlos is 22 years old. He was abandoned by his parents when he was 6
        years old. He lived in different places, including the street, but has
        made Azul Wasi his home. He has no family he knows of. He graduated from
        high school and is currently serving as an Officer in the Peruvian
        Military. Carlos is also a character mentioned in Richard Paul Evans’
        New York Times bestselling book The Sunflower.
      </p>
    </section>
    <section>
      <header>
        {" "}
        <h4 id="azulwasi-childname">Bautista</h4>
      </header>
      <p id="azulwasi-paragraphs">
        Bautista is 23 years old. He is the oldest one at the home. He has no
        parents and does not like it when people ask if he has a family. He
        thinks a great deal about his future. He came to Azul Wasi 6 years ago
        from living in the street.
      </p>
    </section>
  </section>
);
