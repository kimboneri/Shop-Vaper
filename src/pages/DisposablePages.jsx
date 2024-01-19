import Header from "../layout/header/Header";
import Brands from "../layout/components/brands/Brands";
import Footer from "../layout/footer/Footer";
import { ListProducts } from "./components";

import './StylePages.scss'

const DisposablePages = () => {
  return (
    <>
      <Header />
      <Brands />
      <div className="content-vapes">
        <ListProducts url={"/src/db/desechables.json"} />
      </div>
     
      <Footer/>
    </>
  );
};

export default DisposablePages;
