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

const ProjectsSass = () => {
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
            <ButtonLeft to="/" />
          </div>
          <div className="projects_sass">
            <section id="projects-sass-menu">
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
                {projectsData.sass.map((project) => (
                  <React.Fragment key={project.id}>
                    <h2>{project.title}</h2>
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
            </section>
          </div>
          <div className="scroll-right">
            <ButtonRight to="/projects/js" />
          </div>
        </main>
        <footer>
          <div className="empty"></div>
        </footer>
      </div>
    </>
  );
};

export default ProjectsSass;
