import React from "react";
import logoWhite from "../assets/images/logo-white.png";
import logoBlack from "../assets/images/logo-black.png";

const imgStyle = { width: "40vh"}

const MainLogo = ({ collapse, showMenu }) => {
  return (
    <div className="navbar-header">
      <div className="logo">
        <a href={process.env.PUBLIC_URL}>
          <img className="logo logo-display" style={imgStyle} src={logoWhite} alt="" />
          <img className="logo logo-scrolled" style={imgStyle} src={logoWhite} alt="" />
        </a>
      </div>
    </div>
  );
};

export default MainLogo;
