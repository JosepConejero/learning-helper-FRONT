import { render, screen } from "@testing-library/react";
import AllQuestionsPage from "./AllQuestionsPage";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import {
  alternativeTextIconAllQuestions,
  alternativeTextBackIcon,
  alternativeTextHomeIcon,
  alternativeTextAddIcon,
} from "../../variables";
import { server } from "../../mocks/server";

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe("Given a component AllQuestionsPage", () => {
  describe("When it's rendered", () => {
    test("it should render 4 images", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <AllQuestionsPage></AllQuestionsPage>
          </Provider>
        </BrowserRouter>
      );

      const logo = screen.getAllByRole("img");

      expect(logo.length).toBe(4);
    });

    test("it should render 4 alternativeTextIcons", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <AllQuestionsPage></AllQuestionsPage>
          </Provider>
        </BrowserRouter>
      );

      const expectedAlternativeTextIconAllQuestions = screen.getByAltText(
        alternativeTextIconAllQuestions
      );
      const expectedAlternativeTextBackIcon = screen.getByAltText(
        alternativeTextBackIcon
      );
      const expectedAlternativeTextHomeIcon = screen.getByAltText(
        alternativeTextHomeIcon
      );
      const expectedAlternativeTextAddIcon = screen.getByAltText(
        alternativeTextAddIcon
      );
      expect(expectedAlternativeTextIconAllQuestions).toBeInTheDocument();
      expect(expectedAlternativeTextBackIcon).toBeInTheDocument();
      expect(expectedAlternativeTextHomeIcon).toBeInTheDocument();
      expect(expectedAlternativeTextAddIcon).toBeInTheDocument();
    });
  });

  //test d'integració
  describe("When it's rendered and the API has 2 questions", () => {
    test("it should render the 2 questions", async () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <AllQuestionsPage></AllQuestionsPage>
          </Provider>
        </BrowserRouter>
      );

      const text = await screen.findByText("Question 1");
      const text2 = await screen.findByText("Question 2");
      const text3 = screen.queryByText("Question 3");

      expect(text).toBeInTheDocument();
      expect(text2).toBeInTheDocument();
      expect(text3).not.toBeInTheDocument();
    });
  });
});
