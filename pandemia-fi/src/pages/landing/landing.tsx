import React, { useState, useEffect } from "react";
import Card from "../../components/card";
import HeroChartCard from "./components/hero-chart-card";
import NumberMetricCard from "./components/number-metric-card";
import LinksCard from "./components/links-card";
import "./landing.css";

interface CaseEntry {
  id: number;
  date: string;
  healthCareDistrict: string;
}

function LandingPage() {

  const [numsConfirmed, setNumsConfirmed] = useState(0);
  const [numsConfirmedToday, setNumsConfirmedToday] = useState(0);
  const [numsRecovered, setNumsRecovered] = useState(0);
  // const [numsDeaths, setNumsDeaths] = useState(0);

  const today = new Date();

  useEffect(() => {
    fetch('https://w3qa5ydb4l.execute-api.eu-west-1.amazonaws.com/prod/finnishCoronaData')
      .then(res => res.json())
      .then(data => {
        setNumsConfirmed(data.confirmed.length);
        setNumsConfirmedToday(
          data.confirmed.filter((entry: CaseEntry) => {
            const d = new Date(entry.date);
            return d.getFullYear() === today.getFullYear()
                   && d.getMonth() === today.getMonth()
                   && d.getDate() === today.getDate();
                 }).length
        );
        setNumsRecovered(data.recovered.length);
        // setNumsDeaths(data.deaths.length);
      });
  });

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
