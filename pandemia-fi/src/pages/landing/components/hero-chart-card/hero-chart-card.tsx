import React from "react";
import NordicsChart from "../nordics-chart";

type ChartSubject = "nordics" | "finland-and-eu";

const HeroChartCard = () => {
  const [scale] = React.useState<ChartScaleType>("linear");

  return (
    <>
      <h1>Pohjoismaat</h1>
      <NordicsChart scale={scale} />
    </>
  );
};

export default HeroChartCard;
