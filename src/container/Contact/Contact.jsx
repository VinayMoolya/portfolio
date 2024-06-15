import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div id="contact">
      <div className="contact-title">Contact me</div>
      <div className="contact-container">
        <div className="contact-thank">
          <p id="cname">VINAY VITTAL MOOLYA</p>
          <div className="addr">
            <p>Ph. No. : +91 7204375902</p>
            <p>Origin : Karnataka , India</p>
            <p>Pincode : 574105</p>
          </div>
          <p>Thank you for visiting my portfolio website.</p>
          <p>Connect 🚀 with me over socials.</p>
        </div>
        <div className="quick-links">
          <p className="heading">QUICK LINKS</p>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#workex">Work Experience</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
        </div>
        <div className="socials">
          <p className="heading">SOCIAL HANDLES</p>
          <ul>
            <li>
              <a
                href="https://drive.google.com/file/d/15XWK62pTBHffr2k3bckpCF-fvh3RUCnU/view"
                target="_blank"
                rel="noreferrer"
              >
                Resume / CV
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/vinaymoolya/"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="https://github.com/VinayMoolya/VinayMoolya"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
