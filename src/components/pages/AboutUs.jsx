import React from "react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div className="container pt-3" style={{ backgroundColor: "#eee" }}>
      <h1 className="m-0 text-danger">Sobre Nosotros</h1>
      <p>
        Bienvenidos a Boutique Scents tu destino para descubrir las
        fragancias más exquisitas y exclusivas. Nos enorgullece ofrecerte una
        amplia selección de perfumes de lujo, productos para el cuidado personal
        y accesorios de alta calidad. En Boutique Scents, nuestra pasión
        por las fragancias nos impulsa a buscar constantemente los mejores
        productos de las marcas más reconocidas del mundo. Nos esforzamos por
        brindarte una experiencia de compra única y satisfactoria, donde puedas
        encontrar la fragancia perfecta que refleje tu estilo y personalidad.
        Nuestro equipo está compuesto por expertos en perfumes que están
        dispuestos a guiarte en tu búsqueda y brindarte asesoramiento
        personalizado. Entendemos que elegir una fragancia puede ser una
        decisión personal y queremos asegurarnos de que encuentres el aroma
        ideal que te haga sentir especial en cada ocasión. Estamos comprometidos con la calidad y
        trabajamos con marcas reconocidas que utilizan ingredientes de primera
        categoría. Gracias por elegirnos como tu destino de fragancias y productos de belleza.
        Esperamos poder ayudarte a encontrar tus aromas favoritos y brindarte
        una experiencia excepcional en cada visita. ¡No dudes en contactarnos!
      </p>
      <div>
        <img
          className="img-fluid"
          src="https://media.fashionnetwork.com/m/4cb2/c846/af5a/5405/5020/3e84/2725/3c2b/76fa/21d2/21d2.jpg"
          alt="sobre nosotros"
        />
      </div>
      <button
        className="btn btn-outline-secondary btn m-2"
        onClick={() => navigate("/")}
      >
        Volver
      </button>
    </div>
  );
};

export default AboutUs;
