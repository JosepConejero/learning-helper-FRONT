import actionTypes from "../actions/actionTypes/actionTypes";

const oneQuestionReducer = (question = {}, action = {}) => {
  let newQuestionState;
  switch (action.type) {
    case actionTypes.loadOneQuestion:
      newQuestionState = { ...action.question };
      break;

    default:
      newQuestionState = { ...question };
  }
  return newQuestionState;
};

export default oneQuestionReducer;
