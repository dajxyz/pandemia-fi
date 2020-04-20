import React from "react";
import { Box } from "rebass";
import Header from "./header";
import Footer from "./footer";
import "./layout.css";

const Layout: React.FunctionComponent = ({ children }) => (
  <Box className="layout">
    <Header />
    <Box
      as="main"
      className="layout__content"
      sx={{
        width: "100%",
        maxWidth: "1080px",
        alignSelf: "center",
        // background: "#eee",
      }}
    >
      {children}
    </Box>
    <Footer />
  </Box>
);

export default Layout;
