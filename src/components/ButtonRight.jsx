import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";

const ButtonRight = ({ to }) => {
  return (
      <NavLink
        to={to}
        className="right hover"
        aria-label="Aller à la page suivante"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </NavLink>
  );
};

export default ButtonRight;
