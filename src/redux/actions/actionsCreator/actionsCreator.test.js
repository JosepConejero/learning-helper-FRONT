import {
  loadQuestionsAction,
  loadOneQuestionAction,
  deleteQuestionAction,
  addQuestionAction,
  updateQuestionAction,
  loadQuestionsListsAction,
  loadOneQuestionsListAction,
  deleteQuestionsListAction,
  addQuestionsListAction,
  loginUserAction,
  createUserAction,
  logoutUserAction,
} from "./actionsCreator";

describe("Given a loadQuestionsAction function", () => {
  describe("When it receives a questions array", () => {
    test("Then it should return an object with type property and the questions array", () => {
      const questions = [
        {
          question: "Pregunta 1",
          answer: "Respuesta 1",
        },
        {
          question: "Pregunta 2",
          answer: "Respuesta 2",
        },
      ];

      const expectedOutput = { type: "load-questions", questions: questions };
      const expectedAction = loadQuestionsAction(questions);

      expect(expectedAction).toEqual(expectedOutput);
    });
  });
});

describe("Given a loadOneQuestionAction function", () => {
  describe("When it receives a question", () => {
    test("Then it should return an object with type property and a question", () => {
      const questionToLoad = {
        id: 1,
        question: "Pregunta 1",
        answer: "Respuesta 1",
      };

      const expectedOutput = {
        type: "load-one-question",
        question: questionToLoad,
      };

      const expectedAction = loadOneQuestionAction(questionToLoad);

      expect(expectedAction).toEqual(expectedOutput);
    });
  });
});

describe("Given a deleteQuestionAction function", () => {
  describe("When it receives an id", () => {
    test("Then it should return an object with type property and an id", () => {
      const idQuestionToRemoveMocked = 1;

      const expectedOutput = {
        type: "delete-question",
        idQuestion: idQuestionToRemoveMocked,
      };

      const expectedAction = deleteQuestionAction(idQuestionToRemoveMocked);

      expect(expectedAction).toEqual(expectedOutput);
    });
  });
});

describe("Given an addQuestionAction function", () => {
  describe("When it receives a question object", () => {
    test("Then it should return an object with type property and the question object", () => {
      const question = {
        question: "Pregunta 1",
        answer: "Respuesta 1",
      };

      const expectedOutput = { type: "add-question", question: question };
      const expectedAction = addQuestionAction(question);

      expect(expectedAction).toEqual(expectedOutput);
    });
  });
});

describe("Given an updateQuestionAction function", () => {
  describe("When it receives a question", () => {
    test("Then it should return an object with type property and a question", () => {
      const questionToUpdate = {
        id: 1,
        question: "pregunta 1",
        answer: "respuesta 1",
      };

      const expectedOutput = {
        type: "update-question",
        question: questionToUpdate,
      };

      const expectedAction = updateQuestionAction(questionToUpdate);

      expect(expectedAction).toEqual(expectedOutput);
    });
  });
});

describe("Given a loadQuestionsListsAction function", () => {
  describe("When it receives a questionsLists array", () => {
    test("Then it should return an object with type property and the questionsLists array", () => {
      const questionsLists = [
        {
          name: "Lista 1",
          subject: "Materia 1",
        },
        {
          name: "Lista 2",
          subject: "Materia 2",
        },
      ];

      const expectedOutput = {
        type: "load-questions-lists",
        questionsLists: questionsLists,
      };
      const expectedAction = loadQuestionsListsAction(questionsLists);

      expect(expectedAction).toEqual(expectedOutput);
    });
  });
});

describe("Given a loadOneQuestionsListAction function", () => {
  describe("When it receives a questionsList", () => {
    test("Then it should return an object with type property and a questionsList", () => {
      const questionsListToLoad = {
        id: 1,
        name: "Lista 1",
        subject: "Materia 1",
      };

      const expectedOutput = {
        type: "load-one-questions-list",
        questionsList: questionsListToLoad,
      };

      const expectedAction = loadOneQuestionsListAction(questionsListToLoad);

      expect(expectedAction).toEqual(expectedOutput);
    });
  });
});

describe("Given a deleteQuestionsListAction function", () => {
  describe("When it receives an id", () => {
    test("Then it should return an object with type property and an id", () => {
      const idQuestionsListToRemoveMocked = 1;

      const expectedOutput = {
        type: "delete-questions-list",
        idQuestionsList: idQuestionsListToRemoveMocked,
      };

      const expectedAction = deleteQuestionsListAction(
        idQuestionsListToRemoveMocked
      );

      expect(expectedAction).toEqual(expectedOutput);
    });
  });
});

describe("Given an addQuestionsListAction function", () => {
  describe("When it receives a questionsList object", () => {
    test("Then it should return an object with type property and the questionsList object", () => {
      const questionsList = {
        name: "Lista 1",
        subject: "Materia 1",
      };

      const expectedOutput = {
        type: "add-questions-list",
        questionsList: questionsList,
      };
      const expectedAction = addQuestionsListAction(questionsList);

      expect(expectedAction).toEqual(expectedOutput);
    });
  });
});

describe("Given an loginUserAction function", () => {
  describe("When it receives a user object", () => {
    test("Then it should return an object with type property and the user object", () => {
      const user = {
        username: "josep",
        password: "josep",
      };

      const expectedOutput = {
        type: "login-user",
        user: user,
      };
      const expectedAction = loginUserAction(user);

      expect(expectedAction).toEqual(expectedOutput);
    });
  });
});

describe("Given an createUserAction function", () => {
  describe("When it receives a user object", () => {
    test("Then it should return an object with type property and the user object", () => {
      const user = {
        username: "josep",
        password: "josep",
      };

      const expectedOutput = {
        type: "create-user",
        user: user,
      };
      const expectedAction = createUserAction(user);

      expect(expectedAction).toEqual(expectedOutput);
    });
  });
});

describe("Given an logoutUserAction function", () => {
  describe("When it receives a user object", () => {
    test("Then it should return an object with type property and the user object", () => {
      const user = {
        username: "josep",
        password: "josep",
      };

      const expectedOutput = {
        type: "logout-user",
        user: user,
      };
      const expectedAction = logoutUserAction(user);

      expect(expectedAction).toEqual(expectedOutput);
    });
  });
});
