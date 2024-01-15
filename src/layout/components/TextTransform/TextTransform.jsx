import { useTypewriter } from "react-simple-typewriter"
import './TextTransform.scss'
 const TextTransform = () => {

    const [text] = useTypewriter({

        words: ['Bienvenido','solo vapeo!'],
        loop: false,

    })

  return (
   <>
    <span>
        {text}
    </span>
    
   </>
  )
}
export default TextTransform
