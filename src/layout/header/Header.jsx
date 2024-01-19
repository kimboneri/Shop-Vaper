import { NavBar, Logo, Box } from "../components";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__logo">
          <Link to="/home">
            <Logo />
          </Link>
          <div className="text">
            <h2>
              <span>Haky</span>VAPE
            </h2>
          </div>
        </div>

        
        <NavBar />
        <Box />
      </header>
    </>
  );
};

export default Header;
