import actionTypes from "../actions/actionTypes/actionTypes";

const isLoggedReducer = (value = false, action = {}) => {
  let newValue;
  switch (action.type) {
    case actionTypes.userToLogged:
      newValue = true;
      break;
    case actionTypes.userToNotLogged:
      newValue = false;
      break;
    default:
      newValue = value;
  }
  return newValue;
};

export default isLoggedReducer;
