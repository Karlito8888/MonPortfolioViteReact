import React from "react";

const ProjectCardCarousel = ({
  type,
  imageSrc,
  title,
  date,
  infos,
  link,
  onClick,
}) => {
  return (
    <div className="card" onClick={onClick} style={{ textAlign: "center" }}>
      <h2>{title}</h2>
      <img
        className="project-image"
        src={imageSrc}
        alt={`${type} image`}
        style={{ width: "80%" }}
      />
      <div className="description">
        <h3>{date}</h3>
        <p>{infos}</p>
        <a href={link}>En savoir plus</a>
      </div>
    </div>
  );
};

export default ProjectCardCarousel;
