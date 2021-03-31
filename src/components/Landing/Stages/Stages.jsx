import React from "react";
import "./Stages.scss";

const Stages = () => {
  return (
    <section>
      <header id="stages-header">
        Three stages of Street Children Development
      </header>
      <section id="high-risk">
        <h3 className="risk-header">Children at High Risk</h3>
        <p className='risk-body'>(In Absolute Poverty)</p>
        <div className='risk-identity'>
        <h5>PRIMARY </h5>
        <h5>PREVENTION</h5>
        </div>
      </section>
    </section>
  );
};

export default Stages;
