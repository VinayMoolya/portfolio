import React from "react";
import "./WorkEx.css";
import Shell from "../../assets/shell.jpeg";
import Vit from "../../assets/vt.png";
import Lris from "../../assets/lris.jpeg";
import SmartBridge from "../../assets/smartbridge.png";
const WorkEx = () => {
  return (
    <div id="workex">
      <div className="workex-title">Enrich the Experiences</div>
      <div className="experiences-container">
        <div className="experience left">
          <img src={Shell} alt="Shell"></img>
          <div className="experience-textbox ">
            <h3>Shell India Markets Private Ltd.</h3>
            <small>Aug 2024 - Present</small>
            <p>Upcoming Associate Data Engineer.</p>
          </div>
        </div>
        <div className="experience right">
          <img src={SmartBridge} alt="Smartbridge"></img>
          <div className="experience-textbox ">
            <h3>SmartBridge Externship</h3>
            <small>May 2023 - Jul 2023</small>
            <p>Remote</p>
            <p>
              Delved into Artificial Intelligence , Machine Learning , Computer
              Vision concepts and contributed to solve real world problems such
              as Brain Tumor Classification.
            </p>
          </div>
        </div>
        <div className="experience left">
          <img src={Vit} alt="VIT"></img>
          <div className="experience-textbox ">
            <h3>Vellore Institute of Technology , Chennai</h3>
            <p>B.Tech Computer Science & Engineering</p>
            <small>Jul 2020 - Jul 2024</small>
            <p>CGPA : 9.35</p>
          </div>
        </div>
        <div className="experience right">
          <img src={Lris} alt="LRIS"></img>
          <div className="experience-textbox ">
            <h3>Little Rock Indian School - AISSCE</h3>
            <small>2019 - 2020</small>
            <p>PCM : 95%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkEx;
