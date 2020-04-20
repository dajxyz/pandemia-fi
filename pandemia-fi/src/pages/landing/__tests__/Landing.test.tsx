import React from "react";
import ReactDOM from "react-dom";
import Landing from "../landing";

describe("Landing", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Landing />, div);
  });
});
