import React from "react";
import { Card, Heading, Flex, Box, Text } from "rebass";
import MediaPicksFeed from "./media-picks-feed";

const Uutishuone: React.FunctionComponent = () => {
  return (
    <Flex flexWrap="wrap" mx={2}>
      <Box px={2} width={["100%", "100%", "75%"]}>
        <Card p={4}>
          <Heading>Uutishuone</Heading>
          <MediaPicksFeed />
        </Card>
      </Box>
      <Box>
        <Card>
          <Heading>Feeds</Heading>
          <Text>Placeholder text</Text>
        </Card>
      </Box>
    </Flex>
  );
};

export default Uutishuone;
