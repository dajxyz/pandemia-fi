import React from "react";
import ReactDOM from "react-dom";
import FinlandAndEUChart from "../finland-and-eu-chart";

describe("FinlandAndEUChart", () => {
  // NOTE: Skip component test, because it is difficult to test
  it.skip("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<FinlandAndEUChart scale={scale} />, div);
  });
});
