import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";

const Buttons = (props) => {
  return (
    <div className="scroll-bottom">
      {props.left && (
        <NavLink to={props.left} className="left hover">
          <FontAwesomeIcon icon={faChevronLeft} />
        </NavLink>
      )}
      {props.right && (
        <NavLink to={props.right} className="right hover">
          <FontAwesomeIcon icon={faChevronRight} />
        </NavLink>
      )}
    </div>
  );
};

export default Buttons;
