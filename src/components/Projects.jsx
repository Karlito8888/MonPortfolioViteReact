import React, { useState } from "react";
import Buttons from "./Buttons";
import Logo from "./Logo";
import Mouse from "./Mouse";
import Navigation from "./Navigation";
import { useParams } from "react-router-dom";
import { projectsData } from "../data/projectsData";
import { motion } from "framer-motion";

const Projects = () => {
  let { type } = useParams();
  const projects = projectsData[type];

  if (!projects) {
    return <div>Projet non trouvé</div>;
  }

  const projectTypes = ["sass", "js", "react", "jeux"];
  const currentIndex = projectTypes.indexOf(type);
  const prevProjectType =
    currentIndex > 0
      ? projectTypes[currentIndex - 1]
      : projectTypes[projectTypes.length - 1];
  const nextProjectType =
    currentIndex < projectTypes.length - 1
      ? projectTypes[currentIndex + 1]
      : projectTypes[0];

  const leftRoute = `/projets/${prevProjectType}`;
  const rightRoute = `/projets/${nextProjectType}`;

  const imgAnim = {
    initial: {
      opacity: 0,
      x: Math.floor(Math.random() * 350 * (Math.random() > 0.4 ? 1 : -1)),
      y: Math.floor(Math.random() * 120 * (Math.random() > 0.4 ? 1 : -1)),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        {/* <motion.div
          initial="initial"
          animate="visible"
          variants={imgAnim}
          transition={{ duration: 1.2 }}
          className="img-content"
        > */}
        <div className="projects-container">
          {projects.map((project) => (
            <div className="projects-items" key={project.id}>
              {/* <div className="img-container hover"> */}
              {/* <span> */}
              {/* <h3>{project.title}</h3>
                    <p>{project.infos}</p> */}
              {/* </span> */}
              <img src={project.img} alt={project.title} className="img" />
              {/* <div className="button-container">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover"
                    >
                      <span className="button">voir le site</span>
                    </a>
                  </div> */}
              {/* </div> */}
            </div>
          ))}
        </div>
        {/* </motion.div> */}
        <Buttons left={leftRoute} right={rightRoute} />
      </div>
    </main>
  );
};

export default Projects;
