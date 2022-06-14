function Footer() {
  return (
  <footer className="page-footer green darken-4">
    <div className="footer-copyright">
      <div className="container">
      © { new Date().getFullYear()} Copyright Text
      <a className="grey-text text-lighten-4 right" href="https://github.com/KusakinVova">Vladimir Kusakin</a>
      </div>
    </div>
  </footer>
  );
}

export {Footer};
