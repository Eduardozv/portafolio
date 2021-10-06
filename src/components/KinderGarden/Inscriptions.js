import React from 'react';
import texts from '../../data/Home/home-text.json';

const renderBulletList = (list) => (
  <ul>
      {list.map( t => 
          <li data-aos-delay={300}
              data-aos={"fade-up"}
              data-aos-duration={700}
              className="content-font mt-30"
              style={{ fontSize: '15px' }} >
              {t}
          </li>
      )}
  </ul>
);

const Inscriptions = () => (
    <section className="first-ico-box" style={{ paddingBottom: '0px'}} id="about">
      <div className="container">
          <div className="row">
              <div className={"col-sm-8 section-heading"} >
                <h1
                  className="title-font"
                  style={{ color: "blue"}}
                  data-aos-delay={300}
                  data-aos={"fade-right"}
                  data-aos-duration={700}
                >
                  Inscripciones
                </h1>
                <br />
                <br />
                <br />
                <div className="row">
                  {texts.inscriptionTxt1.map( (t, index) => 
                    <p key={index}  className="content-font text-center" style={{ fontSize: '15px'}} >{t}</p>
                  )}
                </div>
              </div>
          </div>
      </div>
  </section>
);

export default Inscriptions;