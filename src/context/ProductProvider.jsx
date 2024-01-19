import { useState } from "react"
import { ProductContext } from "./ProductContext"

export const ProductProvider = ({children}) => {

    const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);

    return(
       <ProductContext.Provider value={{
        allProducts,
        setAllProducts,
        total,
        setTotal,
        countProducts,
        setCountProducts,     
       }}>
        {children}
       </ProductContext.Provider>

    )
}


