import React from "react";

import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="portfolio__navbar">
      <div className="portfolio__navbar-links">
        <div className="portfolio__navbar-name">
          <p>Vinay Moolya</p>
        </div>
        <div className="portfolio__navbar-links-container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#workex">Work Experience</a>
          </p>
          <p>
            <a href="#skills">Skills</a>
          </p>
          <p>
            <a href="#projects">Projects</a>
          </p>
          <p>
            <a href="#contact">Contact</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
