import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout: React.FunctionComponent = ({ children }) => (
  <div className="layout">
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
