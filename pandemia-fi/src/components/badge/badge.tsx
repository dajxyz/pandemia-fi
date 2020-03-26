import React from "react";
import { Box, Link, Text } from "rebass";

interface BadgeProps {
  title: string;
  href?: string;
  image?: string;
  imageAlt?: string;
}

/**
 * Badge component for labeling content
 */
const Badge: React.FunctionComponent<BadgeProps> = ({
  title,
  href,
  image,
  imageAlt,
  children,
}) => {
  return (
    <Link
      className="Badge"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        ":hover": {
          textDecoration: "underline",
        },
      }}
    >
      <Box
        sx={{
          display: "inline-block",
          color: "black",
          bg: "white",
          border: "1pt solid #aaa",
          fontSize: "10pt",
          px: 2,
          py: 1,
          borderRadius: 9999,
        }}
      >
        {title}
        {children}
      </Box>
    </Link>
  );
};

export default Badge;
