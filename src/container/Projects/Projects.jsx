import React from "react";
import "./Projects.css";
import { Med, AI, BT, Edrive, Commodity, Crypto } from "./images";
const Projects = () => {
  return (
    <div id="projects">
      <div className="projects-title">Projects</div>
      <div className="projects-container">
        <div class="card">
          <div class="card-details">
            <img src={Med} alt="Medicine" />
            <p class="text-title">Medicine Recommendation System using LLM</p>
            <p class="text-body">
              Tech : React | Neo4j | Python | Cypher | LLM (Gemini 1.5 Pro)
            </p>
          </div>
          <button class="card-button">
            <a
              href="https://github.com/VinayMoolya/MedicineAI"
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a>
          </button>
        </div>
        <div class="card">
          <div class="card-details">
            <img src={AI} alt="AI" />
            <p class="text-title">
              Artifical Intelligence College Counsellor Chatbot
            </p>
            <p class="text-body">
              Tech : React | nlp.js | Web Scraping | Python | react-chatbot-kit
            </p>
          </div>
          <button class="card-button">
            <a
              href="https://github.com/VinayMoolya/AICounsellorChatbot"
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a>
          </button>
        </div>
        <div class="card">
          <div class="card-details">
            <img src={Commodity} alt="Commodity" />
            <p class="text-title">Global Commodity Trade Analyzer</p>
            <p class="text-body">
              Tech : Python | NetworkX | Community Detection Algorithms
            </p>
          </div>
          <button class="card-button">
            <a
              href="https://github.com/VinayMoolya/GlobalCommodityTradeAnalyser"
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a>
          </button>
        </div>
        <div class="card">
          <div class="card-details">
            <img src={Edrive} alt="Edrive" />
            <p class="text-title">E-Drive - A File Management System</p>
            <p class="text-body">
              Tech : React | Firebase | Firebase Authentication
            </p>
          </div>
          <button class="card-button">
            <a
              href="https://github.com/VinayMoolya/gdrivefms"
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a>
            <a
              href="https://vinaymoolya.github.io/gdrivefms/"
              target="_blank"
              rel="noreferrer"
            >
              Live Link
            </a>
          </button>
        </div>
        <div class="card">
          <div class="card-details">
            <img src={Crypto} alt="Crypto" />
            <p class="text-title">Cryptocurrency Finance Tracker</p>
            <p class="text-body">
              Tech : React | API Integration | CoinGecko API
            </p>
          </div>
          <button class="card-button">
            <a
              href="https://github.com/VinayMoolya/cryptotracker"
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a>
            <a
              href="https://vinaymoolya.github.io/cryptotracker/"
              target="_blank"
              rel="noreferrer"
            >
              Live Link
            </a>
          </button>
        </div>
        <div class="card">
          <div class="card-details">
            <img src={BT} alt="Brain Tumor" />
            <p class="text-title">Multi-Class Brain Tumor Classification</p>
            <p class="text-body">
              Tech : Python | Pandas | Numpy | VGG16/19 | Resnet50
            </p>
          </div>
          <button class="card-button">
            <a
              href="https://github.com/VinayMoolya/BrainTumor_SI"
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
