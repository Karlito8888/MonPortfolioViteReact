import React from "react";
import Buttons from "../components/Buttons";
import DynamicText from "../components/DynamicText";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import SocialNetwork from "../components/SocialNetwork";

const Home = () => {

  return (
    <>
      <Mouse />
      <div className="home">
        <header>
          <Navigation />
          <SocialNetwork />
          <Logo />
        </header>
        <div className="home-main">
          <div className="main-content">
            <h1>Charles BOURGAULT</h1>
            <h2>Intégrateur Web</h2>
            <DynamicText />
          </div>
        </div>
        <Buttons right={"/projet-1"} />
      </div>
    </>
  );
};

export default Home;
