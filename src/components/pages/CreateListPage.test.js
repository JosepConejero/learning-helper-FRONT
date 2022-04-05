import { render, screen } from "@testing-library/react";
import CreateListPage from "./CreateListPage";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import {
  alternativeTextBackIcon,
  alternativeTextHomeIcon,
  alternativeTextAddIcon,
} from "../../variables";

describe("Given a component CreateListPage", () => {
  describe("When it's rendered", () => {
    test("it should render 4 images", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <CreateListPage></CreateListPage>
          </Provider>
        </BrowserRouter>
      );

      const logo = screen.getAllByRole("img");

      expect(logo.length).toBe(3);
    });

    test("it should render 3 alternativeTextIcons", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <CreateListPage></CreateListPage>
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
