import { CartIcon, NavBar, Search } from "../components";
import "./Header.scss";

export const Header = () => {
  return (
    <div className="cover ">
      <header className="header">
        <NavBar />
        <div className="header__box">
          <Search />
          <CartIcon />
        </div>
      </header>
      <section className="cover__text ">
        <h1>
          No más humo <br /> <span class="typed"></span>
        </h1>
        <p>
          El lugar donde el placer se encuentra en cada inhalación. Vive el
          vapeo con nosotros, donde la esencia de la satisfacción se mezcla con
          el sabor.
        </p>
      </section>
    </div>
  );
};
