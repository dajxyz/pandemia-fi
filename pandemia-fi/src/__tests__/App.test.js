import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  test.skip("renders Pandemia.fi link in the page", () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Pandemia.fi/i);
    expect(linkElement).toBeInTheDocument();
  });
});
