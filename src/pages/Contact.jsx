import React, { useState } from "react";
import ContactForm from "../components/ContactForm";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Buttons from "../components/Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import SocialNetwork from "../components/SocialNetwork";

const ContactInfoItem = ({ title, text, copyText, icon }) => {
  const [copied, setCopied] = useState(false);

  const renderText = () => {
    if (Array.isArray(text)) {
      return text.map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index < text.length - 1 && <br />}
        </React.Fragment>
      ));
    }
    // Si text n'est pas un tableau, l'afficher tel quel
    return text;
  };

  return (
    <div className={`content-${title}`}>
      <h4>{title}</h4>
      <CopyToClipboard text={copyText} onCopy={() => setCopied(true)}>
        <p style={{ cursor: "pointer" }} className="clipboard">
          {icon && <FontAwesomeIcon icon={icon} />}
          {/* Appel de renderText pour afficher le texte */}
          {renderText()}
        </p>
      </CopyToClipboard>
      {copied && <p style={{ color: "green", marginTop: "10px" }}>Copié !</p>}
    </div>
  );
};

const Contact = () => {
 
  return (
    <main>
      <Mouse />
      <div className="contact">
        <Navigation />
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <ContactInfoItem
            title="adresse"
            text={["Charles BOURGAULT (E.I.)", "10, rue du Colisée", "75008 Paris"]}
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
          <div className="credits">
            <p>Charles BOURGAULT - 2024</p>
          </div>
        </div>
        <SocialNetwork />
        <Buttons left={"/projet-4"} />
      </div>
    </main>
  );
};

export default Contact;
