import actionTypes from "../actions/actionTypes/actionTypes";

const questionsListsReducer = (questionsLists = [], action = {}) => {
  let newQuestionsListsState;
  switch (action.type) {
    case actionTypes.loadQuestionsLists:
      newQuestionsListsState = [...action.questionsLists];
      break;
    case actionTypes.deleteQuestionsList:
      newQuestionsListsState = action.idQuestionsList
        ? [...questionsLists].filter(
            (questionsList) => questionsList.id !== action.idQuestionsList
          )
        : [...questionsLists];
      break;
    case actionTypes.addQuestionsList:
      newQuestionsListsState = action.questionsList
        ? [...questionsLists, { ...action.questionsList }]
        : [...questionsLists];
      break;

    default:
      newQuestionsListsState = [...questionsLists];
  }
  return newQuestionsListsState;
};

export default questionsListsReducer;
