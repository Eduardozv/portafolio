import React, { forwardRef } from "react";
import HeadingTwo from "../HeadingSection/HeadingTwo";
import OurSkillsOne from "../OurSkills/OurSkillsOne";
import CounterFour from "../Counters/CounterFour";

const WhoWeAreFour = forwardRef((props, ref) => (
  <section className="main-section" id="about" ref={ref}>
    <div className="container">
      <div className="row">
        <HeadingTwo
          title="About Me"
          text="This is Eduardo a Software Engineer and Full Stack Developer
        Based on Montevideo, Uruguay.
        I design and develop custom solutions for businesses, covering frontend, backend, and database layers. 
        Specialized in turning ideas into functional, scalable, and production-ready products. Let's work together!"
        ></HeadingTwo>
      </div>
      {/* <div className="row mt-50">
        <div className="col-md-6 resume-bar">
          <OurSkillsOne />
        </div>
        <div className="col-md-6">
          <div className="row">
            <CounterFour />
          </div>
        </div>
      </div> */}
    </div>
  </section>
));

export default WhoWeAreFour;
