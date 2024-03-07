import React, { useEffect, useRef } from "react";

const ProjectCardCarousel = ({
  backgroundStyle,
  jpeg,
  webp,
  date,
  infos,
  link,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      // Appliquer le style background-image avec image-set, en utilisant les URLs JPEG et WebP
      ref.current.style.backgroundImage = `
        image-set(
          url(${jpeg}) type("image/jpeg") 1x, 
          url(${webp}) type("image/webp") 1x
        )`;
    }
  }, [jpeg, webp]);

  return (
    <div className="card hover" style={backgroundStyle} ref={ref}>
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
