import "./ShippingIcon.scss";

const ShippingIcon = () => {
  return (
   <>
    <div className="box">
        <img
          src="/src/assets/index/enviado.png"
          alt="Error de carga de la imagen"
        />

        <h4>Delivery Rápido</h4>
        <p>Hacemos envios a todo el Perú</p>
      </div>
      <div className="box">
        <img
          src="/src/assets/index/billetera-de-dinero.png"
          alt="Error de carga de la imagen"
        />
        <h4>Pagos contra-entrega</h4>
        <p>
          Paga al momento de recibir el producto
         
        </p>
      </div>
      <div className="box">
        <img
          src="/src/assets/index/proteger.png"
          alt="Error de carga de la imagen"
        />
        <h4>Productos y Servicio de Garantia</h4>
        <p>1 mes de garatia</p>
      </div>
      <div className="box">
        <img
          src="/src/assets/index/devolucion-de-producto.png"
          alt="Error de carga de la imagen"
        />
        <h4>Aceptamos devoluciones</h4>
        <p>Puedes devolver tu compra dentro de 7 dias siguientes</p>
      </div>
   </>
  )
    
};

export default ShippingIcon;
