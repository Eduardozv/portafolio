import React from "react";
import Swiper from "react-id-swiper";

import 'swiper/swiper-bundle.css';
import imgAprende from "../../assets/images/homePage/aprende.png";
import imgBrilla from "../../assets/images/homePage/brilla.png";
import imgCrece from "../../assets/images/homePage/crece.png";
import imgResplandece from "../../assets/images/homePage/resplandece.png";
import texts from "../../data/Home/home-text.json";

const Slogan = ({ color, txt}) => (
  <span className="subtitle-font-size fontSnellRoundhand" style={{ color: color }}>
  {txt}
  </span>
);

const TopMainTitle = ({ data }) => {
  const params = {
    loop: false,
  };

  return (
    <section className="pt-0 pb-0">
      <div className="slider-bg flexslider">
        <ul className="slides">
          <Swiper {...params}>
            {data.map((slide) => (
              <li key={slide.id}>
                <div
                  className="slide-img"
                  style={{
                    background: `url(${
                      require("../../assets/images/" + slide.image)
                    }) center center / cover scroll no-repeat`,
                  }}
                ></div> 
                <p style={{ position: 'absolute', right: 20, bottom: 20, color: "rgb(226,243,149)" }}>{texts.qualification}</p>
                <div
                  className={
                    "hero-text-wrap " + (slide.bg ? "gradient-overlay-bg" : "")
                  }
                >
                  <div className="hero-text">
                    <div className="container text-center">
                      <h3 className="font29LTAzer" style={{ fontFamily: '29LTAzer', color: "rgb(136,136,136)" }}>
                        {slide.tagline ? slide.tagline : ""}
                      </h3>
                      <h2 className="fontSnellRoundhand" style={{ color: 'white' }}>
                        {slide.title}
                      </h2>
                      {/*                       
                      {slide.circleImage.length !== 0 ? ( slide.circleImage.map((image) => (
                        <img src={"../../../assets/images/homePage/"+image} className="rounded-circle" alt="img-1" />
                      )) ) : (
                        ""
                      )} */}
                      
                      <Slogan txt="aprende" color="red" />
                      <span>,&nbsp;&nbsp;</span>
                      <Slogan txt="brilla" color="blue" />
                      <span>,&nbsp;&nbsp;</span>
                      <Slogan txt="crece" color="green" />
                      <span>,&nbsp;&nbsp;</span>
                      <Slogan txt="resplandece" color="yellow" />
                      <p/>
                      <img src={imgAprende} className="rounded-circle resize-image-round" alt="img-1" />
                      <img src={imgBrilla} className="rounded-circle resize-image-round" alt="img-1" />
                      <img src={imgCrece} className="rounded-circle resize-image-round" alt="img-1" />
                      <img src={imgResplandece} className="rounded-circle resize-image-round" alt="img-1" />
                      <h3 className="subtitle-font-size fontSnellRoundhand" style={{ color: "white", marginLeft: '40vw'}}>
                        {slide.phrase ? slide.phrase : ""}
                      </h3>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </Swiper>
        </ul>
      </div>
    </section>
  );
};

export default TopMainTitle;
