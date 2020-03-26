import React from "react";
import { Box, Image, Link } from "rebass";
import LogoCC from "./cc-by-sa4.0-80x15.png";

const Footer = () => {
  return (
    <Box
      as="footer"
      className="layout__footer"
      sx={{
        width: "100%",
        maxWidth: "100%",
        color: "text",
        textAlign: "center",
        background: "#fff",
        fontSize: "10pt",
        lineHeight: "3ex",
        mt: "auto",
        p: "2",
      }}
    >
      Sivuston tekijöiden toimittamat tietokannat on lisensoitu
      <br />
      <Link
        href="https://creativecommons.org/licenses/by-sa/4.0/"
        rel="license noopener noreferrer"
        sx={{
          color: "text",
          ":hover": {
            color: "text",
            textDecoration: "underline",
          },
        }}
      >
        Creative Commons Nimeä-JaaSamoin 4.0 Kansainvälinen -lisenssillä
      </Link>
      .<br />
      <Link
        href="https://creativecommons.org/licenses/by-sa/4.0/"
        rel="license noopener noreferrer"
        sx={{
          ":hover": {
            opacity: 0.6,
          },
          ":focus": {
            opacity: 0.6,
          },
        }}
      >
        <Image
          className="image__cc_by_sa"
          src={LogoCC}
          alt="Creative Commons License"
          sx={{
            display: "inline-block",
            width: "80px",
            height: "15px",
            m: 1,
          }}
        />
      </Link>
    </Box>
  );
};

export default Footer;
