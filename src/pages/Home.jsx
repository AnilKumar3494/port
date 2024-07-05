import React from "react";
import NavBar from "../components/NavBar";
// import "./homeStyles.css";

const Home = () => {
  return (
    <>
          <NavBar/>

      <div className="background_image content_align">
        <section className="landing_page_content">
          <div className="intro_text">
            <h3>Hii!</h3>
            <h3>I'm Ghanath Vootukuru</h3>
            <p>
              Cybersecurity enthusiast with a knack for innovation and strategic
              solutions.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
