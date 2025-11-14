import "./Home.css";
import HeroSection from "../components/Home/HeroSection.tsx";
import FeaturesSection from "../components/Home/FeaturesSection.tsx";

function Home() {
  return (
    <div className="home-container">
      <h1>🏠 Bienvenido a FastPort</h1>
      <HeroSection />
      <FeaturesSection />
    </div>
  );
}

export default Home;
