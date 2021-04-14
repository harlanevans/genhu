import React from "react";
import "./Numbers.scss";
import CountUp from "react-countup";
import { Fade } from "react-reveal";

const Numbers = (props) => {
  return (
    <section id="numbers-purp-cont">
      <Fade cascade duration={3000} wait={1000}>
        <div id="numbers-grouping">
          <h3 id="numbers-heading">
            <CountUp end={props.firstNumber} duration={2} separator="," />

            {/* {props.firstNumber} */}
          </h3>
          <p id="numbers-string">{props.firstString}</p>
        </div>
        <div id="numbers-grouping">
          <h3 id="numbers-heading">
            <CountUp end={props.secondNumber} duration={2} separator="," />%
          </h3>
          <p id="numbers-string">{props.secondString}</p>
        </div>
        <div id="numbers-grouping">
          <h3 id="numbers-heading">
            {" "}
            <CountUp end={props.thirdNumber} duration={2} separator="," />%
          </h3>
          <p id="numbers-string">{props.thirdString}</p>
        </div>
        <div id="numbers-grouping">
          <h3 id="numbers-heading">
            {" "}
            <CountUp end={props.lastNumber} duration={2} separator="," />
          </h3>
          <p id="numbers-string">{props.lastString}</p>
        </div>
      </Fade>
    </section>
  );
};

export default Numbers;
