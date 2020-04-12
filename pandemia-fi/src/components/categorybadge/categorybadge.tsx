import React from "react";
import { Box, Link } from "rebass";

interface BadgeProps {
  title: string;
  href?: string;
  image?: string;
  imageAlt?: string;
  color?: string;
  bg?: string;
  border?: string;
}

/**
 * Badge component for labeling content
 */
const CategoryBadge: React.FunctionComponent<BadgeProps> = ({
  title,
  href,
  image,
  imageAlt,
  color,
  bg,
  border,
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
          color: color || "black",
          bg: bg || "white",
          border: `1pt solid ${border || "#aaa"}`,
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

export default CategoryBadge;
