import React, { useState, useEffect } from "react";
import { Flex, Box, Card } from "rebass";
import HeroChartCard from "./components/hero-chart-card";
import NumberMetricCard from "./components/number-metric-card";
import LinksCard from "./components/links-card";

interface CaseEntry {
  id: number;
  date: string;
  healthCareDistrict: string;
}

function LandingPage() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [numsConfirmed, setNumsConfirmed] = useState<number>(0);
  const [numsConfirmedToday, setNumsConfirmedToday] = useState<number>(0);
  const [numsRecovered, setNumsRecovered] = useState<number>(0);
  const [numsDeaths, setNumsDeaths] = useState<number>(0);

  useEffect(() => {
    const today = new Date();
    setIsLoading(true);
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
        setNumsDeaths(data.deaths.length);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <Flex flexWrap="wrap" py={4}>
      <Box width={[1, 1, 2 / 3]} p={2}>
        <Flex flexWrap="wrap" m={-2}>
          <Box width={[1 / 2]} p={2}>
            <Card>
              <NumberMetricCard
                isLoading={isLoading}
                metric={numsConfirmed}
                explainer="Tartuntoja Suomessa"
              />
            </Card>
          </Box>
          <Box width={[1 / 2]} p={2}>
            <Card>
              <NumberMetricCard
                isLoading={isLoading}
                metric={numsConfirmedToday}
                explainer="Uusia tartuntoja tänään"
              />
            </Card>
          </Box>
          <Box width={[1 / 2]} p={2}>
            <Card>
              <NumberMetricCard
                isLoading={isLoading}
                metric={numsRecovered}
                explainer="Toipuneet Suomessa"
              />
            </Card>
          </Box>
          <Box width={[1 / 2]} p={2}>
            <Card>
              <NumberMetricCard
                isLoading={isLoading}
                metric={numsDeaths}
                explainer="Menehtyneitä Suomessa"
              />
            </Card>
          </Box>
          <Box width={[1]} p={2}>
            <Card>
              <HeroChartCard />
            </Card>
          </Box>
        </Flex>
      </Box>
      <Box p={2} width={[1, 1, 1 / 3]}>
        <Card>
          <LinksCard />
        </Card>
      </Box>
    </Flex>
  );
}

export default LandingPage;
