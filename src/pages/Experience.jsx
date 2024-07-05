import React from "react";
import NavBar from "../components/NavBar";
import BgImg from "../components/BgImg";
import Container from "../components/Container";
import QuickLinks from "../components/QuickLinks.jsx";

const Experience = () => {
  const input = [
    {
      id: "1",
      jobTitle: "Analyst",
      company: "Mastercard Cybersecurity Virtual Experience Program",
      duration: "Feb 2024",
      description:
        "Completed a job simulation as an analyst on Mastercard’s Security Awareness Team, identifying and reporting security threats.",
      details: [
        "Helped identify and report security threats such as phishing.",
        "Analyzed and identified areas of the business needing more robust security training.",
        "Implemented training courses and procedures for those teams.",
      ],
    },
    {
      id: "2",
      jobTitle: "Product Manager",
      company: "WIDER (Startup E-commerce Platform)",
      location: "Bangalore, India |",
      duration: "Apr 2021 - Jul 2022",
      description:
        "Shaped the strategic direction of the e-commerce platform, prioritizing user experience and market alignment. Managed the product lifecycle from conception to launch, ensuring alignment with business goals.",
      details: [
        "Led cross-functional teams spanning marketing, web development, and vendor relations, fostering collaboration and innovation.",
        "Established strategic partnerships with key vendors, enhancing the product catalogue and managing on-site engagements for improved visual appeal and accuracy.",
        "Integrated advanced features like real-time messaging plugins and 360-degree product views, enhancing customer experience and setting industry standards.",
        "Adapted effectively to a hybrid work model, contributing to the company’s transition to an online business advisory service, showcasing strategic agility.",
      ],
    },
  ];

  return (
    <BgImg>
      <NavBar />

      <section className="container">
        <div className="container_content">
          <h2 className="h2">My Experiences</h2>
          {/* <img src="" alt="A sample project image would be here" /> */}
          <Container input={input} />
        </div>
      </section>

      <QuickLinks />
    </BgImg>
  );
};

export default Experience;
