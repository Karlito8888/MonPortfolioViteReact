import React from "react";

const ProjectCardCarousel = ({
  backgroundStyle,
  webp,
  date,
  infos,
  link,
}) => {
  const styleWithBackground = {
    ...backgroundStyle,
    backgroundImage: `url(${webp})`,
  };

  return (
    <div
      className="card hover"
      style={styleWithBackground}
    >
      <span>
        <h3>{date}</h3>
        <p>{infos}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Voir le site
        </a>
      </span>
    </div>
  );
};

export default ProjectCardCarousel;
