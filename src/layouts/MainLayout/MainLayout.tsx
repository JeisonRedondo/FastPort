import type { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import "./MainLayout.css";
import Header from "../../components/MainLayout/Header";
import Footer from "../../components/MainLayout/Footer";

interface MainLayoutProps {
  children?: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <section className="mainlayout-section">
      <Header />
      <main>
        {children}
        <Outlet />
      </main>
      <Footer/>
    </section>
  );
}

export default MainLayout;
