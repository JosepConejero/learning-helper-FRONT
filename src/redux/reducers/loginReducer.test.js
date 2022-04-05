import loginReducer from "./loginReducer";

describe("Given a loginReducer", () => {
  describe("When it receives a user and and action login-user", () => {
    test("Then it should return the user", () => {
      const user = {};
      const expectedUser = {
        isLogged: true,
        username: "josep",
        password: "josep",
      };
      const action = {
        type: "login-user",
        user: expectedUser,
      };

      const newUser = loginReducer(user, action);

      expect(newUser).toEqual(expectedUser);
    });
  });

  describe("When it doesn't receives any action and any user", () => {
    test("Then it should return an empty user with isLogged = false", () => {
      const newUser = loginReducer();

      expect(newUser).toEqual({ isLogged: false });
    });
  });

  describe("When it receives a user and and action logout-user", () => {
    test("Then it should return the user", () => {
      const user = { isLogged: true, username: "josep", password: "josep" };
      const expectedUser = {
        isLogged: false,
      };
      const action = {
        type: "logout-user",
        user: expectedUser,
      };

      const newUser = loginReducer(user, action);

      expect(newUser).toEqual(expectedUser);
    });
  });
});
