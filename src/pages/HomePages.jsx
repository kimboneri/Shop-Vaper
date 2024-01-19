import { BgChanger } from "../layout/components";
import Header from "../layout/header/Header";
import Main from "../layout/main/Main";
import Footer from "../layout/footer/Footer";




const HomePages = () => { 
  return (
    <>
      <BgChanger>
        <Header />
      </BgChanger>
      <Main/>
      <Footer/>
    </>
  );
};

export default HomePages;
