import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "../../components/Loader/Loader";
import dataMainTitle from "../../data/Home/main-title-data.json";
import HeaderKinderGarden from "../../components/Header/HeaderKinderGarden";
import HeaderOne from "../../components/Header/HeaderOne";
import ImageSlider from "../../components/KinderGarden/ImageSlider";
import TopMainTitle from "../../components/KinderGarden/TopMainTitle";
import ContactKinderGarden from "../../components/ContactUs/ContactKinderGarden";
import FooterKinderGarden from "../../components/Footer/FooterKinderGarden";
import Actividades from "../../components/KinderGarden/AnimatedText";
import ListaActiviades from "../../components/KinderGarden/AnimatedColumns";
import Welcome from "../../components/WelcomeSection/Welcome";
import texts from "../../data/Home/home-text.json";
import AnimatedColumns from "../../components/KinderGarden/AnimatedColumns";
import Requirements from "../../components/KinderGarden/Requirements";
import Inscriptions from "../../components/KinderGarden/Inscriptions";
import InscriptionForm from "../../components/ContactUs/InscriptionForm";
import RequestJobForm from "../../components/ContactUs/RequestJobForm";

const KinderGarden = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (

  <Loader>
    <HeaderKinderGarden social="2" />
    <TopMainTitle data={dataMainTitle} />
    <ImageSlider />
    <Actividades title="Actividades" tagline="¡Todo es perfecto para ellos!">
      {texts.activitiesTxt1.map( (t, index) => 
        <p key={index} className="content-font" style={{ fontSize: '15px' }} >{t}</p>
      )}
    </Actividades>
    <Requirements />
    <Inscriptions />
    <InscriptionForm />
    <RequestJobForm />
    <ContactKinderGarden />
      {/* <section className="pt-0 pb-0 map-section">
        <Map classAppend="wide" />
      </section> */}
    
    <FooterKinderGarden />
  </Loader>
  )
};

export default KinderGarden;
