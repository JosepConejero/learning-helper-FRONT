import {
  loadQuestionsListsThunk,
  loadOneQuestionsListThunk,
  deleteQuestionsListThunk,
  addQuestionsListThunk,
} from "./questionsListsThunk";

import { server } from "../../mocks/server";

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe("Given a loadQuestionsListsThunk function", () => {
  describe("When it is called", () => {
    test("Then it should call the dispatch function", async () => {
      const dispatch = jest.fn();

      await loadQuestionsListsThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a loadOneQuestionsListThunk function", () => {
  describe("When it's called", () => {
    test("Then it should dispatch a function", async () => {
      const dispatch = jest.fn();

      const loadOneQuestionsList = loadOneQuestionsListThunk("1111");

      await loadOneQuestionsList(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a loadOneQuestionsListThunk function and an id that doesn't match", () => {
  describe("When it's called", () => {
    test("Then it should dispatch a function", async () => {
      const dispatch = jest.fn();
      const wrongID = "3333";

      const loadOneQuestionsList = loadOneQuestionsListThunk(wrongID);

      await loadOneQuestionsList(dispatch);

      expect(dispatch).not.toBeCalled();
    });
  });
});

describe("Given a deleteQuestionsListThunk function and an ID", () => {
  describe("When it's called", () => {
    test("Then it should dispatch a function", async () => {
      const dispatch = jest.fn();
      const ID = "2222";

      const deleteQuestionsList = deleteQuestionsListThunk(ID);

      await deleteQuestionsList(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a deleteQuestionsListThunk function and a wrong ID", () => {
  describe("When it's called", () => {
    test("Then it shouldn't dispatch a function", async () => {
      const dispatch = jest.fn();
      const wrongID = "3333";

      const deleteQuestionsList = deleteQuestionsListThunk(wrongID);

      await deleteQuestionsList(dispatch);

      expect(dispatch).not.toBeCalled();
    });
  });
});

describe("Given a addQuestionsListThunk function and a newQuestionsList", () => {
  describe("When it's called", () => {
    test("Then it should dispatch a function", async () => {
      const dispatch = jest.fn();

      const newQuestionsList = {
        listName: "Nombre 4",
        listSubject: "Materia 4",
        username: "",
        questionsLists: [],
        id: "4444",
      };

      const addQuestionsList = addQuestionsListThunk(newQuestionsList);

      await addQuestionsList(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a addQuestionsListThunk function and a wrongQuestionsList", () => {
  describe("When it's called", () => {
    test("Then it shouldn't dispatch a function", async () => {
      const dispatch = jest.fn();
      const wrongQuestionsList = { wrong: "Question 3" };

      const addQuestion = addQuestionsListThunk(wrongQuestionsList);

      await addQuestion(dispatch);

      expect(dispatch).not.toBeCalled();
    });
  });
});
