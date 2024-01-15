import Search from "../search/Search";
import CartIcon from "../cartIcon/CartIcon";
import './HeaderBox.scss'
const HeaderBox = () => {
  return (
    <div className="header__box">
      <Search />
      <CartIcon />
    </div>
  );
};

export default HeaderBox;
