import React, { useState } from "react";
import "./Navbar.scss";
import Logo from "../../assets/icons/Logo.png";
import Menu from "../../assets/icons/menu.png";
import Close from "../../assets/icons/close.svg";
import { Fade } from "react-reveal";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [fadeShow, setFadeShow] = useState(false);

  const toggled = () => {
    // setFadeShow(!fadeShow)
    setToggleMenu(!toggleMenu)
  };

  const menu = () => {
    return (
      <Fade left opposite when={toggleMenu}>
        <div id="nav-menu">
          <div id="close-icon-cont">
            <img
              src={Close}
              onClick={() => toggled()}
              id="close-icon"
            />
          </div>
          <div className="menu-content">
            <a>About Us</a>
            <a>Homes & Projects</a>
            <a>Contact Us</a>
          </div>
        </div>
      </Fade>
    );
  };

  return (
    <>
      <nav id="main-nav">
        <div id="nav-logo-cont">
          <img src={Logo} id="nav-logo" />
        </div>
        <div id="nav-menu-cont">
          <img
            src={Menu}
            id="nav-dropdown"
            onClick={() => toggled()}
          />
        </div>
      </nav>
      { menu()}
    </>
  );
};

export default Navbar;
