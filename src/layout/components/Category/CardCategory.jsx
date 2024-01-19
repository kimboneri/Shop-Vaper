
import "./CardCategory.scss";
const CardCategory = ({ url, text }) => {
  return (
   
      <div  className="card">
        <img src={url} alt="error de carga de la imagen" />
        <p>{text}</p>
      </div>
   
  );
};

export default CardCategory;
