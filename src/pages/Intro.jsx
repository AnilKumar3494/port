/* eslint-disable no-unused-vars */
// Intro.js
import React from "react";
import NavBar from "../components/NavBar";
import Container from "../components/Container";

import "../components/container.css";
import "../styles/globalStyles.css";
import BgImg from "../components/BgImg";
import QuickLinks from "../components/QuickLinks.jsx";

const Intro = () => {
  const input = [
    {
      id: "1",
      inputPara:
        "Hello everyone! I'm Ghanath Vootukuru, a dedicated cybersecurity professional with a passion for safeguarding digital environments. With a Master's degree in Cybersecurity from Drexel University and a robust set of skills honed through rigorous training and real-world experience, I bring a proactive approach to identifying and mitigating cyber threats. My background is anchored in risk assessment, vulnerability analysis, and incident response, and I'm well-versed in industry standards such as NIST, HIPAA, and CCPA.",
    },
    {
      id: "2",
      inputPara:
        "In my previous role as a Product Manager at WIDER, a startup e-commerce platform, I led the strategic direction and product lifecycle management, ensuring that every launch aligned with our business goals. I thrived in a cross-functional environment, collaborating with marketing, web development, and vendor relations teams to drive innovation and enhance user experience. One of my proudest achievements was integrating advanced features like real-time messaging plugins and 360-degree product views, which set new industry standards and significantly improved customer satisfaction.",
    },
    {
      id: "3",
      inputPara:
        "Beyond my professional experience, I have engaged in various academic projects that underscore my technical expertise and strategic thinking. For instance, during a digital forensics project, I conducted an in-depth analysis of hashing algorithms and utilized tools like Nmap and CrackStation to evaluate security vulnerabilities. My practical experience is further complemented by certifications such as CompTIA Security+ and AWS Certified Cloud Practitioner, which have solidified my knowledge in areas crucial to cybersecurity.",
    },
    {
      id: "4",
      inputPara:
        "My academic pursuits at Drexel University have equipped me with comprehensive insights into data analysis, software engineering, and cloud computing, all with a strong emphasis on security. At Presidency University, I delved into big data analysis and secure software project management, laying a solid foundation for my technical skills. These experiences, coupled with hands-on projects and extracurricular activities like the Mastercard Cybersecurity virtual experience program, have prepared me to tackle the most pressing cybersecurity challenges head-on.",
    },
    {
      id: "3",
      inputPara:
        "Thank you for considering my profile. I'm excited about the opportunity to contribute my skills and expertise to your team, driving forward your cybersecurity initiatives with innovation and diligence.",
    },
  ];
  console.log("hi from intro")
  return (
    <BgImg>
      <NavBar />

      <section className="container">
        <div className="container_content">
          <h2 className="h2">About Me</h2>
          {/* <img src="" alt="A sample image would be here" /> */}
          <Container input={input} />
        </div>
      </section>

      <QuickLinks />
    </BgImg>
  );
};

export default Intro;
