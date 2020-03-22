import React from "react";
import { Card, Heading, Flex, Box, Text } from 'rebass';

const Uutishuone: React.FunctionComponent = () => {
  return (
    <Flex flexWrap='wrap' mx={2}>
      <Box px={2} width={[ '100%', '100%', '75%' ]}>
        <Card>
          <Heading>Uutishuone</Heading>
        </Card>
      </Box>
      <Box>
        <Card>
          <Text>Placeholder text</Text>
        </Card>
      </Box>
    </Flex>
  );
};

export default Uutishuone;
