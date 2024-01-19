import useFetch from "../../../hooks/useFetch";
import { useContext } from "react";
import { ProductContext } from "../../../context/ProductContext";
import "./ListProducts.scss";

const VapesProducts = ({ url }) => {
  const {
    allProducts,
    setAllProducts,
    total,
    countProducts,
    setCountProducts,
    setTotal,
  } = useContext(ProductContext);
  const { data } = useFetch(url);

  const onAddProduct = (product) => {
    if (allProducts.find((item) => item.name === product.name)) {
      const products = allProducts.map((item) =>
        item.name === product.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setTotal(total + product.price * product.quantity);
      setCountProducts(countProducts + product.quantity);
      return setAllProducts([...products]);
    }
    setTotal(total + product.price * product.quantity);
    setCountProducts(countProducts + product.quantity);
    setAllProducts([...allProducts, product]);
  };

  return (
    <div className="productsVapes">
      {data.map((product, index) => (
        <div key={index} className="productsVapes__card">
          <div className="productsVapes__card__img">
            <img src={product.img} alt={product.name} />
          </div>
          <div className="productsVapes__card__text">
            <p>{product.name}</p>
            <span>{product.price}</span>

            <div onClick={() => onAddProduct(product)} className="sendCart">
              <span>Enviar al carrito</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VapesProducts;
