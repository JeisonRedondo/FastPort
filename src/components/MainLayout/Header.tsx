import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export default function Header() {
  const isMobile = useMediaQuery("(max-width: 760px)");

  const [hasInteracted,setHasInteracted] = useState(false)
  const [reveal, setReveal] = useState(false);

  const handleOptionsNav = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setHasInteracted(true)
    setReveal((reveal) => !reveal);
  };

  useEffect(() => {
    if (!isMobile) {
      setReveal(true);
      setHasInteracted(false)
    } else {
      setReveal(false);
    }
  }, [isMobile]);

  return (
    <header className="header">
      <article>
        <h1 className="logo">FastPort</h1>
      </article>
      <nav
        className={!isMobile ? "nav-list_options reveal" : 
                      !hasInteracted ? "close" :
                        reveal ? "nav-list_options reveal" :
                        "nav-list_options hidden"}
      >
        <a href="#">Products</a>
        <a href="#">Contact us</a>
        <a href="#">About us</a>
        <a href="#">Others</a>
      </nav>
      <button className={`nav-list_button `} onClick={handleOptionsNav}>
        Menu
      </button>
      <section className="nav-user_options">
        <a>Login</a>
        <a>Sign In</a>
      </section>
    </header>
  );
}
