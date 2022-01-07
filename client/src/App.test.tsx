import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const loadingElement = screen.getByText(
      "Loading Web3, accounts, and contract..."
  );
  expect(loadingElement).toBeInTheDocument();
});
