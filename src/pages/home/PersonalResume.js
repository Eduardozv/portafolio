import React, { useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../assets/css/ide-portfolio.css";
import Loader from "./../../components/Loader/Loader";
import useBodyClass from "../../helpers/useBodyClass";
import HeaderFour from "../../components/Header/HeaderFour";
import HeroSliderOne from "../../components/Hero/HeroSliderOne";
import WhoWeAreFour from "../../components/WhoWeAre/WhoWeAreFour";
import Resume from "../../components/Resume/Resume";
import FooterTwo from "../../components/Footer/FooterTwo";
import IdeWork from "../../components/Portfolio/IdeWork";

const PersonalResume = () => {
  useBodyClass(["wrap-nav-sidebar", "ide-theme-active"]);
  const home = useRef();
  const about = useRef();
  const portfolio = useRef();
  const resume = useRef();

  const scrollToSection = (e, content) => {
    e.preventDefault();
    switch (content) {
      case "home":
        home.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "about":
        about.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "portfolio":
        portfolio.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "resume":
        resume.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
    }
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Loader>
      <div className="ide-portfolio">
        <HeaderFour scrollToSection={scrollToSection} />
        <HeroSliderOne ref={home} scrollToSection={scrollToSection} />
        <WhoWeAreFour ref={about} />
        <IdeWork ref={portfolio} />
        <Resume ref={resume} />
        <FooterTwo />
      </div>
    </Loader>
  );
};

export default PersonalResume;
