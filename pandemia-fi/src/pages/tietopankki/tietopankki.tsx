import React from "react";
import { Flex, Box, Card, Heading } from "rebass";
import CategoryBadge from "../../components/categorybadge";

const TietopankkiStyle = {
  py: 2,
};

/**
 * Tietopankki section of the website
 */
const Tietopankki: React.FunctionComponent = () => {
  return (
    <Flex flexWrap="wrap" sx={TietopankkiStyle}>
      <Box p={2} width={[1]}>
        <Card p={3}>
          <Heading>Tietopankki</Heading>
          <CategoryBadge title="Transmission" href="https://google.com/" />
          <CategoryBadge title="Virus" />
        </Card>
      </Box>
    </Flex>
  );
};

export default Tietopankki;
