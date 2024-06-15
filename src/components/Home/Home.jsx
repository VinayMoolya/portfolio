import React from "react";

import "./Home.css";
import Coder from "../../assets/coderbg.png";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
const Home = () => {
  return (
    <div id="home">
      <div className="container">
        <div className="Intro_container">
          <div className="Intro_Hi"> Hi , My Name is </div>
          <div className="Intro_Name">VINAY VITTAL MOOLYA</div>
          <div className="Intro_ShortDesc">Frontend Developer | ML | AI</div>
          <div className="Intro_Description">
            Upcoming Associate Data Engineer @SHELL. I specialize in Frontend ,
            Machine Learning and love building great impactful projects.
            Currently , I am focussed on Data Engineering and Data
            Visualization.
          </div>
          <div className="Intro_Links_container">
            <div className="CV">
              <a
                href="https://drive.google.com/file/d/15XWK62pTBHffr2k3bckpCF-fvh3RUCnU/view"
                target="_blank"
                rel="noreferrer"
              >
                <button to="" className="cv_btn">
                  Resume
                </button>
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/vinaymoolya/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedin} alt="linkedin"></img>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/VinayMoolya/VinayMoolya"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} alt="github"></img>
              </a>
            </div>
          </div>
        </div>
        <div className="Intro_image">
          <img src={Coder} alt="coderimage"></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
