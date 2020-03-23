import React from "react";
import { Card, Flex, Box } from 'rebass';

const About: React.FunctionComponent = () => {
  return (
    <Flex>
      <Box width={1}>
        <Card>
          <h1>Tietoa meistä</h1>
        </Card>
      </Box>
    </Flex>
  );
};

export default About;
