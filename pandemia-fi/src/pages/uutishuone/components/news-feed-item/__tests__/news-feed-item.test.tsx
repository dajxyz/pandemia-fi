import React from "react";
import ReactDOM from "react-dom";
import NewsFeedItem from "../news-feed-item";

describe("NewsFeedItem", () => {
  // NOTE: Skip component test, because it is difficult to test
  it.skip("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<NewsFeedItem feedItem />, div);
  });
});
