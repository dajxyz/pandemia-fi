import React from "react";
import ReactDOM from "react-dom";
import Tietopankki from "../tietopankki";

describe("Tietopankki", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Tietopankki />, div);
  });
});
