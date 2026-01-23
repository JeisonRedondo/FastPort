import { Keyboard } from "phosphor-react";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>FastPort</h2>
      <nav>
        <section>
          <article>
            <h4>Dashboard</h4>
            <Keyboard size={32} weight="fill"/>
          </article>
          <article>
            <h4>Mi portafolio</h4>
          </article>
          <article>
            <h4>Historial de Catalogos</h4>
          </article>
          <article>
            <h4>Blog</h4>
          </article>
          <article>
            <h4>Precios</h4>
          </article>
          <article>
            <h4>Soporte</h4>
          </article>
          <article>
            <h4>Configuración</h4>
          </article>
        </section>
      </nav>
    </aside>
  );
}

export default Sidebar;
