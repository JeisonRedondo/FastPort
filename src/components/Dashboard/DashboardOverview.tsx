import "./DashboardOverview.css";
function DashboardOverview() {
  return (
    <section className="overview">
      <h2 className="overview-title">Resumen General</h2>
      <div className="overview-stats">
        <div className="stat-card">
          <span className="stat-card__value">8</span>
          <span className="stat-card__label">Proyectos activos</span>
        </div>
        <div className="stat-card">
          <span className="stat-card__value">23</span>
          <span className="stat-card__label">Productos</span>
        </div>
        <div className="stat-card">
          <span className="stat-card__value">1.2k</span>
          <span className="stat-card__label">Vistas</span>
        </div>
        <div className="stat-card">
          <span className="stat-card__value">Hoy</span>
          <span className="stat-card__label">Última actualización</span>
        </div>
      </div>

      {/* --- Lista de productos (vista previa) --- */}
      <div className="overview__list">
        <h3>Vista previa del portafolio</h3>
        <ul>
          <li className="overview__item">
            <div className="item__thumb"></div>
            <span className="item__name">Proyecto A</span>
            <button className="item__edit">✏️</button>
          </li>
          <li className="overview__item">
            <div className="item__thumb"></div>
            <span className="item__name">Proyecto B</span>
            <button className="item__edit">✏️</button>
          </li>
          <li className="overview__item">
            <div className="item__thumb"></div>
            <span className="item__name">Proyecto C</span>
            <button className="item__edit">✏️</button>
          </li>
        </ul>
        <button className="overview__add">+ Agregar producto</button>
      </div>
    </section>
  );
}

export default DashboardOverview;
