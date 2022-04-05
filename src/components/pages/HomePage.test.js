import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import userEvent from "@testing-library/user-event";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a component HomePage", () => {
  describe("When it's rendered", () => {
    test("it should render 5 images", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <HomePage></HomePage>
          </Provider>
        </BrowserRouter>
      );

      const logo = screen.getAllByRole("img");

      expect(logo.length).toBe(5);
    });

    test("it should render a title", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <HomePage></HomePage>
          </Provider>
        </BrowserRouter>
      );

      const title = screen.getByAltText("Application Icon. Screen and books.");

      expect(title).toBeInTheDocument();
    });
  });

  describe("When the lists button is clicked", () => {
    test("Then it should invoke a function", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <HomePage></HomePage>
          </Provider>
        </BrowserRouter>
      );

      const listsButton = screen.getByRole("button", {
        name: "Several lists LISTS",
      });
      userEvent.click(listsButton);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });

  describe("When the all questions button is clicked", () => {
    test("Then it should invoke a function", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <HomePage></HomePage>
          </Provider>
        </BrowserRouter>
      );

      const allQuestionsButton = screen.getByRole("button", {
        name: "A shelving with books ALL QUESTIONS",
      });
      userEvent.click(allQuestionsButton);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });

  describe("When the question button is clicked", () => {
    test("Then it should invoke a function", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <HomePage></HomePage>
          </Provider>
        </BrowserRouter>
      );

      const questionButton = screen.getByRole("button", {
        name: "Two screens and a pencil CREATE A QUESTION",
      });
      userEvent.click(questionButton);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });

  describe("When the review button is clicked", () => {
    test("Then it should invoke a function", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <HomePage></HomePage>
          </Provider>
        </BrowserRouter>
      );

      const reviewButton = screen.getByRole("button", {
        name: "A notebook with a pencil REVIEW",
      });
      userEvent.click(reviewButton);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });

  describe("When the logout button is clicked", () => {
    test("Then it should invoke a function", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <HomePage></HomePage>
          </Provider>
        </BrowserRouter>
      );

      const logoutButton = screen.getByRole("button", {
        name: "LOG OUT",
      });
      userEvent.click(logoutButton);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
