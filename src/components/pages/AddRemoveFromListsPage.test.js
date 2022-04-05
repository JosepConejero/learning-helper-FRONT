import { render, screen } from "@testing-library/react";
import AddRemoveFromListsPage from "./AddRemoveFromListsPage";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import {
  alternativeTextBackIcon,
  alternativeTextHomeIcon,
  alternativeTextAddIcon,
} from "../../variables";

describe("Given a component AddRemoveFromListsPage", () => {
  describe("When it's rendered", () => {
    test("it should render 4 images", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <AddRemoveFromListsPage></AddRemoveFromListsPage>
          </Provider>
        </BrowserRouter>
      );

      const logo = screen.getAllByRole("img");

      expect(logo.length).toBe(4);
    });

    test("it should render 3 alternativeTextIcons", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <AddRemoveFromListsPage></AddRemoveFromListsPage>
          </Provider>
        </BrowserRouter>
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

      expect(expectedAlternativeTextBackIcon).toBeInTheDocument();
      expect(expectedAlternativeTextHomeIcon).toBeInTheDocument();
      expect(expectedAlternativeTextAddIcon).toBeInTheDocument();
    });
  });
});
