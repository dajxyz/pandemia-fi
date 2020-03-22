import React from "react";
import { Flex, Box, Card, Heading } from 'rebass';
import HeroChartCard from "./components/hero-chart-card";
import NumberMetricCard from "./components/number-metric-card";
import LinksCard from "./components/links-card";

const LandingPage: React.FunctionComponent = () => {
  return (
    <Flex flexWrap='wrap' mx={2}>
      <Box px={2} width={[ '100%', '100%', '75%' ]}>
        <Card mb={3}>
          <HeroChartCard />
        </Card>
      </Box>
      <Box px={2} width={[ '100%', '100%', '25%' ]}>
        <Card mb={3}>
          <NumberMetricCard metric={450} explainer="Tartuntoja Suomessa" />
        </Card>
        <Card mb={3}>
          <NumberMetricCard metric={50} explainer="Uusia tartuntoja tänään" />
        </Card>
        <Card mb={3}>
          <NumberMetricCard
            metric={258419}
            explainer="Tartuntoja koko maailmassa"
          />
        </Card>
      </Box>
      <Box px={2} width={[ 1, 1, 2/3 ]}>
        <Card>
          <Heading>Suomen luetuimmat korona-uutiset</Heading>
        </Card>
      </Box>
      <Box px={2} width={[ 1, 1, 1/3 ]}>
        <Card>
          <LinksCard />
        </Card>
      </Box>
    </Flex>
  );
};

export default LandingPage;
