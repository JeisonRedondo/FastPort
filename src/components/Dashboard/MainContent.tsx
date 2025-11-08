import ProductCategory from "./ProductCategory";

function MainContent() {
  const categories = [
    {
      title: "JUGOS",
      products: [
        {
          id: 1,
          name: "Jugo de Mango",
          image: "https://picsum.photos/300/200",
          price: 5,
        },
        {
          id: 2,
          name: "Jugo de Naranja",
          image: "https://picsum.photos/300/200",
          price: 4,
        },
      ],
    },
    {
      title: "SNACKS",
      products: [
        {
          id: 3,
          name: "Chips de Papa",
          image: "https://picsum.photos/300/200",
          price: 3,
        },
        {
          id: 4,
          name: "Maní Salado",
          image: "https://picsum.photos/300/200",
          price: 2,
        },
      ],
    },
  ];
  return (
    <main className="main-content">
      <h2>Resumen</h2>
      <div className="cards">
        <div className="card">Proyectos activos</div>
        <div className="card">Tareas completadas</div>
        <div className="card">Notificaciones</div>
      </div>

      <h2>Productos por Categoria</h2>
      {categories.map((categoria) => (
        <ProductCategory
          key={categoria.title}
          title={categoria.title}
          products={categoria.products}
        />
      ))}
    </main>
  );
}

export default MainContent;
