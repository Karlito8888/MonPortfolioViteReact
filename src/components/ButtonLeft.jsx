import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";

const ButtonLeft = ({ to }) => {
  return (
    <div className="button-left">
      <NavLink
        to={to}
        className="left hover"
        aria-label="Aller à la page précédente"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </NavLink>
    </div>
  );
};

export default ButtonLeft;
