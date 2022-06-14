function Header() {
  return (
  <header>
      <nav className="green darken-3">
        <div className="nav-wrapper container">
          <span className="brand-logo">React movies project</span>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="https://github.com/KusakinVova/movies-project">Repository</a></li>
          </ul>
        </div>
      </nav>
  </header>
  );
}

export {Header};
