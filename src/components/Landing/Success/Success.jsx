import React from "react";
import "./Success.scss";
import CountUp from "react-countup";
import { Fade } from "react-reveal";

const Success = () => {

  return (
    <section id="success-page">
      <header id="success-header">SUCCESS</header>
      <section id="success-subheader">
        <p className='padding'>Since 2008.</p>
        <p className='padding'>You have cared.</p>
        <p className='padding'>We did the math.</p>
      </section>
      <section id='number-flex'>
        <Fade cascade duration={3000} wait={1000}>
          <div className="number-cont">
            <h3 className="number-counter" id="current-children">
              <CountUp end={1368} duration={4} separator="," />
            </h3>
            <p className="number-label">Current Children</p>
          </div>
          <div className="number-cont">
            <h3 className="number-counter" id="meals-per-month">
              <CountUp end={11856} duration={4} separator="," />
            </h3>
            <p className="number-label">Meals Per Month</p>
          </div>
          <div className="number-cont">
            <h3 className="number-counter" id="meals-to-date">
              <CountUp end={929213} duration={4} separator="," />
            </h3>
            <p className="number-label">Meals To Date</p>
          </div>
          <div className="number-cont">
            <h3 className="number-counter" id="tons-of-donations">
              <CountUp start={0.0} end={18.53} duration={4} decimals={2} />
            </h3>
            <p className="number-label">Tons of Donations</p>
          </div>
          <div className="number-cont">
            <h3 className="number-counter" id="volunteer-hours">
              <CountUp end={130156} duration={4} separator="," />
            </h3>
            <p className="number-label">Volunteer Hours</p>
          </div>
          <div className="number-cont">
            <h3 className="number-counter" id="expedition-participants">
              <CountUp end={520} duration={4} />
            </h3>
            <p className="number-label">Expedition Participants</p>
          </div>
          <div className="number-cont">
            <h3 className="number-counter" id="value-time">
              $<CountUp end={3141966} duration={4} separator="," />
            </h3>
            <p className="number-label">Value of Volunteer Time</p>
          </div>
        </Fade>
      </section>
    </section>
  );
};

export default Success;
