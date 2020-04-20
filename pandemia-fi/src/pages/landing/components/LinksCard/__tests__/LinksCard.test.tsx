import React from "react";
import ReactDOM from "react-dom";
import LinksCard from "../LinksCard";

describe("LinksCard", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<LinksCard />, div);
  });
});
