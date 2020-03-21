import React from "react";
import Button from "../../../../components/button";
import NordicsChart from "../nordics-chart";
import "./hero-chart-card.css";

type ChartSubject = "nordics" | "finland-and-eu";

const HeroChartCard = () => {
  const [subject, setSubject] = React.useState<ChartSubject>("nordics");
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
        <select<ChartSubject>
          value={subject}
          onChange={event => {
            setSubject(event.currentTarget.value as ChartSubject);
          }}
        >
          <option value="nordics">Pohjoismaat</option>
          <option value="finland-and-eu">Suomi ja EU</option>
        </select>
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
