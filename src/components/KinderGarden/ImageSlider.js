import React from "react";
import Slider from "react-slick";
import dataSlider from "../../data/Home/image-slider-data.json";
import texts from "../../data/Home/home-text.json";

const ImageSlider = () => {
  const settings = {
    autoplay: true,
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "owl-carousel blog-slider",
    responsive: [
      {
        breakpoint: 901,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section>
      <div className="container">
        <div className="row">
          {texts.paragraph1.slice(0, 3).map( (t, index) => 
            <p key={index} className="content-font text-center" >{t}</p>
          )}
        </div>
        <div className="row mt-50">
          <div className="col-md-12 remove-padding">
            <Slider {...settings}>
              {dataSlider.map((img) => (
                <div className="post" key={img.id}>
                  <div className="post-img">
                    <img
                      className="img-fluid"
                      src={require("../../assets/images/carousel/" + img.url)}
                      alt=""
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="row">
          {texts.paragraph2.map( (t, index) => 
            <p key={index} className="content-font text-center" >{t}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
