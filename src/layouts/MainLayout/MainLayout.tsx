import type { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import "./MainLayout.css";

interface MainLayoutProps {
  children?: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <section>
      <header className="header">
        <h1 className="logo">FastPort</h1>
      </header>

      <main>
        {children}
        <Outlet />
      </main>
    </section>
  );
}

export default MainLayout;
