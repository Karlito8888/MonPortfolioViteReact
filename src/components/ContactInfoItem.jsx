import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactInfoItem = ({ title, text, copyText, icon }) => {
  const renderText = () => {
    // Gestion des adresses emails et numéros de téléphone
    if (title.toLowerCase() === "email") {
      return (
        <a
          href={`mailto:${text}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ cursor: "pointer" }}
          className="clipboard"
        >
          {icon && <FontAwesomeIcon icon={icon} />}
          {text}
        </a>
      );
    } else if (title.toLowerCase() === "téléphone") {
      return (
        <a
          href={`https://wa.me/${copyText}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ cursor: "pointer" }}
          className="clipboard"
        >
          {icon && <FontAwesomeIcon icon={icon} />}
          {text}
        </a>
      );
    }

    // Gestion des autres types de texte (comme les adresses)
    if (Array.isArray(text)) {
      return text.map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index < text.length - 1 && <br />}
        </React.Fragment>
      ));
    }
    return text;
  };

  return (
    <div className={`content-${title}`}>
      <h4>{title}</h4>
      <CopyToClipboard
        text={copyText}
        onCopy={() => console.log("Text Copied")}
      >
        {/* Affiche le contenu dans un paragraphe si ce n'est ni un email ni un téléphone */}
        {title.toLowerCase() !== "email" &&
        title.toLowerCase() !== "téléphone" ? (
          <p style={{ cursor: "pointer" }} className="clipboard">
            {icon && <FontAwesomeIcon icon={icon} />}
            {renderText()}
          </p>
        ) : (
          // Pour les emails et téléphones, renderText() renvoie déjà un <a href>
          renderText()
        )}
      </CopyToClipboard>
    </div>
  );
};

export default ContactInfoItem;
