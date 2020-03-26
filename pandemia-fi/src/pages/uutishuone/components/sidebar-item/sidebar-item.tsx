import React from "react";
import { Box, Text } from "rebass";

interface SidebarItemProps {
  feed: Feed;
  onClick: () => void;
}

/**
 * Sidebar item
 *
 * @param {*} { feed }
 * @returns
 */
const SidebarItem: React.FunctionComponent<SidebarItemProps> = ({
  feed,
  onClick
}) => {
  return (
    <Box py={3}>
      <Text fontSize={[1, 1, 2]} color="gray" onClick={onClick}>
        {feed.title}
      </Text>
    </Box>
  );
};

export default SidebarItem;
