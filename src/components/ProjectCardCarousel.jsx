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
        <a href={link}>Voir le site</a>
      </span>
    </div>
  );
};

export default ProjectCardCarousel;
