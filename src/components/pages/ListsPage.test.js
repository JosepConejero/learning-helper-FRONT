import { render, screen } from "@testing-library/react";
import ListsPage from "./ListsPage";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import {
  alternativeTextIconLists,
  alternativeTextBackIcon,
  alternativeTextHomeIcon,
  alternativeTextAddIcon,
} from "../../variables";

describe("Given a component ListsPage", () => {
  describe("When it's rendered", () => {
    test("it should render 4 images", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ListsPage></ListsPage>
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
            <ListsPage></ListsPage>
          </Provider>
        </BrowserRouter>
      );

      const expectedAlternativeTextIconLists = screen.getByAltText(
        alternativeTextIconLists
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
      expect(expectedAlternativeTextIconLists).toBeInTheDocument();
      expect(expectedAlternativeTextBackIcon).toBeInTheDocument();
      expect(expectedAlternativeTextHomeIcon).toBeInTheDocument();
      expect(expectedAlternativeTextAddIcon).toBeInTheDocument();
    });
  });
});
