import React from "react";
import ReactDOM from "react-dom";
import Person from "../Person";

describe("Person", () => {
  describe("without required properties", () => {
    it("renders without crashing", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Person />, div);
    });
  });
  describe("with required properties", () => {
    it("renders without crashing with empty name", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Person name="" />, div);
    });
    it("renders without crashing with an example name and contents", () => {
      const div = document.createElement("div");
      ReactDOM.render(
        <Person name="Firstname Lastname">Example introduction</Person>,
        div
      );
    });
  });
});
