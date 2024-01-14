import { Link, NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./NavBar.scss";
 const NavBar = () => {
  return (
    <div className="header__logo">
      <Link>
        <Logo />
        <h2>
          <span>Haky</span>VAPE
        </h2>
      </Link>
      <nav className="header__nav">
        <NavLink className="header__nav__link" to="/home">INICIO</NavLink>
        <NavLink className="header__nav__link" to="/vapes">VAPES</NavLink>
        <NavLink className="header__nav__link" to="/desechables">DESECHABLES</NavLink>
        <NavLink className="header__nav__link" to="/liquidos">LIQUIDOS</NavLink>
      </nav>
    </div>
  );
};
export default NavBar;

