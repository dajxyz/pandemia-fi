import React from "react";
import { Box, Text } from "rebass";

interface SidebarItemProps {
  feed: Feed;
}

/**
 * Sidebar item
 *
 * @param {*} { feed }
 * @returns
 */
const SidebarItem: React.FunctionComponent<SidebarItemProps> = ({ feed }) => {
  return (
    <Box py={3}>
      <Text fontSize={[1, 1, 2]} color="gray">
        {feed.title}
      </Text>
    </Box>
  );
};

export default SidebarItem;
