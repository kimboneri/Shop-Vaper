import { Routes, Route } from "react-router-dom";
import { DisposablePages, HomePages, VapesPages, LiquidsPages } from "../pages";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AppRouter = () => {
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo({top:0,left: 0, behavior: 'instant'});
    }, [pathname]);

    return null;
  }

  return (
    <>
    <ScrollToTop />
      <Routes>
        <Route path="home" element={<HomePages />} />
        <Route path="vapes" element={<VapesPages />} />
        <Route path="desechables" element={<DisposablePages />} />
        <Route path="liquidos" element={<LiquidsPages />} />
        <Route path="/*" element={<HomePages />} />
      </Routes>
    </>
  );
};

export default AppRouter;
