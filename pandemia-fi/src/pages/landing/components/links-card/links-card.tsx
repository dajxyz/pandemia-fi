import React from "react";
import { Heading } from "rebass";
import LogoTHL from "./logo_thl.png";
import LogoWHO from "./logo_who.png";
import LogoECDC from "./logo_ecdc.png";
import LogoUM from "./logo_um.png";
import LogoTTL from "./logo_ttl.png";
import LogoOM from "./logo_om.png";
import "./links-card.css";

const LinksCard = () => {
  return (
    <>
      <Heading
        fontSize={[ 3, 4 ]}
        mb="1"
      >
        Viranomaisten ohjeet
      </Heading>

      <div className="links-card__link">
        <img src={LogoTHL} alt="THL" className="links-card__link__icon" />
        <div className="links-card__link__texts">
          <a
            href="https://thl.fi/web/infektiotaudit-ja-rokotukset/ajankohtaista/wuhanin-koronavirus"
            target="_blank"
            rel="noopener noreferrer"
          >
            THL Infopankki
          </a>
        </div>
      </div>
      <div className="links-card__link">
        <img src={LogoECDC} alt="ECDC" className="links-card__link__icon" />
        <div className="links-card__link__texts">
          <a
            href="https://www.ecdc.europa.eu/en/novel-coronavirus-china"
            target="_blank"
            rel="noopener noreferrer"
          >
            ECDC Infopankki
          </a>
        </div>
      </div>
      <div className="links-card__link">
        <img src={LogoWHO} alt="WHO" className="links-card__link__icon" />
        <div className="links-card__link__texts">
          <a
            href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
            target="_blank"
            rel="noopener noreferrer"
          >
            WHO Infopankki
          </a>
        </div>
      </div>

      <Heading
        fontSize={[ 3, 4 ]}
        mt="2"
        mb="1"
      >
        Seuraa tiedotusta
      </Heading>

      <div className="links-card__link">
        <img src={LogoUM} alt="UM" className="links-card__link__icon" />
        <div className="links-card__link__texts">
          <a
            href="https://um.fi/ajankohtaista"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ulkoministeriön tiedotteet
          </a>
        </div>
      </div>
      <div className="links-card__link">
        <img src={LogoTTL} alt="TTL" className="links-card__link__icon" />
        <div className="links-card__link__texts">
          <a
            href="https://hyvatyo.ttl.fi/koronavirus/ohje-yrityksille"
            target="_blank"
            rel="noopener noreferrer"
          >
            Työterveyden laitos
          </a>
        </div>
      </div>
      <div className="links-card__link">
        <img src={LogoOM} alt="OM" className="links-card__link__icon" />
        <div className="links-card__link__texts">
          <a
            href="https://www.finlex.fi/fi/laki/ajantasa/2016/20161227"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tartuntatautilaki
          </a>{" "}
          |{" "}
          <a
            href="https://www.finlex.fi/fi/laki/ajantasa/2011/20111552"
            target="_blank"
            rel="noopener noreferrer"
          >
            Valmiuslaki
          </a>
        </div>
      </div>
      <div className="links-card__link">
        <img src={LogoECDC} alt="ECDC" className="links-card__link__icon" />
        <div className="links-card__link__texts">
          <a
            href="https://www.ecdc.europa.eu/en/novel-coronavirus-china/sources-updated"
            target="_blank"
            rel="noopener noreferrer"
          >
            EU-maiden terveysviranomaiset
          </a>
        </div>
      </div>
    </>
  );
};

export default LinksCard;
