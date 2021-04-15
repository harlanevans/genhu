import React from 'react';
import './Contact.scss'

const Contact = () => {

  return (
    <section style={{ paddingTop: "6em" }}>
      <header>
        <h1>Contact Us</h1>
      </header>
      <section className="contact-body">
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
    </section>
  );
}

export default Contact;