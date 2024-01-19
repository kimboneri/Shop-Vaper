import Header from "../layout/header/Header";
import Brands from "../layout/components/brands/Brands";
import Footer from "../layout/footer/Footer";
import { ListProducts } from "./components";
const LiquidsPages = () => {
  return (
    <>
      <Header />
      <Brands />
      <div className="content-vapes">
        <ListProducts url={"/src/db/liquidos.json"} />
      </div>
      <Footer />
    </>
  );
};

export default LiquidsPages;
