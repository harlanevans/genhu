import React, { useState } from "react";
import "./Navbar.scss";
import Logo from "../../assets/icons/Logo.png";
import Menu from "../../assets/icons/menu.png";
import Close from "../../assets/icons/close.svg";
import { Fade } from "react-reveal";
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  // const [fadeShow, setFadeShow] = useState(false);

  const toggled = () => {
    // setFadeShow(!fadeShow)
    setToggleMenu(!toggleMenu)
  };

  const menu = () => {
    return (
      <Fade left>
        <div id="nav-menu">
          <div id="close-icon-cont">
            <img
              src={Close}
              onClick={() => toggled()}
              id="close-icon"
              alt='close-icon'
            />
          </div>
          <div className="menu-content">
            <NavLink to='/about' id='nav-link' onClick={() => toggled()}>About Us</NavLink>
            <NavLink to='/our-staff' id='nav-link' onClick={() => toggled()}>Our Staff</NavLink>
            {/* <a>Homes & Projects</a>
            <a>Contact Us</a> */}
          </div>
        </div>
      </Fade>
    );
  };

  return (
    <>
      <nav id="main-nav">
        <div id="nav-logo-cont">
          <Link to='/'>
          <img src={Logo} id="nav-logo" alt='genhu-logo'/>
          </Link>
        </div>
        <div id="nav-menu-cont">
          <img
            src={Menu}
            id="nav-dropdown"
            onClick={() => toggled()}
            alt="menu-button"
          />
        </div>
      </nav>
      { toggleMenu && menu()}
    </>
  );
};

export default Navbar;
