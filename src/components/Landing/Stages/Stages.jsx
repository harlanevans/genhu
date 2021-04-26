import React, { useState } from "react";
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
              <img
                src={HighRiskChildren}
                id="high-risk-image"
                alt="high-risk children"
              />
            </Fade>
          ) : (
            <Fade>
              <h3 className="risk-header">Children at High Risk</h3>
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
        >
          {" "}
          {hoverInStreet ? (
            <Fade>
              <img
                src={ChildInStreet}
                id="high-risk-image"
                alt="children-in-street"
              />
            </Fade>
          ) : (
            <Fade>
              <h3 className="risk-header">Children IN the Street</h3>
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
              <img
                src={ChildOfStreet}
                id="high-risk-image"
                alt="children-of-street"
              />
            </Fade>
          ) : (
            <Fade>
              <h3 className="risk-header">Children OF the Street</h3>
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
          href="https://www.paypal.com/donate?token=U_lEMXfFylKthsBV3RGR3PyHDYclXfD8JoFz_9AXkCpd9qvlyBxoI81jdfSr-cKufXQEh_kbWpJPBgsl"
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
