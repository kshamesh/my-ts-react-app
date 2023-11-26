import { render, screen } from "@testing-library/react";
import { GreetFunctionTS } from "./GreetFunctionTS";

test("Greet renders correctly", () => {
  render(<GreetFunctionTS firstName="Kshamesh" />);
  const textElement = screen.getByText(/Hello/i);
  expect(textElement).toBeInTheDocument();
});

test("Greet renders correctly with name", () => {
  render(<GreetFunctionTS firstName="Kshamesh" />);
  const textElement = screen.getByText(/Hello Kshamesh/i);
  expect(textElement).toBeInTheDocument();
});
