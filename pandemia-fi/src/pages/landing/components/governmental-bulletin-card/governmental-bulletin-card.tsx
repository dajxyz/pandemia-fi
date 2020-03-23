import React from "react";
import { Heading } from "rebass";
import Button from "../../../../components/button";
import "./governmental-bulletin-card.css";

const iFrameStyles = {
  maxHeight: "80vh",
  width: "100%",
  border: "0px",
  overflow: "hidden",
  height: "80vh"
};

const GovernmentalBulletinCard = () => {
  const [selectedTab, setSelectedTab] = React.useState<number>(0);

  // TODO: Move the card header code somewhere shared and reusable
  return (
    <div>
      <div className="hero-chart-card__header">
        <div>
          <Heading>Viranomaisten tiedotteet</Heading>
          <a
            href="https://www.meltwater.com/fi/mediaseuranta/?utm_source=3party&utm_medium=content&utm_campaign=pandemia"
            target="_blank"
            rel="noopener noreferrer"
            className="governmental-bulletin-card__meltwater-link"
          >
            Mediaseurannan tarjoaa Meltwater
          </a>
        </div>
        <div className="hero-chart-card__header__buttons">
          <div>
            <Button
              onClick={() => setSelectedTab(0)}
              type={selectedTab === 0 ? "primary" : "muted"}
            >
              Tiedotteet 1
            </Button>
          </div>
          <div>
            <Button
              onClick={() => setSelectedTab(1)}
              type={selectedTab === 1 ? "primary" : "muted"}
            >
              Tiedotteet 2
            </Button>
          </div>
        </div>
      </div>
      {selectedTab === 0 && (
        <>
          <div className="governmental-bulletin-card__feed-contents">
            <b>Syötteessä mukana:</b>{" "}
            <a
              href="https://valtioneuvosto.fi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Valtioneuvoston kanslian
            </a>
            ,{" "}
            <a href="https://stm.fi/" target="_blank" rel="noopener noreferrer">
              Sosiaali- ja terveysministeriön
            </a>
            ,{" "}
            <a href="https://um.fi/" target="_blank" rel="noopener noreferrer">
              Ulkoministeriön
            </a>{" "}
            ja{" "}
            <a href="https://thl.fi/" target="_blank" rel="noopener noreferrer">
              Terveyden ja hyvinvoinnin laitoksen
            </a>{" "}
            tiedotteet.
          </div>
          <iframe
            title="Viranomaisten tiedotteet 1"
            src="https://meltwater.fi/feeds/nf/792a72a276e17b2a0319aaee41fbab2c"
            style={iFrameStyles}
          ></iframe>
        </>
      )}
      {selectedTab === 1 && (
        <>
          <div className="governmental-bulletin-card__feed-contents">
            <b>Syötteessä mukana:</b> Eduskunnan,{" "}
            <a
              href="https://www.lvm.fi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Liikenne- ja viestintäministeriön
            </a>
            ,{" "}
            <a href="https://mmm.fi/" target="_blank" rel="noopener noreferrer">
              Maa- ja metsätalousministeriön
            </a>
            ,{" "}
            <a
              href="https://oikeusministerio.fi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Oikeusministeriön
            </a>
            ,{" "}
            <a
              href="https://minedu.fi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Opetus- ja kulttuuriministeriön
            </a>
            ,{" "}
            <a
              href="https://www.defmin.fi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Puolustusministeriön
            </a>
            ,{" "}
            <a
              href="https://intermin.fi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sisäministeriön
            </a>
            ,{" "}
            <a href="https://vm.fi/" target="_blank" rel="noopener noreferrer">
              Valtiovarainministeriön
            </a>
            ,{" "}
            <a href="https://tem.fi/" target="_blank" rel="noopener noreferrer">
              Työ- ja elinkeinoministeriön
            </a>
            ,{" "}
            <a
              href="https://www.ym.fi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ympäristöministeriön
            </a>
            , Poliisin ja{" "}
            <a
              href="https://puolustusvoimat.fi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Puolustusvoimien
            </a>{" "}
            koronavirus-tiedotteet.
          </div>
          <iframe
            title="Viranomaisten tiedotteet 2"
            src="https://meltwater.fi/feeds/nf/d3ed8a8affadaefbec9c3a250bbc79fc"
            style={iFrameStyles}
          ></iframe>
        </>
      )}
    </div>
  );
};

export default GovernmentalBulletinCard;
