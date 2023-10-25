"use client";
import { useState } from "react";
import Modal from "../components/Modal";

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const CHUNK_SIZE_FIRST_PAGE = 6;
  const CHUNK_SIZE_OTHER_PAGES = 10;
  
  const projects = [
    {
      name: "Coupon Clipping App",
      content:
        "ReactJS application housed in a WordPress Plugin. Automated code deployments with Bitbucket Pipelines. NodeJS/ExpressJS back-end hosted in containerized Azure App Service. I personally architected the solution end to end and wrote the spec for all involved APIs and their integrations to services like Mulesoft and Inmar.",
      imageSrc: "/images/coupons.png",
      uri: "https://shopfamilyfare.com/coupons",
      projectAlt: "Preview of a Coupon Clipping App"
    },
    {
      name: "Loyalty Points App",
      content:
        "ReactJS application housed in a WordPress Plugin. Automated code deployments with Bitbucket Pipelines. NodeJS/ExpressJS back-end hosted in containerized Azure App Service. I personally architected the solution end to end and wrote the spec for all involved APIs and their integrations to services like Mulesoft and Inmar.",
      imageSrc: "/images/rewards-points.png",
      uri: "https://shopfamilyfare.com/rewards",
      projectAlt: "Preview of a Loyalty Points App"
    },
    {
      name: "Grocery Shopping iOS/Android App",
      content: "React Native / Redux app for six brick and mortar brands - Family Fare, D&W Fresh Market, Family Fresh Market, Dan's Supermarkets, VG's Grocery, and Forest Hills Foods. Hundreds of thousands of installs. Create and manage an account, view the weekly ad, find a store near you, clip coupons, earn points and rewards, contact support, track your order by fine GPS location for instant grocery pickups.",
      imageSrc: "/images/grocery-app.jpg",
      uri: "https://www.shopfamilyfare.com/download-mobile-app",
      projectAlt: "Preview of a Grocery Shopping iOS/Android App"
    },
    {
      name: "Apple Wallet Card Generator",
      content: "A Node/Express application to generate Apple Wallet loyalty cards so that our customers can scan at checkout.",
      imageSrc: "/images/applewallet.jpg",
      uri: "https://www.shopfamilyfare.com/download-mobile-app",
      projectAlt: "Preview of a Apple Wallet Card Generator"
    },
    {
      name: "Self-editing chatbot",
      content: "Using OpenAI's GPT API and prompt engineering, a node application that ... built itself! Using a chat interface, I can send instructions to a chatbot to edit the application itself. The user is prompted in the terminal to accept the changes.",
      imageSrc: "/images/self-editing-chatbot.jpg",
      uri: "https://github.com/chuckzee/openai-selfedit",
      projectAlt: "Preview of a Self-editing chatbot"
    },
    {
      name: "AI Dungeon Master Chatbot",
      content: "An OpenAI GPT dungeon master with a Discord bot integration. 'dungeonmAIster' (I'm bad at naming things) can /start a D&D session, and then responds to users' /action commands describing what they do. The bot generates a dungeon in JSON format and records the status of rooms and exploration.",
      imageSrc: "/images/dungeonmAIster.jpg",
      uri: "https://github.com/chuckzee/dungeonmAIster",
      projectAlt: "Preview of a AI Dungeon Master Chatbot"
    },
    {
      name: "monsterdle - wordle for D&D",
      content: "Caught up in the wordle craze, I built a Dart/Flutter app with a Node/Express back-end that lets users guess the 'monster of the day' from fifth edition Dungeons & Dragons. I had never used Flutter before, so it was a learning experience.",
      imageSrc: "/images/monsterdle.jpg",
      uri: "https://github.com/chuckzee/monsterdle",
      projectAlt: "Preview of a wordle for D&D"
    },
    {
      name: "Gordon Now Delivery Tracking App",
      content: "My first React Native mobile app. In Gordon Food Service\'s B2B business, truck deliveries can sometimes happen every day or multiple times a week - kitchen managers could track their order and how many stops away their order is at a given moment. They were also able to preview what was on the truck - were there are necessary replacements? This information was the lifeblood of restaurants keeping operations going smoothly. This app was supported by a Kotlin back-end.",
      imageSrc: "/images/gordonnowapp.jpg",
      uri: "",
      projectAlt: "Preview of a Delivery Tracking App"
    },
    {
      name: "Gordon Now Marketing Site",
      content: "A marketing site & editing tool for customers using the Gordon Now tool. It included an app that let users edit common products they would order so that their Gordon Now Voice agent (we used Google Homes and Google Minis) would recognize them - aka 'aliases.' ReactJS and PHP primarily.",
      imageSrc: "/images/gordonnowcom.png",
      uri: "",
      projectAlt: "Preview of a Marketing Site"
    },
    {
      name: "A candy store website?",
      content: "One of the few Magento 2 products I've done - back in 2015 no less - this site is still kicking! I don't have a ton to say about it, I mostly just really enjoy the goofy CSS animations and things I did for it.",
      imageSrc: "/images/shopthebulkstore.png",
      uri: "https://www.shopthebulkstore.com/",
      projectAlt: "Preview of a candy store website"
    },
    {
      name: "A scripted minecraft adventure",
      content: "Once upon a time, a buddy and I learned command block scripting and made a randomizer dungeon crawl - before it was cool. We made it onto the front page of minecraft.net when we were featured.",
      imageSrc: "/images/minecraft.png",
      uri: "https://www.minecraft.net/en-us/article/dungeon-creeper",
      projectAlt: "A snapshot of a minecraft.net article"
    },
    {
      name: "Image reading chatbot",
      content: "Another discord chatbot - this one uses Google's Vision API to read images and then describe them to the user. I have engineered prompts to make it act like it can really see them. It's a fun way to learn about the API and how to use it.",
      imageSrc: "/images/computervision.png",
      uri: "#",
      projectAlt: "A picture of a chat session between a user and a bot. The user sends an image and the bot responds with a description of the image."
    },
    {
      name: "This website",
      content: "This website is a weird vaporwave ... piece of paper? Paperwave. Built with NextJS and deployed into Azure.",
      imageSrc: "/images/chuckzee.png",
      uri: "https://chuckzee.com",
      projectAlt: "Preview of ... this website!"
    },
  ];

  const HiddenImagePreload = ({ projects }) => {
    return (
      <div style={{ display: 'none' }}>
        {projects.map((project, index) => (
          <img key={index} src={project.imageSrc} alt={project.name} />
        ))}
      </div>
    );
  }

  const openModal = (project) => {
    setModalContent(project);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const getRandomValue = () => {
    return Math.floor(Math.random() * 8) + 7; // generates a number between 7 and 14
  };

  const renderProjectSection = (projectSubset) => (
    <div className="projects-list">
      {projectSubset.map((project, index) => (
        <a
          className="project-link"
          key={index}
          onClick={() => openModal(project)}
          style={{ backgroundImage: `url(${project.imageSrc})` }}
          data-color-value={getRandomValue()}
        >
          {project.name}
        </a>
      ))}
    </div>
  );

  const splitIntoChunks = (arr, firstChunkSize, otherChunkSize) => {
    const result = [];
    let i = 0;
  
    if (arr.length > 0) {
      result.push(arr.slice(i, i + firstChunkSize));
      i += firstChunkSize;
    }
  
    while (i < arr.length) {
      result.push(arr.slice(i, i + otherChunkSize));
      i += otherChunkSize;
    }
  
    return result;
  }
  
  const chunksOfProjects = splitIntoChunks(projects, CHUNK_SIZE_FIRST_PAGE, CHUNK_SIZE_OTHER_PAGES);

  return (
    <main>
      {chunksOfProjects.map((chunk, idx) => (
        <div class="paper-container" key={idx}>
          <div className="paper">
            <div className="title-container">
              <h1 className="page-title">Chuck Zimmerman</h1>
              <span>
                Engineering Manager, Senior Software Developer, Solutions Architect
              </span>
            </div>
            <div className="contact-section">
              <div className="contact-list">
                <a href="mailto:inquiries@chuckzee.com" target="_blank">Email</a>
                <a href="https://github.com/chuckzee" target="_blank">
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/chuckzimmermanmi/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="skills-section">
              <h2 className="section-title">Skills</h2>
              <ul className="skills-list">
                <li>Javascript ES6</li>
                <li>Typescript</li>
                <li>ReactJS</li>
                <li>React Native</li>
                <li>NodeJS</li>
                <li>ExpressJS</li>
                <li>RESTful APIs</li>
                <li>Python</li>
                <li>PHP</li>
                <li>Java</li>
                <li>Kotlin</li>
                <li>Docker</li>
                <li>CI/CD</li>
                <li>Jest</li>
                <li>Flutter</li>
                <li>Accessibility</li>
                <li>Microsoft Azure</li>
                <li>Google Cloud Platform</li>
                <li>Solutions Architecture</li>
                <li>Software Engineering Management</li>
                <li>Agile Scrum Master</li>
                <li>Bitbucket Pipelines</li>
                <li>WordPress Plugin Development</li>
                <li>HTML/CSS</li>
              </ul>
            </div>
            <div className="projects-section">
              <h2 className="section-title">Projects</h2>
              {renderProjectSection(chunk)}
            </div>
          </div>
        </div>
      ))}
      <HiddenImagePreload projects={projects} />
      <Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent} />
    </main>
  );
}
