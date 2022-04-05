import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import IconButton from "./IconButton";
import alternativeTextBackIcon from "../../variables";

describe("Given a IconButton component", () => {
  describe("When it's rendered", () => {
    test("then it should show 1 image", () => {
      render(
        <BrowserRouter>
          <IconButton
            src="img/back.png"
            alternativeText={"whatever"}
            actionOnClick={() => {}}
          ></IconButton>
        </BrowserRouter>
      );
      const image = screen.queryByRole("img");

      expect(image).toBeInTheDocument();
    });
  });

  describe("When it's instantiated with an action", () => {
    test("Then it should call an action function on click", () => {
      const action = jest.fn();

      render(
        <BrowserRouter>
          <IconButton
            src="img/back.png"
            alternativeText={alternativeTextBackIcon}
            actionOnClick={action}
          ></IconButton>
        </BrowserRouter>
      );
      const image = screen.queryByRole("img", {
        name: alternativeTextBackIcon,
      });

      userEvent.click(image);

      expect(action).toHaveBeenCalled();
    });
  });
});
