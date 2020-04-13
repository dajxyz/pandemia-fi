import React from "react";
import { Flex, Box } from "rebass";
import Link from "../link";
import { ReactComponent as LogoPandemia } from "./logo.svg";

const HeaderLinks = () => (
  <Flex
    as="nav"
    className="layout__header__nav"
    sx={{
      fontSize: "18px",
    }}
  >
    {/* TODO: Adjust HeaderLinks component to add `currentpage` when user has right section open. */}
    {/* <Link type="header__nav" currentpage href="/"></Link> */}
    <Link type="header__nav" href="#/">
      Tilannekuva
    </Link>

    <Link type="header__nav" href="#/uutishuone">
      Uutishuone
    </Link>

    {/* Disable showing menu item until we have some content for it */}
    {/* <Link type="header__nav" href="#/tietopankki">
      Tietopankki
    </Link> */}

    <Link type="header__nav" href="#/julkaisuja">
      Julkaisuja
    </Link>

    <Link type="header__nav" href="#/sivustosta">
      Tietoa meistä
    </Link>
  </Flex>
);

const Header = () => (
  <Box
    as="header"
    className="layout__header"
    sx={{
      width: "100%",
      maxWidth: "100%",
      color: "text",
      background: "#fff",
      pt: 0,
      pb: 2,
    }}
  >
    <Box
      className="header__decoration"
      sx={{
        width: "100%",
        height: "15px",
        position: "relative",
        background: "linear-gradient(90deg, #097290 0%, #AD6B83 100%)",
      }}
    />
    <Flex
      alignItems="center"
      sx={{
        maxWidth: "1080px",
        mx: "auto",
        p: "0",
      }}
    >
      <Box
        className="layout__header__brand"
        sx={{
          color: "rgba(0, 0, 0, 0.87)",
        }}
      >
        <Link type="header__brand" href="/">
          <Flex
            sx={{
              display: "block",
              maxWidth: ["60px"],
              mr: 1,
            }}
          >
            <LogoPandemia title="Pandemia.fi logo" height="60" width="60" />
          </Flex>
        </Link>
      </Box>

      <HeaderLinks />
    </Flex>
  </Box>
);

export default Header;
