import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";

const Buttons = (props) => {
  return (
    <div className="scroll-bottom">
      {props.left && (
        <div className="button-left">
          <NavLink
            to={props.left}
            className="left hover"
            aria-label="Aller à la page précédante"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </NavLink>
        </div>
      )}
      {props.right && (
        <div className="button-right">
          <NavLink
            to={props.right}
            className="right hover"
            aria-label="Aller à la page suivante"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Buttons;
