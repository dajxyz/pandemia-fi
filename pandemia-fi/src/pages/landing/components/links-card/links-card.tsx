import React from "react";
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
      <h1>Viranomaisten ohjeet</h1>
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
      <h1>Seuraa tiedotusta</h1>
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
