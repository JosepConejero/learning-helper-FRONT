import actionTypes from "../actions/actionTypes/actionTypes";

const questionsReducer = (questions = [], action = {}) => {
  let newQuestionsState;
  switch (action.type) {
    case actionTypes.loadQuestions:
      newQuestionsState = [...action.questions];
      break;
    case actionTypes.deleteQuestion:
      newQuestionsState = action.idQuestion
        ? [...questions].filter((question) => question.id !== action.idQuestion)
        : [...questions];
      break;
    case actionTypes.addQuestion:
      newQuestionsState = action.question
        ? [...questions, { ...action.question }]
        : [...questions];
      break;
    case actionTypes.updateQuestion:
      newQuestionsState = questions.map((question) =>
        question.id === action.question.id
          ? {
              ...action.question,
            }
          : { ...question }
      );
      break;
    default:
      newQuestionsState = [...questions];
  }
  return newQuestionsState;
};

export default questionsReducer;
