import React from "react";
import ReactDOM from "react-dom";
import SearchBox from "../SearchBox";

describe("SearchBox", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SearchBox />, div);
  });
});
