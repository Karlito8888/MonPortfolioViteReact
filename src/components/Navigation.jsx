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
          portfolio
          <ul className="nav-projects">
            {[1, 2, 3, 4].map((number) => (
              <li key={number}>
                <NavLink
                  to={`/projet-${number}`}
                  className={({ isActive }) =>
                    isActive ? "nav-active hover" : "hover"
                  }
                >
                  projet {number}
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
