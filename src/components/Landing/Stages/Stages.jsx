import React from "react";
import "./Stages.scss";

const Stages = () => {
  return (
    <section id="stages-section">
      <header id="stages-header">
        Three stages of Street Children Development
      </header>
      <section id="risk-box-row">
        <section id="high-risk">
          <h3 className="risk-header">Children at High Risk</h3>
          <p className="risk-body">(In Absolute Poverty)</p>
          <div className="risk-identity">
            <h5>PRIMARY </h5>
            <h5>PREVENTION</h5>
          </div>
        </section>
        <section id="in-street">
          <h3 className="risk-header">Children IN the Street</h3>
          <p className="risk-body">(Street Workers)</p>
          <div className="risk-identity">
            <h5>SECONDARY </h5>
            <h5>PREVENTION</h5>
          </div>
        </section>
        <section id="of-street">
          <h3 className="risk-header">Children OF the Street</h3>
          <p className="risk-body">(Gamines / Displosables)</p>
          <div className="risk-identity">
            <h5>TERTIARY </h5>
            <h5>PREVENTION</h5>
          </div>
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
          <button id="donate-button"> DONATE NOW</button>
        </a>
      </section>
    </section>
  );
};

export default Stages;
