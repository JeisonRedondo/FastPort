import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export default function Header() {
  const [reveal, setReveal] = useState(false);
  const [closing, setClosing] = useState(true);
  const isMobile = useMediaQuery("(max-width: 760px)");

  const handleOptionsNav = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setReveal((reveal) => !reveal);
  };

  const navOptions = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isMobile) {
      setReveal(true)
      setClosing(false)
    }else {
      setClosing(true)
      setReveal(false)
    }
  }, [isMobile]);


  useEffect(() => {
    if (!reveal) {
      const timeout = setTimeout(() => {
        setClosing(true);
      }, 900);

      return () => clearTimeout(timeout);
    } else {
      setClosing(false);
    }
  }, [reveal]);

  return (
    <header className="header">
      <article>
        <h1 className="logo">FastPort</h1>
      </article>
      <nav
        ref={navOptions}
        className={`nav-list_options ${closing ? "close" : ""} ${reveal ? "reveal" : "hidden"} `}
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
