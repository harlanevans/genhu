import React, { useState, } from "react";
import "./Stages.scss";
import { Fade } from "react-reveal";

import ChildOfStreet from "../../../assets/images/stages/childOfstreet.jpg";
import HighRiskChildren from "../../../assets/images/stages/HighRiskChildren.jpeg";
import ChildInStreet from "../../../assets/images/stages/ChildInStreet.png";

// APRIL 21 UPDATE
// ON HOVER OF BOXES, SWITCH TO IMAGES OF CHILDREN

const Stages = () => {
  const [hoverHighRisk, setHoverHighRisk] = useState(false);
  const [hoverInStreet, setHoverInStreet] = useState(false);
  const [hoverOfStreet, setHoverOfStreet] = useState(false);

  return (
    <section id="stages-section">
      <header id="stages-header">
        Three stages of Street Children Development
      </header>
      <section id="risk-box-row">
        <section
          id={hoverHighRisk ? "high-risk-flipped" : "high-risk"}
          onMouseEnter={() => setHoverHighRisk(true)}
          onMouseLeave={() => setHoverHighRisk(false)}
        >
          {" "}
          {hoverHighRisk ? (
            <Fade>
              <div id="child-img-cont">
                <img
                  src={HighRiskChildren}
                  id="high-risk-img"
                  className="child-img"
                  alt="high-risk children"
                />
              </div>
            </Fade>
          ) : (
            <Fade>
              <h3 id="risk-header">Children at High Risk</h3>
              <hr />
              <p className="risk-body">(In Absolute Poverty)</p>
              <div className="risk-identity">
                <h5 className="risk-identity">PRIMARY </h5>
                <h5 className="risk-identity">PREVENTION</h5>
              </div>
            </Fade>
          )}
        </section>
        <section
          id={hoverInStreet ? "in-street-flipped" : "in-street"}
          onMouseEnter={() => setHoverInStreet(true)}
          onMouseLeave={() => setHoverInStreet(false)}
          onClick={() => setHoverInStreet(true)}
        >
          {" "}
          {hoverInStreet ? (
            <Fade>
              <div id="child-img-cont">
                <img
                  src={ChildInStreet}
                  className="child-img"
                  alt="children-in-street"
                  id="child-in-street-img"
                />
              </div>
            </Fade>
          ) : (
            <Fade>
              <h3 id="risk-header">Children IN the Street</h3>
              <hr />
              <p className="risk-body">(Street Workers)</p>
              <div className="risk-identity">
                <h5 className="risk-identity">SECONDARY </h5>
                <h5 className="risk-identity">PREVENTION</h5>
              </div>
            </Fade>
          )}
        </section>
        <section
          id={hoverInStreet ? "of-street-flipped" : "of-street"}
          onMouseEnter={() => setHoverOfStreet(true)}
          onMouseLeave={() => setHoverOfStreet(false)}
        >
          {" "}
          {hoverOfStreet ? (
            <Fade>
              <div id="child-img-cont">
                <img
                  src={ChildOfStreet}
                  className="child-img"
                  alt="children-of-street"
                  id="child-of-street-img"
                />
              </div>
            </Fade>
          ) : (
            <Fade>
              <h3 id="risk-header">Children OF the Street</h3>
              <hr />
              <p className="risk-body">(Gamines / Displosables)</p>
              <div className="risk-identity">
                <h5 className="risk-identity">TERTIARY </h5>
                <h5 className="risk-identity">PREVENTION</h5>
              </div>
            </Fade>
          )}
        </section>
      </section>
      <section id="help-donate">
        <h3 className="help-header">
          Help support Generations Humanitarian and our Causes
        </h3>
        <a
          href="https://www.paypal.com/donate?hosted_button_id=CGXDNTCZ8N3C4"
          target="_blank"
          rel="noreferrer"
        >
          <button id="donate-button" className="horizontalOverlay">
            {" "}
            DONATE NOW
          </button>
        </a>
      </section>
    </section>
  );
};

export default Stages;
