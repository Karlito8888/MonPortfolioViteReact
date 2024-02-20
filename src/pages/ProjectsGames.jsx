import React from "react";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import SocialNetwork from "../components/SocialNetwork";
import { projectsData } from "../data/projectsData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProjectCardCarousel from "../components/ProjectCardCarousel";
import ButtonRight from "../components/ButtonRight";
import ButtonLeft from "../components/ButtonLeft";
import responsive from "../utils/responsiveSettings";
import { motion } from "framer-motion";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectsGames = () => {
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

  const backgroundStyle = {
    backgroundSize: "cover", // Couvre toute la zone de l'élément
    backgroundPosition: "center", // Centre l'image dans l'élément
    backgroundRepeat: "no-repeat",
    height: "auto", // Hauteur fixe pour l'élément, ajustez selon vos besoins
    width: "100%", // Largeur de l'élément (peut être ajustée selon vos besoins)
    maxWidth: "700px",
    aspectRatio: "16/9",
    borderRadius: "10px",
    display: "flex", // Pour centrer le contenu dans l'élément, si nécessaire
    justifyContent: "center", // Centre horizontalement le contenu
    alignItems: "center", // Centre verticalement le contenu
    color: "#e2e2e2", // Couleur du texte pour contraster avec le fond, si vous avez du texte
  };
  return (
    <>
      <Mouse />
      <div className="project">
        <header>
          <div className="nav-container">
            <Navigation />
          </div>
          <div className="sn-logo">
            <SocialNetwork />
            <Logo />
          </div>
        </header>
        <main>
          <div className="scroll-left">
            <ButtonLeft to="/projects/react" />
          </div>
          <div className="projects_games">
            <section id="projects-games-menu">
              <motion.div
                initial="initial"
                animate="visible"
                variants={imgAnim}
                transition={{ duration: 1.2 }}
              >
                <Carousel
                  swipeable={true}
                  draggable={false}
                  showDots={true}
                  responsive={responsive}
                  focusOnSelect={true}
                  keyBoardControl={true}
                  customTransition="all .5"
                  transitionDuration={500}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={[
                    "superLargeDesktop",
                    "desktop",
                    "tablet",
                    "mobile",
                  ]}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
                >
                  {projectsData.games.map((project) => (
                    <React.Fragment key={project.id}>
                      <div className="en-tete">
                        <h2>{project.title}</h2>
                        <FontAwesomeIcon
                          icon={faGamepad}
                          style={{ color: "#E8D44D" }}
                        />
                      </div>
                      <ProjectCardCarousel
                        style={{
                          ...backgroundStyle,
                          backgroundImage: `url(${project.img})`,
                        }}
                        // title={project.title}
                        date={project.date}
                        infos={project.infos}
                        link={project.link}
                      />
                    </React.Fragment>
                  ))}
                </Carousel>
              </motion.div>
            </section>
          </div>
          <div className="scroll-right">
            <ButtonRight to="/contact" />
          </div>
        </main>
        <footer>
          <div className="empty"></div>
        </footer>
      </div>
    </>
  );
};

export default ProjectsGames;
