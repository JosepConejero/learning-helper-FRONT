import { combineReducers } from "redux";

import oneQuestionReducer from "./oneQuestionReducer";
import questionsReducer from "./questionsReducer";
import oneQuestionsListReducer from "./oneQuestionsListReducer";
import questionsListsReducer from "./questionsListsReducer";
import loginReducer from "./loginReducer";
import createUserReducer from "./createUserReducer";
import isLoggedReducer from "./isLoggedReducer";

const rootReducer = combineReducers({
  oneQuestionData: oneQuestionReducer,
  questionsData: questionsReducer,
  oneQuestionsListData: oneQuestionsListReducer,
  questionsListsData: questionsListsReducer,
  user: loginReducer,
  newUser: createUserReducer,
  isLogged: isLoggedReducer,
});

export default rootReducer;
