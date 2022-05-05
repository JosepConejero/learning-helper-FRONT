import { createUserThunk, loginThunk } from "./userThunk";
import { server } from "../../mocks/server";

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe("Given a loginThunk function", () => {
  describe("When it's called", () => {
    test("Then it should dispatch a function", async () => {
      const user = { username: "qwer", password: "qwer" };

      jest.mock("axios");
      const dispatch = jest.fn();

      const navigate = jest.fn();

      const login = loginThunk(user, navigate);
      await login(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a createUserThunk function", () => {
  describe("When it's called", () => {
    test("Then it should dispatch a function", async () => {
      const user = { name: "qwer3", username: "qwer3", password: "qwer3" };

      jest.mock("axios");
      const dispatch = jest.fn();

      const navigate = jest.fn();

      const createUser = createUserThunk(user, navigate);
      await createUser(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
