import React from "react";
import "./Footer.scss";
import Facebook from "../../assets/icons/Facebook.svg";
import Instagram from "../../assets/icons/Instagram.svg";
import Twitter from "../../assets/icons/Twitter.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <section id="main-footer-row">
        <Mission />
        <GetInvolved />
        <Legal />
        <Contact />
      </section>
      <CopyRight />
    </footer>
  );
};

export default Footer;

const Mission = () => {
  return (
    <section className="footer-section">
      <header id="footer-headers">OUR MISSION</header>
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
      <header id="footer-headers">GET INVOLVED</header>
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
      <header id="footer-headers">LEGAL STUFF</header>
      <div className="footer-body">
        <div>
          <Link to="/policy-and-financial">Policy and Financial</Link>
        </div>
        <div>
          <Link to="/privacy">Privacy</Link>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="footer-section">
      <header id="footer-headers">CONTACT US</header>
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
      <form action="https://www.paypal.com/donate" method="post" target="_top" style={{paddingTop: '.5em'}}>
        <input type="hidden" name="hosted_button_id" value="CGXDNTCZ8N3C4" />
        <input
          type="image"
          src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
          border="0"
          name="submit"
          title="PayPal - The safer, easier way to pay online!"
          alt="Donate with PayPal button"
        />
        <img
          alt=""
          border="0"
          src="https://www.paypal.com/en_US/i/scr/pixel.gif"
          width="1"
          height="1"
        />
      </form>
    </section>
  );
};

const SocialMedia = () => {
  return (
    <section className="icon-footer-section footer-body">
      <div className="social-icon-cont">
        <a
          href="https://www.facebook.com/genhu.org/"
          target="_blank"
          rel="noreferrer"
          id="a-cont"
        >
          <img src={Facebook} id="footer-social-icon" alt="facebook-icon" />
          Facebook
        </a>
      </div>
      <div className="social-icon-cont">
        <a
          href="https://twitter.com/Genhu"
          target="_blank"
          rel="noreferrer"
          id="a-cont"
        >
          <img src={Twitter} id="footer-social-icon" alt="twitter-icon" />
          Twitter
        </a>
      </div>
      <div className="social-icon-cont">
        <a
          href="https://www.instagram.com/generationshumanitarian/"
          target="_blank"
          rel="noreferrer"
          id="a-cont"
        >
          <img src={Instagram} id="footer-social-icon" alt="instagram-icon" />
        Instagram
        </a>
      </div>
    </section>
  );
};

const CopyRight = () => (
  <div id="copyright">© 2021 Generations Humanitarian.</div>
);
