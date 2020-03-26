import React from "react";
import { Flex, Image, Heading, Text, Link } from "rebass";
import LogoTHL from "./logo_thl.resized.png";
import LogoWHO from "./logo_who.resized.png";
import LogoECDC from "./logo_ecdc.resized.png";
import LogoUM from "./logo_um.resized.png";
import LogoTTL from "./logo_ttl.resized.png";
import LogoOM from "./logo_om.resized.png";
import "./links-card.css";

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
          mr: 2
        }}
      />

      <Link
        className="number-metric-card__link__texts"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          ":hover": {
            textDecoration: "underline"
          }
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

const LinksCard = () => {
  return (
    <>
      <Heading fontSize={[3, 4]} mb="1">
        Viranomaisten ohjeet
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

      <Heading fontSize={[3, 4]} mt="3" mb="1">
        Seuraa tiedotusta
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
    </>
  );
};

export default LinksCard;
