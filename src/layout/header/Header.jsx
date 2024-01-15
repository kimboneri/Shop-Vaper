import { NavBar, Logo, Box } from "../components";
import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  return (
    <>
     
        <header className="header">
          <Link>
            <Logo />
          </Link>
          <NavBar />
          <Box />
        </header>
     
    </>
  );
};

export default Header;
