import ProductShowcase from "../components/ProductShowcase/ProductShowcase";
import CardUser from "../components/UserCard";

function Home() {
  return (
    <div>
      <h1>🏠 Bienvenido a FastPort</h1>
      <p>Tu espacio para crear portafolios de productos.</p>
      <CardUser/>
      <ProductShowcase/>
    </div>
  );
}

export default Home;
