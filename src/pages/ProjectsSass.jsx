import React, { useState } from "react";
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

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

 const ProjectsSass = () => {

   const firstSassProject = projectsData.sass[0];
   const secondSassProject = projectsData.sass[1];
   const thirdSassProject = projectsData.sass[2];
const fourthSassProject = projectsData.sass[3];
   const fifthSassProject = projectsData.sass[4];

   const backgroundStyle = {
     backgroundSize: "contain", // Couvre toute la zone de l'élément
     backgroundPosition: "center", // Centre l'image dans l'élément
     backgroundRepeat: "no-repeat", 
     height: "300px", // Hauteur fixe pour l'élément, ajustez selon vos besoins
     width: "100%", // Largeur de l'élément (peut être ajustée selon vos besoins)
     display: "flex", // Pour centrer le contenu dans l'élément, si nécessaire
     justifyContent: "center", // Centre horizontalement le contenu
     alignItems: "center", // Centre verticalement le contenu
     color: "white", // Couleur du texte pour contraster avec le fond, si vous avez du texte
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
                <div
                  style={{
                    ...backgroundStyle,
                    backgroundImage: `url(${firstSassProject.img})`,
                  }}
                >
                  <h2>{firstSassProject.title}</h2>

                  <div className="description">
                    <h3>{firstSassProject.date}</h3>
                    <p>{firstSassProject.infos}</p>
                    <a href={firstSassProject.link}>En savoir plus</a>
                  </div>
                </div>
                <div
                  style={{
                    ...backgroundStyle,
                    backgroundImage: `url(${secondSassProject.img})`,
                  }}
                >
                  <h2>{secondSassProject.title}</h2>

                  <div className="description">
                    <h3>{secondSassProject.date}</h3>
                    <p>{secondSassProject.infos}</p>
                    <a href={secondSassProject.link}>En savoir plus</a>
                  </div>
                </div>
                <div
                  style={{
                    ...backgroundStyle,
                    backgroundImage: `url(${thirdSassProject.img})`,
                  }}
                >
                  <h2>{thirdSassProject.title}</h2>

                  <div className="description">
                    <h3>{thirdSassProject.date}</h3>
                    <p>{thirdSassProject.infos}</p>
                    <a href={thirdSassProject.link}>En savoir plus</a>
                  </div>
                </div>
                <div
                  style={{
                    ...backgroundStyle,
                    backgroundImage: `url(${fourthSassProject.img})`,
                  }}
                >
                  <h2>{fourthSassProject.title}</h2>

                  <div className="description">
                    <h3>{fourthSassProject.date}</h3>
                    <p>{fourthSassProject.infos}</p>
                    <a href={fourthSassProject.link}>En savoir plus</a>
                  </div>
                </div>
                <div
                  style={{
                    ...backgroundStyle,
                    backgroundImage: `url(${fifthSassProject.img})`,
                  }}
                >
                  <h2>{fifthSassProject.title}</h2>

                  <div className="description">
                    <h3>{fifthSassProject.date}</h3>
                    <p>{fifthSassProject.infos}</p>
                    <a href={fifthSassProject.link}>En savoir plus</a>
                  </div>
                </div>
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
