import { render, screen, waitFor } from "@testing-library/react";
import { RegisterPage } from "./RegisterPage";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import userEvent from "@testing-library/user-event";

const mockUseDispatch = jest.fn();
const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

jest.mock("react-redux", () => {
  return {
    ...jest.requireActual("react-redux"),
    useDispatch: () => mockUseDispatch,
  };
});

describe("Given a component RegisterPage", () => {
  describe("When it's rendered", () => {
    test("it should render 2 images", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterPage></RegisterPage>
          </Provider>
        </BrowserRouter>
      );

      const logo = screen.getAllByRole("img");

      expect(logo.length).toBe(2);
    });

    test("it should render 1 button", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterPage></RegisterPage>
          </Provider>
        </BrowserRouter>
      );

      const buttonsRendered = screen.getAllByRole("button", {
        name: "REGISTER",
      });

      expect(buttonsRendered.length).toBe(1);
    });
  });
});

describe("Given a component RegisterPage with a button", () => {
  describe("When it is clicked", () => {
    test("It should do the action given", async () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterPage></RegisterPage>
          </Provider>
        </BrowserRouter>
      );

      userEvent.type(screen.getByLabelText("NAME"), "NAME");
      userEvent.type(screen.getByLabelText("USERNAME"), "USERNAME");
      userEvent.type(screen.getByLabelText("PASSWORD"), "PASSWORD");

      const button = screen.getByRole("button", { name: "REGISTER" });
      userEvent.click(button);

      await waitFor(() => {
        expect(mockUseDispatch).toHaveBeenCalled();
      });
    });
  });

  describe("When the back button is clicked", () => {
    test("Then it should invoke a function", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterPage></RegisterPage>
          </Provider>
        </BrowserRouter>
      );

      const backButton = screen.getByRole("img", {
        name: "Arrow backwards",
      });
      userEvent.click(backButton);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
