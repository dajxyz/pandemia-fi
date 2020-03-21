import React from "react";
import NordicsChart from "../nordics-chart";

type GraphSubject = "nordics" | "finland-and-eu";
type GraphScale = "linear" | "logarithmic";

const HeroChartCard = () => {
  return (
    <>
      <h1>Pohjoismaat</h1>
      <NordicsChart />
    </>
  );
};

export default HeroChartCard;
