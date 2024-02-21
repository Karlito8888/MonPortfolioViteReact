import React from "react";

const ProjectCardCarousel = ({
 style,
  title,
  date,
  infos,
  link,
}) => {
  return (
    <div className="card hover" style={style}>
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
