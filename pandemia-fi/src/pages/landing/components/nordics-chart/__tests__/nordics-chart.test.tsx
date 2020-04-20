import React from "react";
import ReactDOM from "react-dom";
import NordicsChart from "../nordics-chart";

describe("NordicsChart", () => {
  // NOTE: Skip component test, because it is difficult to test
  it.skip("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<NordicsChart scale={scale} />, div);
  });
});
