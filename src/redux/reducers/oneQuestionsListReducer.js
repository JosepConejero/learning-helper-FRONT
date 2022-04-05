import actionTypes from "../actions/actionTypes/actionTypes";

const oneQuestionsListReducer = (questionsList = {}, action = {}) => {
  let newQuestionState;
  switch (action.type) {
    case actionTypes.loadOneQuestionsList:
      newQuestionState = { ...action.questionsList };
      break;
    default:
      newQuestionState = { ...questionsList };
  }
  return newQuestionState;
};

export default oneQuestionsListReducer;
