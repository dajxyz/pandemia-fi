import React from "react";
import Card from "../../components/card";
import HeroChartCard from "./components/hero-chart-card";
import NumberMetricCard from "./components/number-metric-card";
import LinksCard from "./components/links-card";
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
        <Card>
          <NumberMetricCard metric={450} explainer="Tartuntoja Suomessa" />
        </Card>
      </div>
      <div className="landing-page__grid-item">
        <Card>
          <NumberMetricCard metric={50} explainer="Uusia tartuntoja tänään" />
        </Card>
      </div>
      <div className="landing-page__grid-item">
        <Card>
          <NumberMetricCard
            metric={258419}
            explainer="Tartuntoja koko maailmassa"
          />
        </Card>
      </div>
      <div className="landing-page__grid-item--large">
        <Card>
          <h1>Suomen luetuimmat korona-uutiset</h1>
        </Card>
      </div>
      <div className="landing-page__grid-item">
        <Card>
          <LinksCard />
        </Card>
      </div>
    </div>
  );
};

export default LandingPage;
