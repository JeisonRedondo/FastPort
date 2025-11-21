import { MonitorPlay, ChatCircleDots } from "phosphor-react";
export default function FeaturesSection() {
  return (
    <section className="feature-section ">
      <article className="feature ">
        <MonitorPlay size={42} weight="fill" className="feature-icon" />
        <div>
          <h3>Crea tu portafolio en minutos</h3>
          <p>Sin código, sin complicaciones.</p>
        </div>
      </article>

      <article className="feature ">
        <ChatCircleDots size={42} weight="fill" className="feature-icon" />
        <div>
          <h3>Diseños modernos</h3>
          <p>Plantillas elegantes para todos los perfiles.</p>
        </div>
      </article>

      <article className="feature ">
        <div className="feature-icon">🚀</div>
        <div>
          <h3>Publicación instantánea</h3>
          <p>Comparte tu portafolio con un link.</p>
        </div>
      </article>
    </section>
  );
}
