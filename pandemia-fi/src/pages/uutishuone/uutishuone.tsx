import React from "react";
import { Card, Heading, Flex, Box, Button } from "rebass";
import NewsFeedItem from "./components/news-feed-item";
import SidebarItem from "./components/sidebar-item";
import fetchAllFeedsAndItems from "././../../lib/feeds-api";

const PAGE_SIZE = 10;

type SelectedFeedIds = { [key: number]: boolean };

const Uutishuone: React.FunctionComponent = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [feeds, setFeeds] = React.useState<Feed[]>([]);
  const [feedItems, setFeedItems] = React.useState<FeedItem[]>([]);
  const [pageNumber, setPageNumber] = React.useState<number>(1);
  const [selectedFeedIds, setSelectedFeedIds] = React.useState<SelectedFeedIds>(
    {}
  );

  const toggleSelectedFeedId = (feedId: number) => {
    setSelectedFeedIds({
      ...selectedFeedIds,
      [feedId]: !selectedFeedIds[feedId]
    });
  };

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
    return feedItems.slice(0, PAGE_SIZE * pageNumber);
  }, [feedItems, pageNumber]);

  return (
    <Flex flexWrap="wrap">
      <Box width={["100%", "100%", "70%"]}>
        <Card p={4} mr={16}>
          <Heading as="h1" fontSize={[4, 5]}>
            Uutishuone
          </Heading>
          {isLoading && "Ladataan uutisia..."}
          {filteredFeedItems.map((feedItem, index) => (
            <NewsFeedItem
              feedItem={feedItem}
              key={`${feedItem.feedId}-${index}`}
            />
          ))}
          <Flex justifyContent="center">
            <Box>
              <Button
                variant="outline"
                onClick={() => setPageNumber(pageNumber + 1)}
                sx={{
                  cursor: "pointer"
                }}
              >
                Näytä lisää
              </Button>
            </Box>
          </Flex>
        </Card>
      </Box>
      <Box width={["100%", "100%", "30%"]}>
        <Card>
          <Heading>Feeds</Heading>
          {feeds.map(feed => (
            <SidebarItem
              feed={feed}
              onClick={() => toggleSelectedFeedId(feed.id)}
              key={feed.id}
            />
          ))}
        </Card>
      </Box>
    </Flex>
  );
};

export default Uutishuone;
