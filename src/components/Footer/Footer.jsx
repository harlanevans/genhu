import React from "react";
import "./Footer.scss";
import Facebook from '../../assets/icons/Facebook.svg'
import Instagram from '../../assets/icons/Instagram.svg'
import Twitter from '../../assets/icons/Twitter.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <Mission />
      <GetInvolved />
      <Legal />
      <Contact />
      <CopyRight />
    </footer>
  );
};

export default Footer;

const Mission = () => {
  return (
    <section className="footer-section">
      <header className="footer-headers">OUR MISSION</header>
      <p className="footer-body">
        Generations Humanitarian is committed to transform street children
        toward an abundance of health, hope, and loving homes—thereby breaking
        the cycle of scarcity for generations to come. This is done through
        broad research, novel development, strengthening nonprofit entities in
        development, and individual nurturing in a home environment.
      </p>
    </section>
  );
};

const GetInvolved = () => {
  return (
    <section className="footer-section">
      <header className="footer-headers">GET INVOLVED</header>
      <div className="footer-body">
        {/* NEED A TAGS FOR EACH OF THESE */}
        <p>Go on an expedition</p>
        <p>Gift levels:</p>
        <p>Support Sponsor: $50-100 monthly</p>
        <p>Research Sponsor: $250 monthly</p>
        <p>Development Sponsor: $500 monthly</p>
        <p>HomeNurturing Sponsor: $1500+ monthly</p>
        <p>Volunteer and Fundraise</p>
      </div>
    </section>
  );
};

const Legal = () => {
  return (
    <section className="footer-section">
      <header className="footer-headers">LEGAL STUFF</header>
      <div className="footer-body">
        <div>

        <Link to="/policy-and-financial">Policy and Financial</Link>
        </div>
        <div>
        <Link to='/privacy'>Privacy</Link>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="footer-section">
      <header className="footer-headers">CONTACT US</header>
      <section className="footer-body">
        <p>2607 Casto Lane,</p>
        <p>Salt Lake City, Utah 84117</p>
        <div>
          Phone: <a href="tel:+18018591033">+1 801-859-1033</a>
        </div>
        <div>
          Email: <a href="mailto:van@genhu.org">van@genhu.org</a>
        </div>
        <div>Website: www.genhu.org</div>
      </section>
      <section>
        <SocialMedia />
      </section>
    </section>
  );
};

const SocialMedia = () => {
  return (
    <section className="footer-section footer-body">
      <div className="social-icon-cont">
        <a
          href="https://www.facebook.com/genhu.org/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Facebook} id="footer-social-icon" alt="facebook-icon" />
          Facebook
        </a>
      </div>
      <div className="social-icon-cont">
        <a href="https://twitter.com/Genhu" target="_blank" rel="noreferrer">
          <img src={Twitter} id="footer-social-icon" alt="twitter-icon" />
          Twitter
        </a>
      </div>
      <div className="social-icon-cont">
        <a
          href="https://www.instagram.com/generationshumanitarian/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Instagram} id="footer-social-icon" alt="instagram-icon" />
          Instagram
        </a>
      </div>
    </section>
  );
};

const CopyRight = () => (
  <div id='copyright'>
    © 2021 Generations Humanitarian.
  </div>
)
