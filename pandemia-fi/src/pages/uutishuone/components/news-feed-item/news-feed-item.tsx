import React from "react";
import { Flex, Box, Text, Heading, Link } from "rebass";

interface NewsFeedItemProps {
  feedItem: FeedItem;
}

/**
 * News feed item
 */
const NewsFeedItem: React.FunctionComponent<NewsFeedItemProps> = ({
  feedItem,
}) => {
  return (
    <Link
      className="NewsFeedItem"
      href={feedItem.link}
      target="_blank"
      rel="noreferrer noopener"
    >
      <Flex
        sx={{
          p: 2,
          borderBottom: "1pt dashed #000",
          backgroundColor: "#fff",
          maxWidth: "100%",
        }}
      >
        <Box>
          <Heading
            className="NewsFeedItem__title"
            fontSize={[2, 2, 2]}
            sx={{
              color: "#1e4454",
            }}
          >
            {feedItem.title}
          </Heading>
          <Text
            className="NewsFeedItem__description"
            fontSize={[1, 1, 2]}
            sx={{
              lineHeight: "18px",
              color: "#1e4454",
            }}
          >
            {feedItem.description}
          </Text>
        </Box>
        <Box
          sx={{
            px: 1,
            backgroundColor: "#fff",
            minWidth: "10ex",
          }}
        >
          <Text
            className="NewsFeedItem__date"
            fontSize={[1, 1, 2]}
            sx={{
              color: "#3A6579",
              textAlign: "right",
            }}
          >
            {feedItem.dateTime.format("D.M.YYYY HH:mm:ss")}
          </Text>
        </Box>
      </Flex>
    </Link>
  );
};

export default NewsFeedItem;
