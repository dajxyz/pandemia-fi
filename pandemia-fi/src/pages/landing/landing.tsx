import React, { useState, useEffect } from "react";
import { Flex, Box, Card, Heading } from "rebass";
import HeroChartCard from "./components/hero-chart-card";
import NumberMetricCard from "./components/number-metric-card";
import LinksCard from "./components/links-card";

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
    fetch(
      "https://w3qa5ydb4l.execute-api.eu-west-1.amazonaws.com/prod/finnishCoronaData"
    )
      .then(res => res.json())
      .then(data => {
        setNumsConfirmed(data.confirmed.length);
        setNumsConfirmedToday(
          data.confirmed.filter((entry: CaseEntry) => {
            const d = new Date(entry.date);
            return (
              d.getFullYear() === today.getFullYear() &&
              d.getMonth() === today.getMonth() &&
              d.getDate() === today.getDate()
            );
          }).length
        );
        setNumsRecovered(data.recovered.length);
        // setNumsDeaths(data.deaths.length);
      });
  });

  return (
    <Flex flexWrap="wrap" mx={2}>
      <Box px={2} width={["100%", "100%", "75%"]}>
        <Card mb={3}>
          <HeroChartCard />
        </Card>
      </Box>
      <Box px={2} width={["100%", "100%", "25%"]}>
        <Card mb={3}>
          <NumberMetricCard
            metric={numsConfirmed}
            explainer="Tartuntoja Suomessa"
          />
        </Card>
        <Card mb={3}>
          <NumberMetricCard
            metric={numsConfirmedToday}
            explainer="Uusia tartuntoja tänään"
          />
        </Card>
        <Card mb={3}>
          <NumberMetricCard
            metric={numsRecovered}
            explainer="Toipuneet Suomessa"
          />
        </Card>
        <Card mb={3}>
          <NumberMetricCard
            metric={258419}
            explainer="Tartuntoja koko maailmassa"
          />
        </Card>
      </Box>
      <Box px={2} width={[1, 1, 2 / 3]}>
        <Card>
          <Heading>Suomen luetuimmat korona-uutiset</Heading>
        </Card>
      </Box>
      <Box px={2} width={[1, 1, 1 / 3]}>
        <Card>
          <LinksCard />
        </Card>
      </Box>
    </Flex>
  );
}

export default LandingPage;
