import { ShippingIcon, Logo, IconRedes } from "../components";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content-1">
        <ShippingIcon />
      </div>
      <div className="footer__content-2">
        <div className="footer__content-2__box-1">
          <Logo />
          <div className="social-links">
            <IconRedes url={"/src/assets/index/facebook.png"} />
            <IconRedes url={"/src/assets/index/instagram.png"} />
            <IconRedes url={"/src/assets/index/gorjeo.png"} />
          </div>
        </div>
        <div className="footer__content-2__box-2">
          <div class="custom-support">
            <h3>SERVICIO AL CLIENTE</h3>
            <a href="pageInfo.html">Preguntas Frecuentes</a>
            <a href="#">Terminos y Condiciones</a>
            <a href="#">Politica de Privacidad</a>
            <a href="#">Medio de Pago</a>
          </div>
          <div class="hakyVape">
            <h3>HAKY</h3>
            <a href="">Quienes Somos</a>
            <img
              src="/src/assets/index/reclamaciones.png"
              alt="Error de carga de la imagen"
            />
          </div>
          <div class="contact-info">
            <h3>Contactame</h3>
            <p>empresa@hakyVape.com</p>
          </div>
        </div>
        <p class="footer__content-2__copyright">&copy 2023 HAKYVAPE. Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
