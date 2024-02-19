import React from "react";

const ProjectCardCarousel = ({
 style,
  title,
  date,
  infos,
  link,
}) => {
  return (
    <div className="card" style={style}>
      <div className="description">
        <h3>{date}</h3>
        <p>{infos}</p>
        <a href={link}>En savoir plus</a>
      </div>
    </div>
  );
};

export default ProjectCardCarousel;
