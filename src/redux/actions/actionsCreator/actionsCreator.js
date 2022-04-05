import actionTypes from "../actionTypes/actionTypes";

export const loadQuestionsAction = (questions) => ({
  type: actionTypes.loadQuestions,
  questions,
});

export const loadOneQuestionAction = (question) => ({
  type: actionTypes.loadOneQuestion,
  question,
});

export const deleteQuestionAction = (idQuestion) => ({
  type: actionTypes.deleteQuestion,
  idQuestion,
});

export const addQuestionAction = (question) => ({
  type: actionTypes.addQuestion,
  question,
});

export const updateQuestionAction = (question) => ({
  type: actionTypes.updateQuestion,
  question,
});

export const loadQuestionsListsAction = (questionsLists) => ({
  type: actionTypes.loadQuestionsLists,
  questionsLists,
});

export const loadOneQuestionsListAction = (questionsList) => ({
  type: actionTypes.loadOneQuestionsList,
  questionsList,
});

export const deleteQuestionsListAction = (idQuestionsList) => ({
  type: actionTypes.deleteQuestionsList,
  idQuestionsList,
});

export const addQuestionsListAction = (questionsList) => ({
  type: actionTypes.addQuestionsList,
  questionsList,
});

export const loginUserAction = (user) => ({
  type: actionTypes.loginUser,
  user,
});

export const createUserAction = (user) => ({
  type: actionTypes.createUser,
  user,
});

export const logoutUserAction = (user) => ({
  type: actionTypes.logoutUser,
  user,
});
