import { useEffect } from "react";
import TextTransform from "../TextTransform/TextTransform";
import "./BgChanger.scss";
const BgChanger = ({children}) => {
  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      i = (i + 1) % 3;

      const adjustElement = document.getElementById("cover");
      
      if (!adjustElement) {
        return;
      } else {
        adjustElement.className = `imagen${i + 1}`;
      }
    }, 5000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="cover">
      {children}
      <section className="cover__text ">
        <h1>
          No más humo <br /> <TextTransform/>
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

export default BgChanger;
