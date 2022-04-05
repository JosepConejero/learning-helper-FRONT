import { render, screen } from "@testing-library/react";
import ReviewPage from "./ReviewPage";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import {
  alternativeTextIconReview,
  alternativeTextBackIcon,
  alternativeTextHomeIcon,
  alternativeTextAddIcon,
} from "../../variables";

describe("Given a component ReviewPage", () => {
  describe("When it's rendered", () => {
    test("it should render 4 images", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ReviewPage></ReviewPage>
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
            <ReviewPage></ReviewPage>
          </Provider>
        </BrowserRouter>
      );

      const expectedAlternativeTextIconReview = screen.getByAltText(
        alternativeTextIconReview
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
      expect(expectedAlternativeTextIconReview).toBeInTheDocument();
      expect(expectedAlternativeTextBackIcon).toBeInTheDocument();
      expect(expectedAlternativeTextHomeIcon).toBeInTheDocument();
      expect(expectedAlternativeTextAddIcon).toBeInTheDocument();
    });
  });
});
