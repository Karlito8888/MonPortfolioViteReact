import React from "react";
import DynamicText from "../components/DynamicText";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import SocialNetwork from "../components/SocialNetwork";
import ButtonRight from "../components/ButtonRight";

const Home = () => {

  return (
    <>
      <Mouse />
      <div className="home">
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
          <div className="scroll-left"></div>
          <div className="home-main">
            <div className="main-content">
              <h1>Charles BOURGAULT</h1>
              <h2>Développeur Web</h2>
              <DynamicText />
            </div>
          </div>
          <div className="scroll-right">
            <ButtonRight to="/projects/sass" />
          </div>
        </main>
        <footer>
          <div className="empty"></div>
        </footer>
      </div>
    </>
  );
};

export default Home;
