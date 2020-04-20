import React from "react";
import ReactDOM from "react-dom";
import NumberMetricCard from "../number-metric-card";

describe("NumberMetricCard", () => {
  describe("without parameters", () => {
    // NOTE: Skip component test, because it is difficult to test
    it.skip("renders without crashing", () => {
      const div = document.createElement("div");
      ReactDOM.render(<NumberMetricCard />, div);
    });
  });
  describe("with parameters", () => {
    describe("without values", () => {
      it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<NumberMetricCard isLoading metric explainer />, div);
      });
    });
    describe("with some values", () => {
      it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(
          // TODO: This should be improved to add realistic data to the component
          <NumberMetricCard isLoading metric explainer="Tartuntoja Suomessa" />,
          div
        );
      });
    });
  });
});
