export default function Header() {
  return (
    <header className="header">
      <article>
        <h1 className="logo">FastPort</h1>
      </article>
      <nav className="nav-list_options">
        <a href="#">Products</a>
        <a href="#">Contact us</a>
        <a href="#">About us</a>
        <a href="#">Others</a>
      </nav>
      <section className="nav-user_options">
        <a>Login</a>
        <a>Sign In</a>
      </section>
    </header>
  );
}
