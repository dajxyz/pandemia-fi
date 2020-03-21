import React from "react";
import Link from "../link";
import "./header.css";

const HeaderLinks = () => (
  <nav className="layout__header__nav">
    {/* TODO: Adjust HeaderLinks component to add `currentpage` when user has right section open. */}
    {/* <Link type="header__nav" currentpage href="/"></Link> */}
    <Link type="header__nav" href="/">
      Tilannekuva
    </Link>

    <Link type="header__nav" href="/uutishuone">
      Uutishuone
    </Link>

    <Link type="header__nav" href="/tietopankki">
      Tietopankki
    </Link>

    {/* <Link type="header__nav" href="/about">
      Tietoa meistä
    </Link> */}
  </nav>
);

const Header = () => (
  <header className="layout__header">
    <span className="layout__header__brand">
      <Link type="header__brand" href="/">
        Pandemia.fi
      </Link>
    </span>
    <HeaderLinks />
  </header>
);

export default Header;
