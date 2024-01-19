import { NavLink } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
  
  return (
    <>
      <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="category-logo"
          viewBox="0 0 16 16"
        >
          <path
            
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      
      <nav className="header__nav">
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
    </>
  );
};

export default NavBar;
