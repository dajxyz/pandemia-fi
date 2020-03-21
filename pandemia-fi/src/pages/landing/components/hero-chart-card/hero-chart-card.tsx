import React from "react";
import Button from "../../../../components/button";
import NordicsChart from "../nordics-chart";
import "./hero-chart-card.css";

type ChartSubject = "nordics" | "finland-and-eu";

const HeroChartCard = () => {
  const [scale, setScale] = React.useState<ChartScaleType>("linear");

  const setScaleToLinear = () => {
    setScale("linear");
  };
  const setScaleToLogarithmic = () => {
    setScale("logarithmic");
  };

  return (
    <>
      <div className="hero-chart-card__header">
        <h1>Pohjoismaat</h1>
        <div className="hero-chart-card__header__buttons">
          <div>
            <Button
              onClick={setScaleToLinear}
              type={scale === "linear" ? "primary" : "muted"}
            >
              Lineaarinen
            </Button>
          </div>
          <div>
            <Button
              onClick={setScaleToLogarithmic}
              type={scale === "logarithmic" ? "primary" : "muted"}
            >
              Logaritminen
            </Button>
          </div>
        </div>
      </div>
      <NordicsChart scale={scale} />
    </>
  );
};

export default HeroChartCard;
