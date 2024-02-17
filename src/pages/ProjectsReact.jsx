import React from 'react';
import Buttons from "../components/Buttons";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import SocialNetwork from "../components/SocialNetwork";

const ProjectsReact = () => {
  return (
    <>
      <Mouse />
      <div className="home">
          <Navigation />
          <SocialNetwork />
          <Logo />
        Hello react
        <Buttons left="/projects/js" right="/projects/games" />
      </div>
    </>
  );
};

export default ProjectsReact;