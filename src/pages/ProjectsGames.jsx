import React from 'react';
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import SocialNetwork from "../components/SocialNetwork";

const ProjectsGames = () => {
  return (
    <>
      <Mouse />
      <div className="home">
          <Navigation />
          <SocialNetwork />
          <Logo />
        Hello games
        <Buttons left="/projects/react" right="/contact" />
      </div>
    </>
  );
};

export default ProjectsGames;