import actionTypes from "../actions/actionTypes/actionTypes";

const loginReducer = (user = { isLogged: false }, action = {}) => {
  let newUser;
  switch (action.type) {
    case actionTypes.loginUser:
      newUser = { ...action.user, isLogged: true };
      break;
    case actionTypes.logoutUser:
      newUser = { isLogged: false };
      break;
    default:
      newUser = { ...user };
  }
  return newUser;
};

export default loginReducer;
