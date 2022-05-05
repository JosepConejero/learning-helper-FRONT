import {
  loadQuestionsThunk,
  loadOneQuestionThunk,
  deleteQuestionThunk,
  addQuestionThunk,
  updateQuestionThunk,
} from "./questionsThunk";

import { server } from "../../mocks/server";

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe("Given a loadQuestionsThunk function", () => {
  describe("When it is called", () => {
    test("Then it should call the dispatch function", async () => {
      const dispatch = jest.fn();

      await loadQuestionsThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a loadOneQuestionThunk function", () => {
  describe("When it's called", () => {
    test("Then it should dispatch a function", async () => {
      const dispatch = jest.fn();

      const loadOneQuestion = loadOneQuestionThunk("6227b67fc624c56733927e2c");

      await loadOneQuestion(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a loadOneQuestionThunk function and an id that doesn't match", () => {
  describe("When it's called", () => {
    test("Then it should dispatch a function", async () => {
      const dispatch = jest.fn();
      const wrongID = "6227b67fc624c56733927e2f";

      const loadOneQuestion = loadOneQuestionThunk(wrongID);

      await loadOneQuestion(dispatch);

      expect(dispatch).not.toBeCalled();
    });
  });
});

describe("Given a deleteQuestionThunk function and an ID", () => {
  describe("When it's called", () => {
    test("Then it should dispatch a function", async () => {
      const dispatch = jest.fn();
      const ID = "6227b67fc624c56733927e2c";

      const deleteQuestion = deleteQuestionThunk(ID);

      await deleteQuestion(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a deleteQuestionThunk function and a wrong ID", () => {
  describe("When it's called", () => {
    test("Then it shouldn't dispatch a function", async () => {
      const dispatch = jest.fn();
      const wrongID = "6227b67fc624c56733927e2f";

      const deleteQuestion = deleteQuestionThunk(wrongID);

      await deleteQuestion(dispatch);

      expect(dispatch).not.toBeCalled();
    });
  });
});

describe("Given a addQuestionThunk function and a newQuestion", () => {
  describe("When it's called", () => {
    test("Then it should dispatch a function", async () => {
      const dispatch = jest.fn();

      const newQuestion = {
        question: "Question 3",
        answer: "Answer 3",
        username: "",
        questionsLists: [],
        id: "231",
      };

      const addQuestion = addQuestionThunk(newQuestion);

      await addQuestion(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a addQuestionThunk function and a wrong newQuestion", () => {
  describe("When it's called", () => {
    test("Then it shouldn't dispatch a function", async () => {
      const dispatch = jest.fn();
      const wrongQuestion = { wrong: "Question 3" };

      const addQuestion = addQuestionThunk(wrongQuestion);

      await addQuestion(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a updateQuestionThunk function and a changed question", () => {
  describe("When it's called", () => {
    test("Then it should dispatch a function", async () => {
      const dispatch = jest.fn();

      const changedQuestion = {
        question: "Question 3",
        answer: "Answer 3",
        username: "",
        questionsLists: [],
        id: "6227b67fc624c56733927e2c",
      };

      const updatedQuestion = updateQuestionThunk(changedQuestion);

      await updatedQuestion(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a updateQuestionThunk function and a changed question and a wrong ID", () => {
  describe("When it's called", () => {
    test("Then it should dispatch a function", async () => {
      const dispatch = jest.fn();

      const changedQuestion = {
        question: "Question 3",
        answer: "Answer 3",
        username: "",
        questionsLists: [],
        id: "5000",
      };

      const updatedQuestion = updateQuestionThunk(changedQuestion);

      await updatedQuestion(dispatch);

      expect(dispatch).not.toBeCalled();
    });
  });
});
