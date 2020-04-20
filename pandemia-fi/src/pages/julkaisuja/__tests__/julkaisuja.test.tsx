import React from "react";
import ReactDOM from "react-dom";
import Julkaisuja from "../julkaisuja";

describe("Julkaisuja", () => {
  it.skip("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Julkaisuja />, div);
  });
});
