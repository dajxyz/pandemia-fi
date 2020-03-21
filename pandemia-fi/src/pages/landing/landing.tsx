import React from "react";
import Card from "../../components/card";
import HeroChartCard from "./components/hero-chart-card";
import "./landing.css";

const LandingPage: React.FunctionComponent = () => {
  return (
    <div className="landing-page__grid-container">
      <div className="landing-page__grid-item--large">
        <Card>
          <HeroChartCard />
        </Card>
      </div>
      <div className="landing-page__grid-item">
        <Card>Card 2</Card>
      </div>
      <div className="landing-page__grid-item">
        <Card>Card 3</Card>
      </div>
      <div className="landing-page__grid-item">
        <Card>Card 4</Card>
      </div>
      <div className="landing-page__grid-item">
        <Card>Card 5</Card>
      </div>
    </div>
  );
};

export default LandingPage;
