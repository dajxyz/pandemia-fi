import React from "react";
import { Card, Heading, Flex, Box, Text } from 'rebass';
import NewsFeedItem from '../../components/newsfeeditem'

const Uutishuone: React.FunctionComponent = () => {
  return (
    <Flex flexWrap='wrap' mx={2}>
      <Box px={2} width={[ '100%', '100%', '75%' ]}>
        <Card p={4}>
          <Heading>Uutishuone</Heading>
          <NewsFeedItem 
            url="https://yle.fi/uutiset/3-11265359?utm_source=twitter-share&utm_medium=social"
            title="Tehohoidon ylilääkäri Ylelle: Tehohoitoa joudutaan rajaamaan raskaasti, jos synkimmät ennusteet toteutuvat – 11 tärkeää kysymystä tehohoidosta"
            date={new Date(Date.now())}
            additionalInfo='YLE'
          ></NewsFeedItem>
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
