import React from "react";
import Card from "../../components/card";
import HeroChartCard from "./components/hero-chart-card";
import NumberMetricCard from "./components/number-metric-card";
import "./landing.css";

interface LandingPageProps {
  numsConfirmed: number;
  numsConfirmedToday: number;
  numsDeaths: number;
  numsRecovered: number;
}

const LandingPage = ({ numsConfirmed, numsConfirmedToday, numsRecovered, numsDeaths } : LandingPageProps) => {

  return (
    <div className="landing-page__grid-container">
      <div className="landing-page__grid-item--large">
        <Card>
          <HeroChartCard />
        </Card>
      </div>
      <div className="landing-page__grid-item">
        <Card>
          <NumberMetricCard metric={numsConfirmed} explainer="Tartuntoja Suomessa" />
        </Card>
      </div>
      <div className="landing-page__grid-item">
        <Card>
          <NumberMetricCard metric={numsConfirmedToday} explainer="Uusia tartuntoja tänään" />
        </Card>
      </div>
      <div className="landing-page__grid-item">
        <Card>
          <NumberMetricCard metric={numsRecovered} explainer="Toipuneet Suomessa" />
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
    </div>
  );
};

export default LandingPage;
