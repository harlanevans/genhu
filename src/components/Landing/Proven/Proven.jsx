import React from "react";
// import { Player } from "video-react";
import "./Proven.scss";
// import "../../../../node_modules/video-react/dist/video-react.css";

const Proven = () => {
  return (
    <>
      <section id="proven-page">
        <div id="proven-video-cont">
          <h1 id="proven-headers">Venezuela Refugee Crisis</h1>
          <p id="kids-explained">
            About 5000 people per day flee Venezuela, many crossing the
            Colombian border at Cúcuta. A total of 5.4 million Venezuelans have
            left the country since 2014. These figures are comparable to the
            Syrian refugee crisis, yet the news all but ignores this. Watch this
            video we produced regarding the crisis for children.
          </p>
          {/* <Player>
            <source src={Video} />
          </Player> */}
          <iframe
            width="800"
            height="534"
            src="https://www.youtube.com/embed/8s6A73H98DA"
            title="Venezuela Refugee Crisis"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        {/* <hgroup id="proven-headers-cont">
          <h1 id="proven-headers">Proven Souls.</h1>
          {""}
          <h1 id="proven-headers">Proven Results.</h1>
        </hgroup>
        <article>
          <p id="kids-explained">
            Our oldest aged-out kids have flourished off the streets. They are
            productive members of Peruvian, Bolivian, and Colombian society.
            Follow them in their lives. Enjoy payback days from your gifts.
          </p>
        </article>
        <button id="proven-button">DISCOVER MORE</button> */}
      </section>
    </>
  );
};

export default Proven;
