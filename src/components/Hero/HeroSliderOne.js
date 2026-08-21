import React, { forwardRef } from "react";
import TextLoop from "react-text-loop";
import bgImg from "../../assets/images/background/personal_resume_background.png";
import Canvas from "../../elements/Canvas";

const HeroSliderOne = forwardRef((props, ref) => {

    const tags = ["Software Engineer", "Full-Stack Developer"];

  return (
    <section className="pt-0 pb-0" id="home" ref={ref}>
      <div className="full-screen-bg">
        <div
          className="parallax-img"
          style={{ background: `url(${bgImg})` }}
        ></div>
        <Canvas />
        <div className="hero-text-wrap">
          <div className="hero-text white-color">
            <div className="container text-center">
              <h1 className="white-color font-700">Eduardo García</h1>
              <div className="animate-caption">
                <h2 className="white-color mt-30">
                  <TextLoop mask={true}>
                      {tags.map((tag, i) => (
                          <span key={i}>{tag}</span>
                      ))}
                  </TextLoop>
                </h2>
              </div>
              <p className="text-center hero-buttons">
                <a href="#work" className="btn-hero-primary">View Work</a>
                <a href="mailto:eduardouozv@gmail.com" className="btn-hero-secondary">Get in Touch</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default HeroSliderOne;
