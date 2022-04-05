import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ButtonImage from "./ButtonImage";

describe("Given a ButtonImage Component", () => {
  describe("When it is clicked", () => {
    test("It should do the action given", () => {
      const action = jest.fn();

      render(<ButtonImage actionOnClick={action} />);

      const button = screen.getByRole("button");

      userEvent.click(button);

      expect(action).toHaveBeenCalled();
    });
  });
  describe("When is rendered", () => {
    test("It should render a button", () => {
      render(<ButtonImage />);

      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
    });

    test("It should render an image", () => {
      const image = "img/lists.svg";

      render(<ButtonImage image={image} />);

      const button = screen.getByRole("img");

      expect(button).toBeInTheDocument();
    });
    test("It should have an alternative text to image", () => {
      const imageAlt = "another image";

      render(<ButtonImage imageAlt={imageAlt} />);

      const button = screen.getByRole("img");

      expect(button).toBeInTheDocument();
    });
  });
});
