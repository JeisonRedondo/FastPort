import type { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import "./MainLayout.css";
import Header from "../../components/MainLayout/Header";
import Footer from "../../components/MainLayout/Footer";


function MainLayout() {
  return (
    <section className="mainlayout-section">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </section>
  );
}

export default MainLayout;
