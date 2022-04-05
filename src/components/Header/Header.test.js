import { render, screen } from "@testing-library/react";
import Header from "./Header";
import {
  textIconAllQuestions,
  iconAllQuestionsPath,
  backgroundColorIconAllQuestions,
  alternativeTextIconAllQuestions,
} from "../../variables";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given Header component", () => {
  describe("When it gets an image and 'Lists'", () => {
    test("then it should render an image with alternative text", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Header
              title={textIconAllQuestions}
              picture={iconAllQuestionsPath}
              backgroundColor={backgroundColorIconAllQuestions}
              alternativeTextImage={alternativeTextIconAllQuestions}
            ></Header>
          </Provider>
        </BrowserRouter>
      );

      const foundAlternativeText = screen.queryByAltText(
        "A shelving with books"
      );

      expect(foundAlternativeText).toBeInTheDocument();
    });
  });
});

describe("Given a component Header with a button", () => {
  describe("When it is clicked", () => {
    test("It should do the action given", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Header
              title={textIconAllQuestions}
              picture={iconAllQuestionsPath}
              backgroundColor={backgroundColorIconAllQuestions}
              alternativeTextImage={alternativeTextIconAllQuestions}
            ></Header>
          </Provider>
        </BrowserRouter>
      );

      const logoutButton = screen.getByRole("button", { name: "LOG OUT" });
      userEvent.click(logoutButton);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
