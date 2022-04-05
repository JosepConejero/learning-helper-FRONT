import oneQuestionReducer from "./oneQuestionReducer";

describe("Given a oneQuestionReducer function", () => {
  describe("When it's called with action type loadOneQuestion and passed a question and an action", () => {
    test("Then it should return a question", () => {
      const question = { id: 1, question: "Pregunta 1" };
      const action = {
        type: "load-one-question",
        question: question,
      };

      const newState = oneQuestionReducer(question, action);
      const expectedNewState = { id: 1, question: "Pregunta 1" };

      expect(newState).toEqual(expectedNewState);
    });
  });

  describe("When it's called with action type loadOneQuestion and passed an action and no question", () => {
    test("Then it should return a new state equal to currentstate", () => {
      const question = {};
      const action = {
        type: "load-one-question",
        question: question,
      };

      const newState = oneQuestionReducer(question, action);
      const expectedNewState = {};

      expect(newState).toEqual(expectedNewState);
    });
  });

  describe("When it's called with action type loadOneQuestion and passed a question and no action", () => {
    test("Then it should return a new state equal to currentstate", () => {
      const question = { id: 1, question: "Pregunta 1" };

      const newState = oneQuestionReducer(question);
      const expectedNewState = { id: 1, question: "Pregunta 1" };

      expect(newState).toEqual(expectedNewState);
    });
  });

  describe("When it's called with action type loadOneQuestion and passed a question and an empty action", () => {
    test("Then it should return a new state equal to currentstate", () => {
      const question = { id: 1, question: "Pregunta 1" };
      const action = {};

      const newState = oneQuestionReducer(question, action);
      const expectedNewState = { id: 1, question: "Pregunta 1" };

      expect(newState).toEqual(expectedNewState);
    });
  });

  describe("When it's called with action type loadOneQuestion and passed no action an no question", () => {
    test("Then it should return a new state equal to currentstate", () => {
      const newState = oneQuestionReducer();
      const expectedNewState = {};

      expect(newState).toEqual(expectedNewState);
    });
  });

  describe("When it's called with action type loadOneQuestion and passed empty action and empty question", () => {
    test("Then it should return a new state equal to currentstate", () => {
      const question = {};
      const action = {};

      const newState = oneQuestionReducer(question, action);
      const expectedNewState = {};

      expect(newState).toEqual(expectedNewState);
    });
  });
});
