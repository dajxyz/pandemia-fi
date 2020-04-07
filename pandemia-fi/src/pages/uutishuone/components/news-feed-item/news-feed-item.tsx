import React from "react";
import { Link, Box, Text, Heading } from "rebass";

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
      <Box
        p={2}
        sx={{
          borderBottom: "1pt dashed #000",
          backgroundColor: "#fff",
        }}
      >
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
          // color="gray"
          sx={{
            lineHeight: "18px",
            color: "#1e4454",
          }}
        >
          {feedItem.description}
        </Text>
        <Text className="NewsFeedItem__date" fontSize={[1, 1, 2]} color="gray">
          {feedItem.dateTime.format("D.M.YYYY HH:mm:ss")}
        </Text>
      </Box>
    </Link>
  );
};

export default NewsFeedItem;
