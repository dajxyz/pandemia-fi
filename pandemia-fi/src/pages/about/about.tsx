import React from "react";
import { Card, Flex, Box, Heading } from "rebass";

const About: React.FunctionComponent = () => {
  return (
    <Flex>
      <Box width={1}>
        <Card>
          <Heading as="h1" fontSize={[4, 5]}>
            Tietoa meistä
          </Heading>
        </Card>
      </Box>
    </Flex>
  );
};

export default About;
