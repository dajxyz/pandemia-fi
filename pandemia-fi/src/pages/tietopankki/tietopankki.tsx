import React from "react";
import { Flex, Box, Card, Heading } from "rebass";
import Badge from "../../components/badge";

const Tietopankki: React.FunctionComponent = () => {
  return (
    <Flex flexWrap="wrap" py={4}>
      <Box p={2} width={[1]}>
        <Card p={4}>
          <Heading>Tietopankki</Heading>
          <Badge title="Transmission" href="https://google.com/" />
          <Badge title="Virus" />
        </Card>
      </Box>
    </Flex>
  );
};

export default Tietopankki;
