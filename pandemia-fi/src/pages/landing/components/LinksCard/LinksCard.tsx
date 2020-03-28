import React from "react";
import { Flex, Card, Image, Heading, Text, Link } from "rebass";

import LogoTHL from "./images/logo_thl.resized.png";
import LogoWHO from "./images/logo_who.resized.png";
import LogoECDC from "./images/logo_ecdc.resized.png";
import LogoUM from "./images/logo_um.resized.png";
import LogoTTL from "./images/logo_ttl.resized.png";
import LogoOM from "./images/logo_om.resized.png";

import "./LinksCard.css";

interface CardLinkProps {
  href: string;
  title: string;
  image: string;
  imageAlt: string;
}

const CardLink = ({ href, title, image, imageAlt }: CardLinkProps) => {
  return (
    <Flex className="links-card__link" display="flex" alignItems="center" p="1">
      <Image
        className="links-card__link__icon"
        src={image}
        alt={imageAlt}
        sx={{
          width: ["32px", "32px"],
          borderRadius: 4,
          mr: 2,
        }}
      />

      <Link
        className="number-metric-card__link__texts"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          ":hover": {
            textDecoration: "underline",
          },
        }}
      >
        <Text
          textAlign="center"
          align-self="center"
          flex="1"
          fontSize={[2, 2, 2]}
          color="text"
        >
          {title}
        </Text>
      </Link>
    </Flex>
  );
};

const LinksCardHeadingStyle = {
  mt: -4,
  mb: 1,
  p: 1,
  backgroundColor: "white",
  fontWeight: "500",
  letterSpacing: "-0.1pt",
};

const LinksCard = () => {
  return (
    <>
      <Card
        sx={{
          borderRadius: 4,
          mb: 3,
          textAlign: "left",
        }}
      >
        <Heading fontSize={[1]} sx={LinksCardHeadingStyle}>
          Terveysviranomaisten tietopankit
        </Heading>

        <CardLink
          href="https://thl.fi/web/infektiotaudit-ja-rokotukset/ajankohtaista/wuhanin-koronavirus"
          title="THL Infopankki"
          image={LogoTHL}
          imageAlt="THL logo"
        />

        <CardLink
          href="https://www.ecdc.europa.eu/en/novel-coronavirus-china"
          title="ECDC Infopankki"
          image={LogoECDC}
          imageAlt="ECDC logo"
        />

        <CardLink
          href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
          title="WHO Infopankki"
          image={LogoWHO}
          imageAlt="WHO logo"
        />
      </Card>

      <Card
        sx={{
          borderRadius: 4,
          mb: 3,
          textAlign: "left",
        }}
      >
        <Heading fontSize={[1, 2]} sx={LinksCardHeadingStyle}>
          Viranomaisten tietopankit
        </Heading>

        <CardLink
          href="https://um.fi/ajankohtaista"
          title="Ulkoministeriön tiedotteet"
          image={LogoUM}
          imageAlt="UM logo"
        />

        <CardLink
          href="https://hyvatyo.ttl.fi/koronavirus/ohje-yrityksille"
          title="Työterveyden laitos"
          image={LogoTTL}
          imageAlt="TTL logo"
        />

        <CardLink
          href="https://www.finlex.fi/fi/laki/ajantasa/2016/20161227"
          title="Tartuntatautilaki"
          image={LogoOM}
          imageAlt="OM logo"
        />

        <CardLink
          href="https://www.finlex.fi/fi/laki/ajantasa/2011/20111552"
          title="Valmiuslaki"
          image={LogoOM}
          imageAlt="OM logo"
        />

        <CardLink
          href="https://www.ecdc.europa.eu/en/novel-coronavirus-china/sources-updated"
          title="EU-maiden terveysviranomaiset"
          image={LogoECDC}
          imageAlt="ECDC logo"
        />
      </Card>
    </>
  );
};

export default LinksCard;
