import React, { useEffect, useMemo, useState } from "react";
import { projectsData } from "../data/projectsData";
import { motion } from "framer-motion";

const Project = ({ projectNumber }) => {
  const currentProject = projectsData[projectNumber];
  const [circleStyle, setCircleStyle] = useState({});

  useEffect(() => {
    setCircleStyle({
      left: `${Math.floor(Math.random() * 200 + 700)}px`,
      top: `${Math.floor(Math.random() * 200 + 150)}px`,
      transform: `scale(${Math.random() + 0.7})`,
    });
  }, [projectNumber]);

  const variants = useMemo(
    () => ({
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
    }),
    []
  );

  const transition = useMemo(
    () => ({
      ease: [0.03, 0.87, 0.73, 0.9],
      duration: 0.6,
    }),
    []
  );

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
    <motion.div
      className="project-main"
      initial="initial"
      animate="visible"
      exit="exit"
      transition={transition}
      variants={variants}
    >
      <div className="project-content">
        <h1>{currentProject.title}</h1>
        <p>{currentProject.date}</p>
        <ul className="languages">
          {currentProject.languages.map((item) => (
            <li key={item}>{item}</li>
            // On va chercher les différents langages qu'on va ensuite maper pour les faire apparaitre à l'écran pour chaques projets réalisés et illustrés;
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
        <div className="img-container hover">
          <span>
            <h3>{currentProject.title}</h3>
            <p>{currentProject.infos}</p>
          </span>
          <img
            src={currentProject.img}
            alt={currentProject.title}
            className="img"
          />
        </div>
        <div className="button-container">
          <a
            href={currentProject.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover"
          >
            <span className="button">voir le site</span>
          </a>
        </div>
      </motion.div>
      <span className="random-circle" style={circleStyle}></span>
    </motion.div>
  );
};

export default Project;
