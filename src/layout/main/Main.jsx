import { Slider, SliderPromo,Category,Blog } from "../components";
import slides from "../../db/publicidad.json";
import "./Main.scss";
const Main = () => {
  return (
    <div className="main">
      <Slider slides={slides} perView={4} arrows={false} autoplay={true} />
      <SliderPromo />
      <Category/>
      <Blog/>
      
    </div>
  );
};

export default Main;
