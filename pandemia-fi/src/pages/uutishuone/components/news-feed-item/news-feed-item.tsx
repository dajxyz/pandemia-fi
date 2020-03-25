import React from "react";
import { Link, Box, Text, Heading } from "rebass";

interface NewsFeedItemProps {
  feedItem: FeedItem;
}

/**
 * News feed item
 */
const NewsFeedItem: React.FunctionComponent<NewsFeedItemProps> = ({
  feedItem
}) => {
  return (
    <Link href={feedItem.link} target="_blank" rel="noreferrer noopener">
      <Box py={3}>
        <Heading fontSize={[2, 2, 2]}>
          {feedItem.title}
        </Heading>
        <Text fontSize={[1, 1, 2]} color="gray">
          {feedItem.description}
        </Text>
        <Text fontSize={[1, 1, 2]} color="gray">
          {feedItem.dateTime.format("D.M.YYYY")}
        </Text>
      </Box>
    </Link>
  );
};

export default NewsFeedItem;
