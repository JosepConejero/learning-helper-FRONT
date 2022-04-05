import createUserReducer from "./createUserReducer";

describe("Given a createUserReducer", () => {
  describe("When it receives an array of users and and action create-user with a new user", () => {
    test("Then it should return an array with the new user included", () => {
      const users = [
        { id: 1, username: "josep" },
        { id: 2, username: "cilantro" },
      ];
      const newUser = { id: 3, username: "trufa" };
      const action = {
        type: "create-user",
        user: newUser,
      };

      const newState = createUserReducer(users, action);
      const expectedNewState = [
        { id: 1, username: "josep" },
        { id: 2, username: "cilantro" },
        { id: 3, username: "trufa" },
      ];

      expect(newState).toEqual(expectedNewState);
    });
  });

  describe("When it receives an array of users and no action", () => {
    test("Then it should return the same array of users", () => {
      const users = [
        { id: 1, username: "josep" },
        { id: 2, username: "cilantro" },
      ];

      const action = {};

      const newState = createUserReducer(users, action);
      const expectedNewState = [
        { id: 1, username: "josep" },
        { id: 2, username: "cilantro" },
      ];

      expect(newState).toEqual(expectedNewState);
    });
  });

  describe("When it receives an array of users and an action create-user and an empty user", () => {
    test("Then it should return the same array of users", () => {
      const users = [
        { id: 1, username: "josep" },
        { id: 2, username: "cilantro" },
      ];
      const action = {
        type: "create-user",
      };

      const newState = createUserReducer(users, action);
      const expectedNewState = [
        { id: 1, username: "josep" },
        { id: 2, username: "cilantro" },
      ];

      expect(newState).toEqual(expectedNewState);
    });
  });

  describe("When it receives no array of users and no action", () => {
    test("Then it should return an empty array", () => {
      const newState = createUserReducer();
      const expectedNewState = [];

      expect(newState).toEqual(expectedNewState);
    });
  });
});
