import React from "react";
import { Card, Heading, Flex, Box, Text } from "rebass";
import NewsFeedItem from "./components/news-feed-item";
import fetchAllFeedsAndItems from "././../../lib/feeds-api";

const PAGE_SIZE = 10;

const Uutishuone: React.FunctionComponent = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [feeds, setFeeds] = React.useState<Feed[]>([]);
  const [feedItems, setFeedItems] = React.useState<FeedItem[]>([]);
  const [pageNumber] = React.useState<number>(1);

  React.useEffect(() => {
    async function fetchFeedsAndItems() {
      const results = await fetchAllFeedsAndItems();
      setFeeds(results.feeds);
      setFeedItems(results.feedItems);
      setIsLoading(false);
    }
    fetchFeedsAndItems();
  }, []);

  const filteredFeedItems = React.useMemo(() => {
    return feedItems.slice(0, PAGE_SIZE * pageNumber)
  }, [feedItems, pageNumber]);

  return (
    <Flex flexWrap="wrap" mx={2}>
      <Box px={2} width={["100%", "100%", "75%"]}>
        <Card p={4}>
          <Heading>Uutishuone</Heading>
          {isLoading && "Ladataan uutisia..."}
          {filteredFeedItems.map((feedItem, index) => (
            <NewsFeedItem
              feedItem={feedItem}
              key={`${feedItem.feedId}-${index}`}
            />
          ))}
        </Card>
      </Box>
      <Box>
        <Card>
          <Heading>Feeds</Heading>
          <Text>{JSON.stringify(feeds)}</Text>
        </Card>
      </Box>
    </Flex>
  );
};

export default Uutishuone;
