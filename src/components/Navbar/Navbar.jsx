import React, { useState } from "react";
import "./Navbar.scss";
import Logo from "../../assets/icons/GenHu-Full-Logo-1024x217.png";
import Menu from "../../assets/icons/menu.png";
import Close from "../../assets/icons/close.svg";
import { Fade } from "react-reveal";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggledHomes, setToggledHomes] = useState(false);
  // const [fadeShow, setFadeShow] = useState(false);

  const toggled = () => {
    // setFadeShow(!fadeShow)
    setToggleMenu(!toggleMenu);
    setToggleMenu(!toggleMenu);
  };

  const toggleHomes = () => {
    // setToggleMenu(!toggleMenu);
    setToggledHomes(!toggledHomes);
  };

  const clickHome = () => {
    setToggleMenu(false);
    setToggledHomes(false);
  };

  const menu = () => {
    return (
      <Fade>
        {toggledHomes ? (
          homes()
        ) : (
          <div id="nav-menu">
            <div className="menu-content">
              <NavLink
                to="/about"
                id="nav-link"
                className="borderLeftRight"
                onClick={() => toggled()}
              >
                About Us
              </NavLink>
              <NavLink
                to="/our-staff"
                id="nav-link"
                className="borderLeftRight"
                onClick={() => toggled()}
              >
                Our Staff
              </NavLink>
              <div
                // to="/homes&projects"
                className="borderLeftRight homes-projects-div"
                id="nav-link"
                onClick={() => toggleHomes()}
              >
                Homes & Projects
              </div>
              <NavLink
                to="/contact"
                id="nav-link"
                className="borderLeftRight"
                onClick={() => toggled()}
              >
                Contact Us
              </NavLink>
            </div>
          </div>
        )}
      </Fade>
    );
  };

  const homes = () => {
    return (
      <div id="nav-menu">
        <div className="menu-content">
          <div
            id="nav-link-homes"
            className="borderLeftRight"
            onClick={() => toggleHomes()}
          >
            Back
          </div>

          <NavLink
            to="/homes&projects/azulwasi"
            id="nav-link-homes"
            className="borderLeftRight"
            onClick={() => clickHome()}
          >
            Azul Wasi
          </NavLink>
          <NavLink
            to="/homes&projects/espinal"
            id="nav-link-homes"
            className="borderLeftRight"
            onClick={() => clickHome()}
          >
            Espinal
          </NavLink>
          <NavLink
            to="/homes&projects/melgar"
            id="nav-link-homes"
            className="borderLeftRight"
            onClick={() => clickHome()}
          >
            Melgar
          </NavLink>
          <NavLink
            to="/homes&projects/laguajira"
            id="nav-link-homes"
            className="borderLeftRight"
            onClick={() => clickHome()}
          >
            La Guajira
          </NavLink>
          <NavLink
            to="/homes&projects/medellin"
            id="nav-link-homes"
            className="borderLeftRight"
            onClick={() => clickHome()}
          >
            Medellin
          </NavLink>
          <NavLink
            to="/homes&projects/cucuta"
            id="nav-link-homes"
            className="borderLeftRight"
            onClick={() => clickHome()}
          >
            Cucuta
          </NavLink>
          <NavLink
            to="/homes&projects/sanfelipe"
            id="nav-link-homes"
            className="borderLeftRight"
            onClick={() => clickHome()}
          >
            San Felipe
          </NavLink>
          <NavLink
            to="/homes&projects/ibague/sanjose"
            id="nav-link-homes"
            className="borderLeftRight"
            onClick={() => clickHome()}
          >
            Ibague-San Jose
          </NavLink>
          <NavLink
            to="/homes&projects"
            id="nav-link-homes"
            className="borderLeftRight"
            onClick={() => clickHome()}
          >
            Map
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <>
      <nav id="main-nav">
        <div id="nav-logo-cont">
          <Link to="/">
            <img src={Logo} id="nav-logo" alt="genhu-logo" onClick={() => toggleMenu && setToggleMenu(false)} />
          </Link>
        </div>
        <div id="nav-menu-cont">
          <img
            src={toggleMenu ? Close : Menu}
            id="nav-dropdown"
            onClick={() => toggledHomes ? clickHome() : toggled()}
            alt="menu-button"
          />
        </div>
      </nav>
      {toggleMenu && menu()}
      {/* {toggledHomes && homes()} */}
    </>
  );
};

export default Navbar;
