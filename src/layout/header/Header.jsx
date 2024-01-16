import { NavBar, Logo, Box } from "../components";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <header className="header">
        <Link to="/home">
          <div className="header__logo">
            <Logo />
            <div className="text">
              <h2>
                <span>Haky</span>VAPE
              </h2>
            </div>
          </div>
        </Link>
        <NavBar />
        <Box />
      </header>
    </>
  );
};

export default Header;
