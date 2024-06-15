import React from "react";
import "./Skills.css";
import {
  ReactIcon,
  CppIcon,
  FirebaseIcon,
  JavaIcon,
  JsIcon,
  MaterialUIIcon,
  PhpIcon,
  PowerBIIcon,
  PythonIcon,
  ScikitIcon,
  SQLIcon,
  NodeIcon,
  CssIcon,
  FlaskIcon,
  HTMLIcon,
  CIcon,
  MysqlIcon,
  GitIcon,
} from "./logos";
const Skills = () => {
  return (
    <div id="skills">
      <div className="skills-title">Skills</div>
      <div className="container-skill">
        <div className="skills-container">
          <div className="skill">
            <img src={ReactIcon} alt="React" />
            <p>React</p>
          </div>
          <div className="skill">
            <img src={FirebaseIcon} alt="FirebaseIcon" />
            <p>Firebase</p>
          </div>
          <div className="skill">
            <img src={JsIcon} alt="JsIcon" />
            <p>Javascript</p>
          </div>
          <div className="skill">
            <img src={NodeIcon} alt="NodeIcon" />
            <p>Node</p>
          </div>
          <div className="skill">
            <img src={FlaskIcon} alt="FlaskIcon" />
            <p>Flask</p>
          </div>
          <div className="skill">
            <img src={HTMLIcon} alt="HTMLIcon" />
            <p>HTML</p>
          </div>
          <div className="skill">
            <img src={CssIcon} alt="CssIcon" />
            <p>CSS</p>
          </div>
        </div>
        <div className="skills-container">
          <div className="skill">
            <img src={PythonIcon} alt="Python" />
            <p>Python</p>
          </div>
          <div className="skill">
            <img src={CIcon} alt="C" />
            <p>C</p>
          </div>
          <div className="skill">
            <img src={CppIcon} alt="C++" />
            <p>C++</p>
          </div>
          <div className="skill">
            <img src={JavaIcon} alt="Java" />
            <p>Java</p>
          </div>
          <div className="skill">
            <img src={PhpIcon} alt="Php" />
            <p>PHP</p>
          </div>
        </div>
        <div className="skills-container">
          <div className="skill">
            <img src={ScikitIcon} alt="Scikit Learn" />
            <p>Scikit Learn</p>
          </div>
          <div className="skill">
            <img src={SQLIcon} alt="SQL" />
            <p>SQL</p>
          </div>
          <div className="skill">
            <img src={MysqlIcon} alt="Mysql" />
            <p>MySQL</p>
          </div>
          <div className="skill">
            <img src={PowerBIIcon} alt="PowerBI" />
            <p>PowerBI</p>
          </div>
          <div className="skill">
            <img src={MaterialUIIcon} alt="MUI" />
            <p>MUI</p>
          </div>
          <div className="skill">
            <img src={GitIcon} alt="Git" />
            <p>Git</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
