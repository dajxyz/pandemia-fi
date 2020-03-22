import React, { useState, useEffect } from "react";
import Card from "../../components/card";
import HeroChartCard from "./components/hero-chart-card";
import NumberMetricCard from "./components/number-metric-card";
import LinksCard from "./components/links-card";
import "./landing.css";

function LandingPage() {

  const [numsConfirmed, setNumsConfirmed] = useState(0);
  const [numsConfirmedToday, setNumsConfirmedToday] = useState(0);
  const [numsRecovered, setNumsRecovered] = useState(0);
  const [numsDeaths, setNumsDeaths] = useState(0);

  useEffect(() => {
    fetch('https://w3qa5ydb4l.execute-api.eu-west-1.amazonaws.com/prod/finnishCoronaData')
      .then(res => res.json())
      .then(data => {
        setNumsConfirmed(data.confirmed.length);
      });
    // const responseJson = await response.json();

    // setNumsConfirmed(responseJson.confirmed.length);

    // this.setState({
    //   statData: {
    //     numsConfirmed: responseJson.confirmed.length,
    //     numsConfirmedToday: responseJson.confirmed.filter(entry => {
    //       const d = new Date(entry.date);
    //       return d.getFullYear() === this.today.getFullYear()
    //              && d.getMonth() === this.today.getMonth()
    //              && d.getDate() === this.today.getDate();
    //     }).length,
    //     numsDeaths: responseJson.deaths.length,
    //     numsRecovered: responseJson.recovered.length,
    //   }
    // });
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
