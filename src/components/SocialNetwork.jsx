import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";


const socialLinks = [
  {
    id: "github", // Utilisez une clé unique pour chaque lien
    href: "https://github.com/Karlito8888",
    icon: faGithub,
    label: "Mon GitHub", // Pour l'accessibilité
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/charles-bourgault-407694300/",
    icon: faLinkedin,
    label: "Mon LinkedIn",
  },
];

const SocialLink = ({ href, icon, onMouseOver, onMouseLeave, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="hover"
    onMouseOver={onMouseOver}
    onMouseLeave={onMouseLeave}
    style={{ color: "#6ED2F1" }}
    aria-label={label}
  >
      <FontAwesomeIcon icon={icon} className="icon" />
  </a>
);

const SocialNetwork = () => {
  const handleMouseOver = (e) => {
    const target = e.currentTarget;
    target.style.transform = `translate(${e.nativeEvent.offsetX - 20}px, ${
      e.nativeEvent.offsetY - 13
    }px)`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "";
  };

  return (
    <div className="social-network">
      <ul>
        {socialLinks.map((link) => (
          <li key={link.id}>
            <SocialLink
              href={link.href}
              icon={link.icon}
              onMouseOver={handleMouseOver}
              onMouseLeave={handleMouseLeave}
              label={link.label}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialNetwork;
