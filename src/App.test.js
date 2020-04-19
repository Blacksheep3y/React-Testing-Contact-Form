import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

test("renders labels for inputs", () => {
  const containerForm = render(<App />);
  containerForm.queryByTestId("first-name-label");
  containerForm.queryByTestId("last-name-label");
  containerForm.queryByTestId("email-label");
  containerForm.queryByTestId("messages-label");
});

// I Was gonna test more stuff, but the lecture only showed us how to find something byText or TestId byQueryText etc. etc. and that is not helpful to what I want to test so yeah.