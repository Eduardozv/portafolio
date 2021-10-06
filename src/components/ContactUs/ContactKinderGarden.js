import React from "react";
import ContactFormKinderGarden from "./ContactFormKinderGarden";
import texts from "../../data/Home/home-text.json";

const ContactKinderGarden = () => (
  <section className="contact-us" style={{ paddingBottom: '0px'}}>
    <div className="container">
      <div className="row section-heading">
        <h1
        data-aos-delay={300}
        data-aos={"fade-right"}
        data-aos-duration={700} 
        className="title-font">
          Contáctanos
        </h1>
        <br />
        <br />
        <br />
        <br />
        {texts.contactTxt1.map( (t, index) => 
          <p key={index}  className="content-font" style={{ fontSize: '15px', }} >{t}</p>
        )}
        {/* <br />
        <br />
        <br />
        <div className="col-md-8">
          <ContactFormKinderGarden />
        </div>
        <div className="col-md-4">
          <h3 className="grey-lady-color" >Ubicación</h3>
          <address>
            {texts.address}
            <br />
            {texts.district}
            <br />
          </address>
          <h3 className="grey-lady-color" >Contacto</h3>
            <a href={"tel:"+texts.countryCode+texts.phone}>{"Tel: "+texts.countryCode+" "+texts.phone}</a>
            <br />
            <a href="mailto:miennielanndie@gmail.com">{texts.email}</a>
            <br />
            <a href={"tel:"+texts.countryCode+texts.cel}>{"Cel: "+texts.countryCode+" "+texts.cel}</a>
            <br />
            <br />
        </div> */}
      </div>
    </div>
  </section>
);

export default ContactKinderGarden;
