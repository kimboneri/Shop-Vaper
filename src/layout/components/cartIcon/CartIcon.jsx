import "./CartIcon.scss";
import { useContext } from "react";
import { ProductContext } from "../../../context/ProductContext";
const CartIcon = () => {
  const { allProducts, total, countProducts,setAllProducts,setCountProducts,setTotal } = useContext(ProductContext);
  const onCloseProduct = (product) => {
    const results = allProducts.filter(
      item => item.name !== product.name
    )

    let confi = total - product.price * product.quantity

    setTotal(parseFloat(confi.toFixed(2)))
    setCountProducts(countProducts - product.quantity);
    setAllProducts(results)
    
  }

  const onCloseBag = () => {
    setAllProducts(0)
    setTotal([0])
    setCountProducts(0)

  }
  const handleOpenClick = () => {
    const CloseCart = document.getElementById("dropdown");

    CloseCart.classList.add("dropdown-abierto");
    console.log("hola");
  };
  const handleCloseClick = () => {
    const CloseCart = document.getElementById("dropdown");
    CloseCart.classList.remove("dropdown-abierto");
    console.log("adios");
  };

  return (
    <>
      <div onClick={handleOpenClick} className="shopping-cart ">
        <svg
          id="cart"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="bi bi-bag"
          viewBox="0 0 16 16"
        >
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
        </svg>
        <span className="shopping-cart__counter ">{countProducts}</span>
      </div>
      <div id="dropdown" className="dropdown">
        {allProducts.length ? (
          <>
            <div className="dropdown__header ">
              <svg
                onClick={handleCloseClick}
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                fill="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              </svg>
              <h2>Bolsa de compra</h2>
            </div>
            <div className="dropdown__main">
              {allProducts.map((product) => (
                <div key={product.name} className="dropdown__main__card-bag">
                  <div className="product-counter">
                    <span>{product.quantity}</span>
                  </div>
                  <div className="product-img">
                    <img src={product.img} alt={product.name} />
                  </div>
                  <div className="product-tittle">
                    <p>{product.name}</p>
                  </div>
                  <div className="product-price">
                    <span>{product.price}</span>
                  </div>
                  <div className="product-close">
                    <svg
                      onClick={() => onCloseProduct(product)}
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      fill="currentColor"
                      className="bi bi-x-lg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            <div className="dropdown__footer">
              <div className="total">
                <span>Total</span>
                <span>s/{total}</span>
              </div>
              <div className="box">
                <div className="go-shoppingBag">
                  <a href="#">Ir a la bolsa de compra</a>
                </div>
                <div onClick={onCloseBag} className="buy">
                  <a>vaciar carrito</a>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="dropdown__header ">
              <svg
                onClick={handleCloseClick}
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                fill="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              </svg>
              <h2>Bolsa de compra</h2>
            </div>
            <div className="dropdown__main">
              <div className="empty-bag">
                <svg
                  width="50"
                  height="50"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-bag"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
                <h2>Tu Bolsa esta vacio</h2>
              </div>
            </div>

            <div className="dropdown__footer">
              
              <div className="total">
                <span>Total</span>
                <span>s/0</span>
              </div>
              <div className="box">
                <div className="go-shoppingBag">
                  <a href="#">Ir a la bolsa de compra</a>
                </div>
                <div className="buy">
                  <a href="#">comprar</a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartIcon;
