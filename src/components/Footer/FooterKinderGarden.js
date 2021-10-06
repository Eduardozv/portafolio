import React from "react";
import logoFooter from "../../assets/images/logo-white.png";
import texts from "../../data/Home/home-text.json"

const FooterKinderGarden = () => (
  <>
    <footer className="footer" id="footer-fixed">
      <div className="footer-main">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-4">
              <div className="widget widget-text">
                <div className="logo logo-footer">
                  <a href={`${process.env.PUBLIC_URL}/`}>
                    <img
                      className="logo logo-display"
                      src={logoFooter}
                      alt=""
                    />
                  </a>
                </div>
                <p>
                {texts.paragraph1[1]}
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-2">
              <div className="widget widget-links">
                
              </div>
            </div>
            <div className="col-sm-6 col-md-2">
              {/* <div className="widget widget-links">
                <h5 className="widget-title">Link útiles</h5>
                <ul>
                  <li>
                    <a href={process.env.PUBLIC_URL}>Sobre Nosostros</a>
                  </li>
                  <li>
                    <a href={process.env.PUBLIC_URL}>Contáctanos</a>
                  </li>
                  <li>
                    <a href={process.env.PUBLIC_URL}>Actividades</a>
                  </li>
                  <li>
                    <a href={process.env.PUBLIC_URL}>Postulaciones</a>
                  </li>
                  <li>
                    <a href={process.env.PUBLIC_URL}>Inscripciones</a>
                  </li>
                </ul>
              </div> */}
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="widget widget-text widget-links">
                <h5 className="widget-title">Contáctanos</h5>
                <ul>
                  <li>
                    <i className="icofont">
                      <img
                        className="contact-icon"
                        src={require("../../assets/images/icon-location.png")}
                        alt=""
                      />
                    </i>
                    <a href={"https://goo.gl/maps/DAbXrso7FmjVBJUB8"}>
                      {texts.address+", "+texts.district}
                    </a>
                  </li>
                  <li>
                  <i className="icofont">
                      <img
                        className="contact-icon"
                        src={require("../../assets/images/icon-phone.png")}
                        alt=""
                      />
                    </i>
                    <a href={"tel:"+texts.countryCode+texts.phone}>{texts.countryCode+" "+texts.phone}</a>
                  </li>
                  {/* <li>
                    <i className="icofont icofont-mail"></i>
                    <a href={"mailto:"+texts.email+"?subject=[Información]"}>
                      {texts.email}
                    </a>
                  </li> */}
                  <li>
                    <i className="icofont">
                      <img
                        className="contact-icon"
                        src={require("../../assets/images/icon-whatsapp.png")}
                        alt=""
                      />
                    </i>         
                    <a href={"cel:"+texts.countryCode+texts.cel}>{texts.countryCode+" "+texts.cel}</a>
                  </li>
                  <li>
                    <p>
                      {texts.qualification}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p style={{ fontSize: '12px', textAlign: 'center', color: 'white' }} >Todos los derechos reservados © "Miennie Lanndie" 2021</p>
      </div>
    </footer>
    <div className="footer-height" style={{ height: "370px" }}></div>
  </>
);

export default FooterKinderGarden;
