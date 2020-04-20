import React from "react";
import ReactDOM from "react-dom";
import HeroChartCard from "../hero-chart-card";

describe("HeroChartCard", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<HeroChartCard />, div);
  });
});
