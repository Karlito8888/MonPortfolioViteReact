import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactInfoItem = ({ title, text, copyText, icon }) => {
  const renderText = () => {
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
        <p style={{ cursor: "pointer" }} className="clipboard">
          {icon && <FontAwesomeIcon icon={icon} />}
          {renderText()}
        </p>
      </CopyToClipboard>
    </div>
  );
};

export default ContactInfoItem;
