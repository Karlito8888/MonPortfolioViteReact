import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        {/* Accueil */}
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-active hover" : "hover"
            }
          >
            accueil
          </NavLink>
        </li>

        {/* Portfolio avec sous-menu */}
        <li className="nav-portfolio">
          projets
          <ul className="nav-projects">
            {["sass", "js", "react", "games"].map((project) => (
              <li key={project}>
                <NavLink
                  to={`/projects/${project}`}
                  className={({ isActive }) =>
                    isActive ? "nav-active hover" : "hover"
                  }
                >
                  {/* <span>projets&nbsp;</span> */}
                  <span>{project}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </li>

        {/* Contact */}
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-active hover" : "hover"
            }
          >
            contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
