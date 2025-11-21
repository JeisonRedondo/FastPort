export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h2 className="hero-title">Lleva tus productos al mundo digital</h2>
        <p>Muestra, organiza y vende lo que haces con pasión.</p>

        <div className="hero-buttons">
          <button className="hero-btn btn-primary">Publicar productos</button>
          <button className="hero-btn btn-secondary">Ver tiendas reales</button>
        </div>
      </div>

      <figure className="hero-image tilt-layer">
        <img
          src="https://picsum.photos/480/340"
          alt="Ejemplo de portafolio"
        />
      </figure>
    </section>
  );
}

