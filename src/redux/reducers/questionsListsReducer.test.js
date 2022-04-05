import questionsListsReducer from "./questionsListsReducer";

describe("Given a questionsListsReducer function", () => {
  let arrayOfQuestionsLists = [];
  beforeEach(() => {
    return (arrayOfQuestionsLists = [
      {
        id: 1,
        listName: "Nombre 1",
        listSubject: "Materia 1",
      },
      {
        id: 2,
        listName: "Nombre 2",
        listSubject: "Materia 2",
      },
    ]);
  });

  describe("When it's invoked with a list of questionsLists and loadQuestionsLists type", () => {
    test("Then it should return the new state with the questionsLists to load", () => {
      const questionsLists = [];
      const action = {
        type: "load-questions-lists",
        questionsLists: arrayOfQuestionsLists,
      };
      const newState = questionsListsReducer(questionsLists, action);

      expect(newState).toEqual(arrayOfQuestionsLists);
    });
  });

  describe("When it's invoked with an array of questionsLists and and empty action", () => {
    test("Then it should return the new state with the questionsLists to load", () => {
      const questionsLists = [...arrayOfQuestionsLists];
      const action = {};
      const newState = questionsListsReducer(questionsLists, action);

      expect(newState).toEqual(arrayOfQuestionsLists);
    });
  });

  describe("When it receives an empty array of questionsLists, and empty action", () => {
    test("Then it should return an empty array", () => {
      const questionsLists = [];
      const action = {};

      const expectedReducer = questionsListsReducer(questionsLists, action);

      expect(expectedReducer).toEqual([]);
    });
  });

  describe("When it receives no array of questionsLists and no action", () => {
    test("Then it should return an empty array", () => {
      const expectedReducer = questionsListsReducer();

      expect(expectedReducer).toEqual([]);
    });
  });

  describe("When it's called with action type deleteQuestionsList and passed a matching id", () => {
    test("Then it should return a new state without the questionsList with matching id", () => {
      const questionsLists = [
        { id: 1, listName: "Nombre 1" },
        { id: 2, listName: "Nombre 2" },
      ];
      const idQuestionsListToDelete = 1;
      const action = {
        type: "delete-questions-list",
        idQuestionsList: idQuestionsListToDelete,
      };
      const newState = questionsListsReducer(questionsLists, action);
      const expectedNewState = [{ id: 2, listName: "Nombre 2" }];

      expect(newState).toEqual(expectedNewState);
    });
  });

  describe("When it's called with action type deleteQuestionsList and passed a non matching id", () => {
    test("Then it should return a new state equal to currentstate", () => {
      const questionsLists = [
        { id: 1, listName: "Nombre 1" },
        { id: 2, listName: "Nombre 2" },
      ];
      const idQuestionsListToDelete = 3;
      const action = {
        type: "delete-questions-list",
        idQuestionsList: idQuestionsListToDelete,
      };
      const newState = questionsListsReducer(questionsLists, action);
      const expectedNewState = [...questionsLists];

      expect(newState).toEqual(expectedNewState);
    });
  });

  describe("When it's called with action type deleteQuestionsList and passed no id", () => {
    test("Then it should return a new state equal to currentstate", () => {
      const questionsLists = [
        { id: 1, listName: "Nombre 1" },
        { id: 2, listName: "Nombre 2" },
      ];

      const action = {
        type: "delete-questions-list",
      };
      const newState = questionsListsReducer(questionsLists, action);
      const expectedNewState = [...questionsLists];

      expect(newState).toEqual(expectedNewState);
    });
  });

  describe("When it's called with action type deleteQuestionsList and passed an empty array of questionsLists", () => {
    test("Then it should return a new state with empty questionsLists", () => {
      const questionsLists = [];
      const idQuestionsListToDelete = 1;
      const action = {
        type: "delete-questions-list",
        idQuestionsList: idQuestionsListToDelete,
      };
      const newState = questionsListsReducer(questionsLists, action);
      const expectedNewState = [];

      expect(newState).toEqual(expectedNewState);
    });
  });

  describe("When it's called with no action type and passed an empty array of questionsLists", () => {
    test("Then it should return a new state with empty questionsLists", () => {
      const questionsLists = [];

      const newState = questionsListsReducer(questionsLists);
      const expectedNewState = [];

      expect(newState).toEqual(expectedNewState);
    });
  });

  describe("When it's called with action type addQuestionsList and passed a questionsList", () => {
    test("Then it should return a new state with the questionsList added", () => {
      const questionsLists = [
        { id: 1, listName: "Nombre 1" },
        { id: 2, listName: "Nombre 2" },
      ];
      const newQuestionsList = { id: 3, listName: "Nombre 3" };
      const action = {
        type: "add-questions-list",
        questionsList: newQuestionsList,
      };
      const newState = questionsListsReducer(questionsLists, action);
      const expectedNewState = [
        { id: 1, listName: "Nombre 1" },
        { id: 2, listName: "Nombre 2" },
        { id: 3, listName: "Nombre 3" },
      ];

      expect(newState).toEqual(expectedNewState);
    });
  });

  describe("When it's called with action type addQuestionsList and passed no questionsList", () => {
    test("Then it should return a new state equal to currentstate", () => {
      const questionsLists = [
        { id: 1, listName: "Nombre 1" },
        { id: 2, listName: "Nombre 2" },
      ];

      const action = {
        type: "add-questions-list",
      };
      const newState = questionsListsReducer(questionsLists, action);
      const expectedNewState = [...questionsLists];

      expect(newState).toEqual(expectedNewState);
    });
  });

  describe("When it's called with action type addQuestionsList and passed an empty array of questionsLists", () => {
    test("Then it should return a new state equal to currentstate", () => {
      const questionsLists = [];

      const action = {
        type: "add-questions-list",
        questionsLists: [],
      };
      const newState = questionsListsReducer(questionsLists, action);
      const expectedNewState = [];

      expect(newState).toEqual(expectedNewState);
    });
  });
});
