import { NavLink } from "react-router-dom";
import "./NavBar.scss";

import { useState } from "react";

const NavBar = () => {
  const [show, setShow] = useState(false);
  const HandleMenuClick = () => {
    setShow(!show);
  };

  return (
    <>
     <div className="headerNav-container">
        <svg
          onClick={HandleMenuClick}
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="category-logo"
          viewBox="0 0 16 16"
        >
          <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
        </svg>
        <nav className={`header__nav ${show ? "isActive" : ""}`}>
          <NavLink className="header__nav__link" to="/home">
            INICIO
          </NavLink>
          <NavLink className="header__nav__link" to="/vapes">
            VAPES
          </NavLink>
          <NavLink className="header__nav__link" to="/desechables">
            DESECHABLES
          </NavLink>
          <NavLink className="header__nav__link" to="/liquidos">
            LIQUIDOS
          </NavLink>
        </nav>
        </div>
    
    </>
  );
};

export default NavBar;
