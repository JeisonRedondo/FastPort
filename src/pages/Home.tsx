import "./Home.css";
import HeroSection from "../components/Home/HeroSection.tsx";
import FeaturesSection from "../components/Home/FeaturesSection.tsx";

function Home() {
  return (
    <div className="home-container">
      <div className="home-inner">

      <h1 className="home-title">
        Bienvenido a <span>FastPort</span>
      </h1>
      <p className="home-subtitle">
        Tu herramienta para presentar productos de manera visual, moderna y
        profesional.
      </p>

      <HeroSection />
      <FeaturesSection />
      </div>
    </div>
  );
}

export default Home;
