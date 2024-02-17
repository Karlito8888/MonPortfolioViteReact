import React from 'react';
import Buttons from "../components/Buttons";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import SocialNetwork from "../components/SocialNetwork";

const ProjectsJS = () => {
  return (
    <>
      <Mouse />
      <div className="home">
          <Navigation />
          <SocialNetwork />
          <Logo />
        Hello JS
        <Buttons left="/projects/sass" right="/projects/react" />
      </div>
    </>
  );
};

export default ProjectsJS;