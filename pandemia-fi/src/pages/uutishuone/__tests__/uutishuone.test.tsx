import React from "react";
import ReactDOM from "react-dom";
import Uutishuone from "../uutishuone";

describe("Uutishuone", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Uutishuone />, div);
  });
});
