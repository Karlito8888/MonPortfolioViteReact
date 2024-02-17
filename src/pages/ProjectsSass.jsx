import React from 'react';
import Buttons from "../components/Buttons";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import SocialNetwork from "../components/SocialNetwork";

const ProjectsSass = () => {
  return (
    <>
      <Mouse />
      <div className="home">
          <Navigation />
          <SocialNetwork />
          <Logo />
Hello sass
        <Buttons left="/" right="/projects/js" />
      </div>
    </>
  );
};

export default ProjectsSass;