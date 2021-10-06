import React, { useState, useEffect, useCallback } from "react";
import Icofont from "react-icofont";
import DropdownMenu from "../Navs/DropdownMenu";
import SearchOverlay from "../../elements/SearchOverlay";
import AttributeNav from "../Navs/AttributeNav";
import SocialNav from "../Navs/SocialNav";
import MainLogo from "../MainLogo";
import ReactWhatsapp from 'react-whatsapp';
import SocialItem from "../../elements/SocialItem";

const HeaderKinderGarden = ({ type, social }) => {
  const [show, setShow] = useState(false);
  const [fixed, setFixed] = useState(false);
  const [collapse, setCollapse] = useState(false);

  const showMenu = () => {
    setCollapse(!collapse);
    const menu = document.getElementById("navbar-menu");
    collapse ? menu.classList.remove("in") : menu.classList.add("in");
  };

  const handleScroll = useCallback(() => {
    if (window.pageYOffset > 34) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  }, []);

  const resizeForm = useCallback(() => {
    var wHeight = window.innerHeight;
    const searchForm = document.getElementById("fullscreen-searchform");
    searchForm.style.top = wHeight / 2 + "px";
  }, []);

  const showSearchForm = (e) => {
    e.preventDefault();
    setShow(true);
    resizeForm();
  };

  const hideSearchForm = (e) => {
    e.preventDefault();
    setShow(false);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeForm);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", resizeForm);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [resizeForm, handleScroll]);

  return (
    <>
      <nav
        className={
          "navbar navbar-expand-lg navbar-light navbar-fixed white bootsnav on no-full grey-lady-bg " +
          (fixed || type === "white" ? "" : "navbar-transparent")
        }
      >
        <SearchOverlay show={show} onClick={hideSearchForm} />
        <div className="container">
          {/* <button
            type="button"
            className={"navbar-toggler " + (collapse ? "collapsed" : "")}
            data-toggle="dropdown"
            data-target="#navbar-menu"
            onClick={showMenu}
          >
            <Icofont icon="navigation-menu" />
          </button> */}
          <MainLogo showMenu={showMenu} />
          <DropdownMenu />
          <AttributeNav>
            <ul className="social-media-dark social-top">
              {/* <SocialItem link="!$" icon="whatsapp" /> */}
              <ReactWhatsapp number="1-212-736-5000" message="Hola" element={SocialItem} />
              

            </ul>
          </AttributeNav>
        </div>
      </nav>
    </>
  );
};

export default HeaderKinderGarden;
