import React from "react";
import { Flex, Box, Text } from "rebass";

interface SidebarItemProps {
  feed: Feed;
  isSelected: boolean;
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
  isSelected,
  onClick,
}) => {
  return (
    <Flex py={1}>
      <Box
        sx={{
          cursor: "pointer",
          borderLeftWidth: "4px",
          paddingLeft: "8px",
          borderLeftColor: feed.color,
          borderLeftStyle: "solid",
          opacity: isSelected ? 1 : 0.6,
        }}
      >
        <Text fontSize={[1, 1, 2]} color="gray" onClick={onClick}>
          {feed.title}
        </Text>
      </Box>
    </Flex>
  );
};

export default SidebarItem;
