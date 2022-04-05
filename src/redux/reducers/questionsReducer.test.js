import questionsReducer from "./questionsReducer";

describe("Given a questionsReducer function", () => {
  let arrayOfQuestions = [];
  beforeEach(() => {
    return (arrayOfQuestions = [
      {
        question: "pregunta 1",
        answer: "respuesta 1",
        id: 8356,
      },
      {
        question: "pregunta 2",
        answer: "respuesta 2",
        id: 2154,
      },
    ]);
  });

  describe("When it's invoked with a list of questions and loadQuestions type", () => {
    test("Then it should return the new state with the questions to load", () => {
      const questions = [];
      const action = { type: "load-questions", questions: arrayOfQuestions };
      const newState = questionsReducer(questions, action);

      expect(newState).toEqual(arrayOfQuestions);
    });
  });

  describe("When it's invoked with an array of questions and and empty action", () => {
    test("Then it should return the new state with the questions to load", () => {
      const questions = [...arrayOfQuestions];
      const action = {};
      const newState = questionsReducer(questions, action);

      expect(newState).toEqual(arrayOfQuestions);
    });
  });

  describe("When it receives an empty array of questions, and empty action", () => {
    test("Then it should return an empty array", () => {
      const questions = [];
      const action = {};

      const expectedReducer = questionsReducer(questions, action);

      expect(expectedReducer).toEqual([]);
    });
  });

  describe("When it receives no array of questions and no action", () => {
    test("Then it should return an empty array", () => {
      const expectedReducer = questionsReducer();

      expect(expectedReducer).toEqual([]);
    });
  });

  describe("When it's called with action type deleteQuestion and passed a matching id", () => {
    test("Then it should return a new state without the question with matching id", () => {
      const questions = [
        { id: 1, question: "Pregunta 1" },
        { id: 2, question: "Pregunta 2" },
      ];
      const idQuestionToDelete = 1;
      const action = {
        type: "delete-question",
        idQuestion: idQuestionToDelete,
      };
      const newState = questionsReducer(questions, action);
      const expectedNewState = [{ id: 2, question: "Pregunta 2" }];

      expect(newState).toEqual(expectedNewState);
    });
  });

  describe("When it's called with action type deleteQuestion and passed a non matching id", () => {
    test("Then it should return a new state equal to currentstate", () => {
      const questions = [
        { id: 1, question: "Pregunta 1" },
        { id: 2, question: "Pregunta 2" },
      ];
      const idQuestionToDelete = 3;
      const action = {
        type: "delete-question",
        idQuestion: idQuestionToDelete,
      };
      const newState = questionsReducer(questions, action);
      const expectedNewState = [...questions];

      expect(newState).toEqual(expectedNewState);
    });
  });

  describe("When it's called with action type deleteQuestion and passed no id", () => {
    test("Then it should return a new state equal to currentstate", () => {
      const questions = [
        { id: 1, question: "Pregunta 1" },
        { id: 2, question: "Pregunta 2" },
      ];

      const action = {
        type: "delete-question",
      };
      const newState = questionsReducer(questions, action);
      const expectedNewState = [...questions];

      expect(newState).toEqual(expectedNewState);
    });
  });

  describe("When it's called with action type deleteQuestion and passed an empty array of questions", () => {
    test("Then it should return a new state with empty questions", () => {
      const questions = [];
      const idQuestionToDelete = 1;
      const action = {
        type: "delete-question",
        idQuestion: idQuestionToDelete,
      };
      const newState = questionsReducer(questions, action);
      const expectedNewState = [];

      expect(newState).toEqual(expectedNewState);
    });
  });

  describe("When it's called with no action type and passed an empty array of questions", () => {
    test("Then it should return a new state with empty questions", () => {
      const questions = [];

      const newState = questionsReducer(questions);
      const expectedNewState = [];

      expect(newState).toEqual(expectedNewState);
    });
  });

  describe("When it's called with action type addQuestion and passed a question", () => {
    test("Then it should return a new state with the question added", () => {
      const questions = [
        { id: 1, question: "Pregunta 1" },
        { id: 2, question: "Pregunta 2" },
      ];
      const newQuestion = { id: 3, question: "Pregunta 3" };
      const action = {
        type: "add-question",
        question: newQuestion,
      };
      const newState = questionsReducer(questions, action);
      const expectedNewState = [
        { id: 1, question: "Pregunta 1" },
        { id: 2, question: "Pregunta 2" },
        { id: 3, question: "Pregunta 3" },
      ];

      expect(newState).toEqual(expectedNewState);
    });
  });

  describe("When it's called with action type addQuestion and passed no question", () => {
    test("Then it should return a new state equal to currentstate", () => {
      const questions = [
        { id: 1, question: "Pregunta 1" },
        { id: 2, question: "Pregunta 2" },
      ];

      const action = {
        type: "add-question",
      };
      const newState = questionsReducer(questions, action);
      const expectedNewState = [...questions];

      expect(newState).toEqual(expectedNewState);
    });
  });

  describe("When it's called with action type addQuestion and passed an empty array of questions", () => {
    test("Then it should return a new state equal to currentstate", () => {
      const questions = [];

      const action = {
        type: "add-question",
        questions: [],
      };
      const newState = questionsReducer(questions, action);
      const expectedNewState = [];

      expect(newState).toEqual(expectedNewState);
    });
  });

  describe("When it's called with action type updateQuestion and passed questions and an id", () => {
    test("Then it should return a new state equal to currentstate", () => {
      const questions = [
        { id: 1, question: "Pregunta 1" },
        { id: 2, question: "Pregunta 2" },
      ];

      const questionToUpdate = { id: 2, question: "Pregunta modificada" };
      const action = {
        type: "update-question",
        question: questionToUpdate,
      };
      const newState = questionsReducer(questions, action);
      const expectedNewState = [
        { id: 1, question: "Pregunta 1" },
        { id: 2, question: "Pregunta modificada" },
      ];

      expect(newState).toEqual(expectedNewState);
    });
  });
});
