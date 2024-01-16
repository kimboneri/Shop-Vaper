import "./Blog.scss";

const Blog = () => {
  return (
    <div className="blog">
      <div className="blog__img">
        <img
          src="src\assets\index\vaping-e-liquid-from-an-electronic-cigarette-1-1024x682.jpg"
          alt="img-blog"
        />
      </div>

      <div className="blog__content">
        <h3>Entre Nubes y Armonias</h3>
        <div className="accordion edit" id="accordionExample">
          <div className="accordion-item edit__1">
            <h2 className="accordion-header edit__2">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Introduccion a vapear
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show edit__2-1"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body edit__2-2">
                La introducción al vapeo es una exploración de una opción
                alternativa al tabaco tradicional, con beneficios potenciales
                pero también con consideraciones importantes. La decisión de
                vapear debe hacerse de manera informada, considerando la salud
                personal y la regulación local.
              </div>
            </div>
          </div>
          <div class="accordion-item edit__1">
            <h2 class="accordion-header edit__2">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Salud y Vapeo
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse edit__2-1"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body edit__2-2">
                Implica un equilibrio entre el potencial reducido de daño en
                comparación con el tabaquismo tradicional y los posibles riesgos
                asociados con el vapeo. La investigación continua y la
                conciencia pública son esenciales para evaluar y comprender
                completamente los impactos para la salud.
              </div>
            </div>
          </div>
          <div class="accordion-item edit__1">
            <h2 class="accordion-header edit__2">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Consejos y Trucos
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse edit__2-1"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body edit__2-2">
                Mejora tu experiencia de vapeo con estos consejos clave. Elige
                un dispositivo adecuado, prueba diferentes sabores de e-líquidos
                y mantén tu dispositivo limpio. Ajusta la potencia según tus
                preferencias y asegúrate de mantenerte hidratado. Respeta las
                normativas y mantente al tanto de las últimas novedades en la
                industria del vapeo. ¡Disfruta de un vapeo responsable y
                satisfactorio!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
