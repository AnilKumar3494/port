import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./navbarStyles.css";

const NavBar = () => {
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/intro", label: "About" },
    { path: "/project", label: "Projects" },

    { path: "/experience", label: "Experience" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="nav_bar">
      {navLinks.map(({ path, label }) => (
        <Link
          key={path}
          className={`nav_link ${location.pathname === path ? "active" : ""}`}
          to={path}
          title={label}
        >
          {label}
        </Link>
      ))}

      {/* {navLinks.map((navLinkItem) => (
        <Link
          className={`nav_link ${
            location.pathname === navLinkItem.path ? "active" : ""
          }`}
          to={navLinkItem.path}
        >
          {navLinkItem.label}
        </Link>
      ))} */}
    </nav>
  );
};

export default NavBar;
