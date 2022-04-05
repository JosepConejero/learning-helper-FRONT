import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import {
  alternativeTextBackIcon,
  alternativeTextHomeIcon,
  alternativeTextAddIcon,
} from "../../variables";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import userEvent from "@testing-library/user-event";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given Footer component", () => {
  describe("When it's rendered", () => {
    test("then it should show 3 images with alternative texts", () => {
      render(
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
      );
      const backIcon = screen.getByRole("img", {
        name: alternativeTextBackIcon,
      });
      const homeIcon = screen.getByRole("img", {
        name: alternativeTextHomeIcon,
      });
      const addIcon = screen.getByRole("img", {
        name: alternativeTextAddIcon,
      });
      expect(backIcon).toBeInTheDocument();
      expect(homeIcon).toBeInTheDocument();
      expect(addIcon).toBeInTheDocument();
    });
  });

  describe("When the back button is clicked", () => {
    test("Then it should invoke a function", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Footer />
          </Provider>
        </BrowserRouter>
      );

      const backButton = screen.getByRole("img", {
        name: alternativeTextBackIcon,
      });
      userEvent.click(backButton);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });

  describe("When the home button is clicked", () => {
    test("Then it should invoke a function", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Footer />
          </Provider>
        </BrowserRouter>
      );

      const homeButton = screen.getByRole("img", {
        name: alternativeTextHomeIcon,
      });
      userEvent.click(homeButton);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });

  describe("When the add button is clicked", () => {
    test("Then it should invoke a function", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Footer />
          </Provider>
        </BrowserRouter>
      );

      const addButton = screen.getByRole("img", {
        name: alternativeTextAddIcon,
      });
      userEvent.click(addButton);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
