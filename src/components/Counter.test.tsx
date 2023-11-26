import { act, render, screen } from "@testing-library/react";
import { Counter } from "./Counter";
import userEvent from "@testing-library/user-event";

describe("Counter app test cases", () => {
  test("renders the counter app to zero", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  test("renders the increment and decrement button elements in app", () => {
    render(<Counter />);
    const incrementButton = screen.getByRole("button", {
      name: /increment/i,
    });
    expect(incrementButton).toBeInTheDocument();

    const decrementButton = screen.getByRole("button", {
      name: /decrement/i,
    });
    expect(decrementButton).toBeInTheDocument();
  });

  test("renders the count to 1 after button click", async () => {
    render(<Counter />);
    const buttonElement = screen.getByRole("button", {
      name: /increment/i,
    });
    expect(buttonElement).toBeInTheDocument();
    await act(() => {
      userEvent.click(buttonElement);
    });
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });

  test("renders the count to 2 after two button clicks", async () => {
    render(<Counter />);

    const buttonElement = screen.getByRole("button", { name: /increment/i });
    expect(buttonElement).toBeInTheDocument();
    await act(() => {
      userEvent.click(buttonElement);
    });
    const countElement1 = screen.getByRole("heading");
    expect(countElement1).toHaveTextContent("1");

    await act(() => {
      userEvent.click(buttonElement);
    });
    const countElement2 = screen.getByRole("heading");
    expect(countElement2).toHaveTextContent("2");
  });

  test("renders the count to -1 after decrement button click", async () => {
    render(<Counter />);
    const decrementButton = screen.getByRole("button", { name: /decrement/i });
    expect(decrementButton).toBeInTheDocument();
    await act(() => {
      userEvent.click(decrementButton);
    });
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("-1");
  });
});
