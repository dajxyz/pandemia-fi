import React from "react";
import Header from "./header";
import Footer from "./footer";
import "./layout.css";

const Layout: React.FunctionComponent = ({ children }) => (
  <div className="layout">
    <Header />
    <main className="layout__content">{children}</main>
    <Footer />
  </div>
);

export default Layout;
