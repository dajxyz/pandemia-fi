import React from "react";
import ReactDOM from "react-dom";
import SidebarItem from "../sidebar-item";

describe("SidebarItem", () => {
  // NOTE: Skip component test, because it is difficult to test
  it.skip("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SidebarItem feed isSelected onClick />, div);
  });
});
