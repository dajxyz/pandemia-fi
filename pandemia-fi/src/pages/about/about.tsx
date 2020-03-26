import React from "react";
import { Card, Flex, Box, Heading } from "rebass";

const About: React.FunctionComponent = () => {
  return (
    <Flex flexWrap="wrap" py={4}>
      <Box p={2} width={[1]}>
        <Card p={4}>
          <Heading>Tietoa meistä</Heading>
        </Card>
      </Box>
    </Flex>
  );
};

export default About;
