import React from "react";
import classnames from "classnames";
import "./link.css";

type LinkURL = string;
type LinkCurrentPage = boolean;
type LinkType = "primary" | "muted" | "header__brand" | "header__nav";

interface LinkProps {
  // onClick: () => void;
  href: LinkURL;
  type?: LinkType;
  currentpage?: LinkCurrentPage;
}

/**
 * Link component for the header navigation
 */
const Link: React.FunctionComponent<LinkProps> = ({
  type = "primary",
  href,
  currentpage,
  children
}) => {
  return (
    <a
      className={classnames("link", {
        "link--primary": type === "primary",
        "link--muted": type === "muted",
        "link--header__brand": type === "header__brand",
        "link--header__nav": type === "header__nav",
        "link--currentpage": currentpage === true
      })}
      href={ href }
    >
      {children}
    </a>
  );
};

export default Link;
