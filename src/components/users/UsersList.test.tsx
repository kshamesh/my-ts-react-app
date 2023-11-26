import { screen, render } from "@testing-library/react";
import { UsersList } from "./UsersList";

describe("Testing UsersList Component", () => {
  test("render UsersList Correctly", () => {
    render(<UsersList />);
    const textElement = screen.getByRole("heading");
    expect(textElement).toBeInTheDocument();
  });

  test("renders list of users", async () => {
    render(<UsersList />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(3);
  });
});
