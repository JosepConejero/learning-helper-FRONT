import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import MainCreateListBody from "./MainCreateListBody";

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

describe("Given a MainCreateListBody component", () => {
  describe("When it's rendered", () => {
    test("then it should show 2 elements", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <MainCreateListBody></MainCreateListBody>
          </Provider>
        </BrowserRouter>
      );

      const button = screen.getByRole("button", { name: "SAVE" });
      expect(button).toBeInTheDocument();
    });
  });
});

describe("Given a component MainCreateListBody with a button", () => {
  describe("When it is clicked", () => {
    test("It should do the action given", async () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <MainCreateListBody></MainCreateListBody>
          </Provider>
        </BrowserRouter>
      );

      userEvent.type(screen.getByTitle("listName"), "loquesea");
      userEvent.type(screen.getByTitle("listSubject"), "loquesea");

      const button = screen.getByRole("button", { name: "SAVE" });
      userEvent.click(button);

      await waitFor(() => {
        expect(mockUseDispatch).toHaveBeenCalled();
      });
    });
  });
});
