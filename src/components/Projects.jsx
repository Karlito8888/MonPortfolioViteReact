import React, { useState } from "react";
import Buttons from "./Buttons";
import Logo from "./Logo";
import Mouse from "./Mouse";
import Navigation from "./Navigation";
import { useParams } from "react-router-dom";
import { projectsData } from "../data/projectsData";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Projects = () => {
  let { type } = useParams();
  const projects = projectsData[type];
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  if (!projects) {
    return <div>Projet non trouvé</div>;
  }

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  // Types de projet en ordre
  const projectTypes = ["sass", "js", "react", "jeux"];
  const currentIndex = projectTypes.indexOf(type);
  const prevProjectType =
    projectTypes[currentIndex - 1] || projectTypes[projectTypes.length - 1];
  const nextProjectType = projectTypes[currentIndex + 1] || projectTypes[0];

  const leftRoute = `/projets/${prevProjectType}`;
  const rightRoute = `/projets/${nextProjectType}`;

  const variants = {
    initial: {
      opacity: 0,
      transition: { duration: 0.5 },
      x: 200,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0.4,
      transition: { duration: 0.35 },
      x: -800,
    },
  };

  const transition = {
    ease: [0.03, 0.87, 0.73, 0.9],
    duration: 0.6,
  };

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
        <motion.div
          className="project-main"
          initial="initial"
          animate="visible"
          exit="exit"
          transition={transition}
          variants={variants}
        >
          <div className="project-content">
            <h1>{projects[activeProjectIndex].title}</h1>
            <p>{projects[activeProjectIndex].date}</p>
            <ul className="languages">
              {projects[activeProjectIndex].languages.map((language, index) => (
                <li key={index}>{language}</li>
              ))}
            </ul>
          </div>
          <motion.div
            initial="initial"
            animate="visible"
            variants={imgAnim}
            transition={{ duration: 1.2 }}
            className="img-content"
          >
            <Swiper
              pagination={pagination}
              modules={[Pagination]}
              className="mySwiper"
            >
              {projects.map((project) => (
                <SwiperSlide key={project.id}>
                  <div className="project-card">
                    <div className="img-container hover">
                      {/* <span>
                        <h3>{project.title}</h3>
                        <p>{project.infos}</p>
                      </span> */}
                      <img
                        src={project.img}
                        alt={project.title}
                        className="img"
                      />
                      <div className="button-container">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover"
                        >
                          <span className="button">voir le site</span>
                        </a>
                      </div>
                    </div>
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
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </motion.div>
        <Buttons left={leftRoute} right={rightRoute} />
      </div>
    </main>
  );
};

export default Projects;
