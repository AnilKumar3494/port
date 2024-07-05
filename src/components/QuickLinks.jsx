import React from "react";

//icons
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { IoDocumentAttach } from "react-icons/io5";

//styles
import "./quickLinksStyles.css";

const QuickLinks = ({ className }) => {
  const icons = [
    {
      id: 1,
      link: "https://www.linkedin.com/in/ghanath",
      iconComponent: <FaLinkedin />,
      title: "LinkedIn",
    },
    {
      id: 2,
      link: "ghanath999@gmail.com",
      iconComponent: <MdEmail />,
      title: "E-Mail",
    },
    {
      id: 3,
      link: "https://github.com/Ghanath",
      iconComponent: <FaGithub />,
      title: "GitHub",
    },
    {
      id: 4,
      link: "https://www.linkedin.com/feed/",
      iconComponent: <IoDocumentAttach />,
      title: "Resume",
    },
  ];

  return (
    <div className={`icon_grid ${className}`}>
      {icons.map((icon) => (
        <a
          key={icon.id}
          href={icon.link}
          className="icon_link"
          target="_blank"
          title={icon.title}
        >
          <i>{icon.iconComponent}</i>
        </a>
      ))}
    </div>
  );
};

export default QuickLinks;
