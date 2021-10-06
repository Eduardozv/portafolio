import React from 'react';
import texts from '../../data/Home/home-text.json';

const renderBulletList = (list) => (
  <ul>
      {list.map( (t, index) => 
          <li key={index} data-aos-delay={300}
              data-aos={"fade-up"}
              data-aos-duration={700}
              className="content-font mt-30"
              style={{ fontSize: '15px' }} >
              {t}
          </li>
      )}
  </ul>
);

const Requirements = () => (
    <section className="first-ico-box" style={{ paddingBottom: '0px'}} id="about">
      <div className="container">
          <div className="row">
              <div className={"col-sm-8 section-heading"} >
                <h1
                  className="title-font"
                  style={{ color: "rgb(255 112 112)"}}
                  data-aos-delay={100}
                  data-aos={"fade-up"}
                  data-aos-duration={700}
                >
                  Requisitos
                </h1>
                <div className="row" style={{ textAlign: 'left', marginLeft: '30px'}}>
                    {renderBulletList(texts.requirements)}
                </div>
              </div>
          </div>
      </div>
  </section>
);

export default Requirements;