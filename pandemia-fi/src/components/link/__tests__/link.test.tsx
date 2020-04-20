import React from "react";
import ReactDOM from "react-dom";
import Link from "../link";

describe("Link", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Link href="https://staging.pandemia.fi/">Link title</Link>,
      div
    );
  });
});
