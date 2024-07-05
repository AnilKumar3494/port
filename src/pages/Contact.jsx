import React from "react";
import NavBar from "../components/NavBar";
import BgImg from "../components/BgImg";
import QuickLinks from "../components/QuickLinks.jsx";
import ContactForm from "../components/ContactForm.jsx";

const Contact = () => {
  return (
    <BgImg>
      <NavBar />

      <section className="container">
        <div className="container_content">
          <h2 className="h2">Contact</h2>
          <p>
            Got questions about cybersecurity? I'm a fresh face eager to learn
            and help! Drop me a line, and let's explore the world of firewalls,
            hacks, and making the web safer together!
          </p>
          <ContactForm />
        </div>
      </section>

      <QuickLinks />
    </BgImg>
  );
};

export default Contact;
