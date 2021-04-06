import React from "react";
import "./Footer.scss";

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

        <a>Policy and Financial</a>
        </div>
        <div>
        <a>Privacy</a>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="footer-section">
      <header className="footer-headers">CONTACT US</header>
      <div className="footer-body">
        <p>2607 Casto Lane,</p>
        <p>Salt Lake City, Utah 84117</p>
        <div>
          Phone: <a>+1 801-859-1033</a>
        </div>
        <div>
          Email: <a>van@genhu.org</a>
        </div>
        <div>Website: www.genhu.org</div>
      </div>
      <section>
        <SocialMedia />
      </section>
    </section>
  );
};

const SocialMedia = () => {
  return (
    <section className="footer-section footer-body">
      <div >
        <img />
        Facebook
      </div>
      <div>
        <img />
        Twitter
      </div>
      <div>
        <img />
        Instagram
      </div>
    </section>
  );
};

const CopyRight = () => (
  <div id='copyright'>
    © 2021 Generations Humanitarian.
  </div>
)
