import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="layout__footer">
      Sivuston tekijöiden toimittamat tietokannat on lisensoitu{" "}
      <a rel="license" href="https://creativecommons.org/licenses/by-sa/4.0/">
        Creative Commons Nimeä-JaaSamoin 4.0 Kansainvälinen -lisenssillä
      </a>
      .<br />
      <a rel="license" href="https://creativecommons.org/licenses/by-sa/4.0/">
        <img
          alt="Creative Commons License"
          style={{ borderWidth: 0 }}
          src="https://i.creativecommons.org/l/by-sa/4.0/80x15.png"
        />
      </a>
    </footer>
  );
};

export default Footer;
