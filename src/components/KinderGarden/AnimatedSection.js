import React from "react";

const AnimatedSection = ({ title, tagline, classAppend, font, children }) => {
  return (
    <div
      className={"col-sm-8 section-heading " + (classAppend ? classAppend : "")}
    >
      <h1
        className="title-font"
        data-aos-delay={100}
        data-aos={"fade-up"}
        data-aos-duration={700}
        style={{ color: "rgb(78	172	91)"}}
      >
        {title}
      </h1>
      {tagline && (
        <h4
          className={"text-uppercase " + (font ? font : "")}
          data-aos-delay={200}
          data-aos={"fade-up"}
          data-aos-duration={700}
        >
          {`- ${tagline} -`}
        </h4>
      )}
      {children ? (
        <p
          data-aos-delay={300}
          data-aos={"fade-up"}
          data-aos-duration={700}
          className="content-font mt-30" style={{ fontSize: '15px' }}
        >
          {children}
        </p>
      ) : null}
    </div>
  );
};

export default AnimatedSection;
