import {  NavLink } from "react-router-dom";
import './NavBar.scss'


const NavBar = () => {
  return (
    <nav className="header__nav">
        <NavLink className="header__nav__link" to="/home">
          INICIO
        </NavLink>
        <NavLink className="header__nav__link" to="/vapes">
          VAPES
        </NavLink>
        <NavLink className="header__nav__link" to="/desechable">
          DESECHABLES
        </NavLink>
        <NavLink className="header__nav__link" to="/liquidos">
          LIQUIDOS
        </NavLink>
      </nav>
  )
}

export default NavBar