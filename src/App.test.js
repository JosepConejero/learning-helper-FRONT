import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./redux/store/store";

describe("Given a App component", () => {
  describe("When it's rendered", () => {
    test("Then it should render main", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      );

      const main = screen.getByRole("img", {
        name: "Application Icon. Screen and books.",
      });

      expect(main).toBeInTheDocument();
    });
  });
});
