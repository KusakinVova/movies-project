function Header() {
  return (
  <header>
      <nav className="green darken-3">
        <div className="nav-wrapper container">
          <a href="#" className="brand-logo">React movies</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="#">Repo</a></li>
          </ul>
        </div>
      </nav>
  </header>
  );
}

export {Header};
