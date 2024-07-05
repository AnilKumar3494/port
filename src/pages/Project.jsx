import React from "react";
import NavBar from "../components/NavBar";
import Container from "../components/Container";
import BgImg from "../components/BgImg";
import QuickLinks from "../components/QuickLinks.jsx";

const projectsInput = [
  {
    id: 1,
    projectTitle: "Digital Forensics Project",
    duration: "May 2023 - Sept 2023",
    description:
      "Conducted an in-depth analysis of hashing algorithms including MD5, SHA1, and SHA256 as part of an Information Forensics course project.",
    details: [
      "Demonstrated understanding of the importance of hash values in digital forensics for data integrity verification and tampering detection.",
      "Explored the role of hashes in the CIA Triad, emphasizing their contribution to data integrity within cybersecurity frameworks.",
      "Utilized tools like Nmap and CrackStation to perform hash cracking experiments, evaluating the security vulnerabilities of different hashing algorithms.",
      "Collaborated with team members to simulate real-world forensic scenarios and present findings on the significance of secure hashing algorithms in preserving digital evidence integrity.",
    ],
    demo: "#url",
  },
  {
    id: 2,
    projectTitle: "TCP Traffic Analysis Using TCPDump",
    duration: "Aug 2023",
    description:
      "Completed a guided project focusing on utilizing tcpdump, a versatile Linux networking utility, for capturing and analyzing TCP traffic.",
    details: [
      "Developed proficiency in capturing network data and performing traffic analysis using tcpdump.",
      "Utilized shell scripting basics to create custom scripts for capturing and analyzing traffic data.",
      "Implemented advanced filtering techniques using tcpdump expressions to refine traffic analysis results.",
    ],
    demo: "#url",
    code: "#github url",
  },
  {
    id: 3,
    projectTitle: "Federal Information Security Management Training Initiative",
    duration: "Jun 2023-Aug 2023",
    description:
      "Led a comprehensive cybersecurity training project in collaboration with Computer Commandos Inc. (CCI) for the Department of Homeland Security (DHS).",
    details: [
      "Developed and presented an executive summary highlighting the significance of proactive cybersecurity measures in safeguarding DHS infrastructure against evolving threats.",
      "Conducted risk assessments, identified potential risks, and devised mitigation strategies to fortify information security.",
      "Explored fundamental cybersecurity concepts including access control, cryptography, firewall technologies, intrusion detection/prevention systems, and physical security considerations.",
      "Implemented security project plans emphasizing risk-based approaches, Security Development Lifecycle (SDL), and adherence to compliance frameworks.",
      "Delivered real-world case studies demonstrating the practical application of theoretical concepts in strengthening organizational resilience.",
    ],
    demo: "#url",
    code: "#github url",
  },
  {
    id: 4,
    projectTitle: "Microsoft Windows Defender & Firewall",
    duration: "May 2023 - Aug 2023",
    description:
      "Completed the guided lab on Microsoft Windows Defender and Firewall for Beginners.",
    details: [
      "Successfully reviewed and updated threat definitions, executed Defender Antivirus quick scans, and configured Firewall Rules with and without Advanced Security.",
      "Expanded cybersecurity skills through the Introduction to Cybersecurity Essentials course, gaining valuable skills for entering the field.",
    ],
    demo: "#url",
    code: "#github url",
  },
  {
    id: 5,
    projectTitle: "Spotted Lanternfly Egg Detection System",
    duration: "Sep 2022 - May 2023",
    description:
      "Ensured the project met quality standards and specifications by overseeing the implementation and testing processes.",
    details: [
      "Maintained effective communication between the hardware and software teams, collaborating closely to achieve project goals.",
      "Oversaw the testing of edge detection techniques to identify and classify blobs as potential egg masses.",
      "Documented the design process and findings to provide a comprehensive overview of the project's development.",
      "Played a key role in tracking the project's timeline and tasks.",
    ],
    demo: "#url",
    code: "#github url",
  },
  {
    id: 6,
    projectTitle: "IoT Project: Heart Rate Detection using Skin Cells",
    duration: "Jun 2021 - Feb 2022",
    description:
      "Collaborated with a team to develop an innovative heart rate detection system using skin cells in the field of IoT.",
    details: [
      "Designed and implemented a sensor-based solution to detect heart rate through changes in skin conductivity.",
      "Demonstrated the project's functionality by inducing nervousness in a participant and accurately measuring their heart rate.",
      "Recognized as one of the top 10 projects in the class, highlighting the project's innovation and effectiveness.",
      "Assisted in project management tasks, including defining scope, coordinating team activities, and ensuring adherence to timelines.",
    ],
    demo: "#url",
    code: "#github url",
  },
];

const Project = () => {
  return (
    <BgImg>
      <NavBar />

      <section className="container">
        <div className="container_content">
          <h2 className="h2">Projects</h2>
          {/* <img
              src={projectsBg}
              alt="A sample project image would be here"
              className="banner_img"
            /> */}
          <Container input={projectsInput} />
        </div>
      </section>

      <QuickLinks />
    </BgImg>
  );
};

export default Project;
