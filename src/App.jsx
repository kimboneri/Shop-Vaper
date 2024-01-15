import Header from "./layout/header/Header";
import { BgChanger,Slider } from "./layout/components";
import slides from "./db/publicidad.json"

const App = () => {
  return (
    <>
      <BgChanger>
        <Header />
      </BgChanger>
     <Slider slides={slides} />   
    </>
  );
};

export default App;
