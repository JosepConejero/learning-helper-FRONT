import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import MainQuestionBody from "./MainQuestionBody";

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

describe("Given a MainQuestionBody component and an id", () => {
  describe("When it's rendered with id = 1", () => {
    test("then it should show a button 'SAVE'", () => {
      const id = 1;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <MainQuestionBody idQuestion={id}></MainQuestionBody>
          </Provider>
        </BrowserRouter>
      );

      const button = screen.getByRole("button", { name: "SAVE" });
      expect(button).toBeInTheDocument();
    });
  });
});

describe("Given a component MainQuestionBody with a button and with no id", () => {
  describe("When it is clicked", () => {
    test("It should do the action given", async () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <MainQuestionBody></MainQuestionBody>
          </Provider>
        </BrowserRouter>
      );

      userEvent.type(screen.getByTitle("question"), "loquesea");
      userEvent.type(screen.getByTitle("answer"), "loquesea");

      const button = screen.getByRole("button", { name: "SAVE" });
      userEvent.click(button);

      await waitFor(() => {
        expect(mockUseDispatch).toHaveBeenCalled();
      });
    });
  });
});

describe("Given a MainQuestionBody component without id", () => {
  describe("When it's rendered with id = 1", () => {
    test("then it should show a button 'SAVE'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <MainQuestionBody></MainQuestionBody>
          </Provider>
        </BrowserRouter>
      );

      const button = screen.getByRole("button", { name: "SAVE" });
      expect(button).toBeInTheDocument();
    });
  });
});

describe("Given a component MainQuestionBody with a button and an id", () => {
  describe("When it is clicked", () => {
    test("It should do the action given", async () => {
      const id = 1;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <MainQuestionBody idQuestion={id}></MainQuestionBody>
          </Provider>
        </BrowserRouter>
      );

      userEvent.type(screen.getByTitle("question"), "loquesea");
      userEvent.type(screen.getByTitle("answer"), "loquesea");

      const button = screen.getByRole("button", { name: "SAVE" });
      userEvent.click(button);

      await waitFor(() => {
        expect(mockUseDispatch).toHaveBeenCalled();
      });
    });
  });
});

describe("Given a component MainQuestionBody with a button ADD/REMOVE and id", () => {
  describe("When it is clicked", () => {
    test("It shouldn't do the action given", async () => {
      const id = 1;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <MainQuestionBody idQuestion={id}></MainQuestionBody>
          </Provider>
        </BrowserRouter>
      );

      userEvent.type(screen.getByTitle("question"), "loquesea");
      userEvent.type(screen.getByTitle("answer"), "loquesea");

      const button = screen.getByRole("button", {
        name: "ADD/REMOVE FROM LIST",
      });
      userEvent.click(button);

      await waitFor(() => {
        expect(mockUseDispatch).toHaveBeenCalled();
      });
    });
  });
});
