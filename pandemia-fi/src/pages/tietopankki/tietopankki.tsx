import React from "react";
import { Flex, Box, Card, Heading } from "rebass";
import CategoryBadge from "../../components/categorybadge";

const Tietopankki: React.FunctionComponent = () => {
  return (
    <Flex flexWrap="wrap" py={4}>
      <Box p={2} width={[1]}>
        <Card p={4}>
          <Heading>Tietopankki</Heading>
          <CategoryBadge title="Transmission" href="https://google.com/" />
          <CategoryBadge title="Virus" />
        </Card>
      </Box>
    </Flex>
  );
};

export default Tietopankki;
