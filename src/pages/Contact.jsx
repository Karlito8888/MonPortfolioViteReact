import React from "react";
import ContactForm from "../components/ContactForm";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import SocialNetwork from "../components/SocialNetwork";
import ContactInfoItem from "../components/ContactInfoItem";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import ButtonLeft from "../components/ButtonLeft";

const Contact = () => {

  return (
    <>
      <Mouse />
      <div className="contact">
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
            <ButtonLeft to="/projects/games" />
          </div>
          <ContactForm />
          <div className="contact-infos">    
                <ContactInfoItem
                  title="adresse"
                  text={[
                    "Charles BOURGAULT (E.I.)",
                    "10, rue du Colisée",
                    "75008 Paris",
                  ]}
                  copyText="Charles BOURGAULT (E.I), 10, rue du Colisée, 75008 Paris"
                />
                <ContactInfoItem
                  title="téléphone"
                  text=" 06.42.66.33.00"
                  copyText="+33642663300"
                  icon={faWhatsapp}
                />
                <ContactInfoItem
                  title="email"
                  text="cb.dweb49@gmail.com"
                  copyText="cb.dweb49@gmail.com"
                />    
          </div>
          <div className="scroll-right">
          </div>
        </main>
        <footer>
          <div className="empty">
            <p>Charles BOURGAULT - 2024</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Contact;
