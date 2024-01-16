import Slider from "../Slider/Slider"
import top from "../../../db/top.json"
import './SliderPromo.scss'
const SliderPromo = () => {
  return (
    <div className='top-vapes'>
        <h2>Lo mejor de la casa</h2>
        <Slider slides={top} perView={4} arrows={true} />
    </div>
  )
}

export default SliderPromo