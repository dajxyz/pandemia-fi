import React from "react";
import { Card, Heading, Flex, Box, Button } from "rebass";
import { SpinnerBlock } from "../../components/spinner";
import NewsFeedItem from "./components/news-feed-item";
import SidebarItem from "./components/sidebar-item";
import fetchAllFeedsAndItems from "././../../lib/feeds-api";

const PAGE_SIZE = 10;

type SelectedFeedIds = { [key: number]: boolean };

const UutishuoneStyle = {
  py: 2,
};

/**
 * Uutishuone section of the website
 */
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
      [feedId]: !selectedFeedIds[feedId],
    });
    setPageNumber(1);
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

  const hasActiveFilters = React.useMemo(() => {
    return Object.values(selectedFeedIds).some(Boolean);
  }, [selectedFeedIds]);

  const filteredFeedItem = React.useMemo(() => {
    if (!hasActiveFilters) {
      return feedItems;
    }
    return feedItems.filter((item) => selectedFeedIds[item.feedId]);
  }, [feedItems, selectedFeedIds, hasActiveFilters]);

  const paginatedFilteredFeedItems = React.useMemo(() => {
    return filteredFeedItem.slice(0, PAGE_SIZE * pageNumber);
  }, [filteredFeedItem, pageNumber]);

  const renderContent = () => (
    <>
      {paginatedFilteredFeedItems.map((feedItem, index) => (
        <NewsFeedItem feedItem={feedItem} key={`${feedItem.feedId}-${index}`} />
      ))}
      <Flex justifyContent="center">
        <Box>
          <Button
            variant="outline"
            onClick={() => setPageNumber(pageNumber + 1)}
            sx={{
              cursor: "pointer",
            }}
          >
            Näytä lisää
          </Button>
        </Box>
      </Flex>
    </>
  );

  return (
    <Flex flexWrap="wrap" flexDirection="row-reverse" sx={UutishuoneStyle}>
      <Box p={2} width={["100%", "100%", "30%"]}>
        <Card p={3}>
          <Heading>Feeds</Heading>
          {feeds.map((feed) => (
            <SidebarItem
              feed={feed}
              isSelected={!hasActiveFilters || !!selectedFeedIds[feed.id]}
              onClick={() => toggleSelectedFeedId(feed.id)}
              key={feed.id}
            />
          ))}
        </Card>
      </Box>
      <Box p={2} width={["100%", "100%", "70%"]}>
        <Card p={3}>
          <Heading>Uutishuone</Heading>
          {isLoading && <SpinnerBlock />}
          {!isLoading && renderContent()}
        </Card>
      </Box>
    </Flex>
  );
};

export default Uutishuone;
