import { useEffect, useState } from "react";
import "./ProductShowcase.css"

interface Products {
  id: number;
  name: string;
  description: string;
  image: string;
  price?: number;
}

const defaultProduct = {
  id: 0,
  name: "",
  description: "",
  image: "",
};

function ProductShowcase() {
  const [products, setProducts] = useState<Products[]>([defaultProduct]);

  useEffect(() => {
    const mockProducts: Products[] = [
      {
        id: 1,
        name: "Fast Portfolio",
        description: "Una herramienta moderna para mostrar tus proyectos.",
        image: "https://via.placeholder.com/150",
        price: 0,
      },
      {
        id: 2,
        name: "FastPort Premium",
        description: "Versión avanzada con opciones de personalización.",
        image: "https://via.placeholder.com/150",
        price: 15,
      },
      {
        id: 3,
        name: "FastPort Pro",
        description: "Para profesionales y empresas creativas.",
        image: "https://via.placeholder.com/150",
        price: 30,
      },
    ];

    setTimeout(() => setProducts(mockProducts), 1000);
  }, []);

  return (
    <section className="product-showcase">
      <h2>Nuestros productos</h2>
      <div className="product-grid">
        {products[0].id === 0 ? (
          <p>Cargando Productos...</p>
        ) : (
          products.map((p) => (
            <div className="product-card" key={p.id}>
              <img src={p.image} alt="" />
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              {p.price !== undefined && <span>{p.price}</span>}
              <button>Ver más</button>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default ProductShowcase;
