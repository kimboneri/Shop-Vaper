import { Routes, Route } from "react-router-dom";
import { DisposablePages, HomePages, VapesPages, LiquidsPages } from "../pages";


const AppRouter = () => {
  return (
    <Routes>
      <Route path="home" element={<HomePages />} />
      <Route path="vapes" element={<VapesPages />} />
      <Route path="desechable" element={<DisposablePages/>}/>
      <Route path="liquidos" element={<LiquidsPages />} />
    </Routes>
  );
};

export default AppRouter;
