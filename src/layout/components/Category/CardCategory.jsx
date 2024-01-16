
import './CardCategory.scss';
const CardCategory = ({url,text}) => {
  return (
    <div className="card">
        <img src={url} alt="" />
        <p>{text}</p>
    </div>
  ) 
}

export default CardCategory