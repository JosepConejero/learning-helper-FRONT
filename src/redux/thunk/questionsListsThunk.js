import {
  loadQuestionsListsAction,
  loadOneQuestionsListAction,
  deleteQuestionsListAction,
  addQuestionsListAction,
} from "../actions/actionsCreator/actionsCreator";

export const loadQuestionsListsThunk = async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_API_URL_LIST);

  const { questionsLists } = await response.json();

  dispatch(loadQuestionsListsAction(questionsLists));
};

export const loadOneQuestionsListThunk = (id) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL_LIST}/${id}`);

  const oneQuestionsList = await response.json();
  if (response.ok) {
    dispatch(loadOneQuestionsListAction(oneQuestionsList));
  }
};

export const deleteQuestionsListThunk = (id) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL_LIST}/${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    dispatch(deleteQuestionsListAction(id));
  }
};

export const addQuestionsListThunk = (questionsList) => async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_API_URL_LIST, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(questionsList),
  });
  const newQuestionsList = await response.json();
  if (!response.ok) return;
  dispatch(addQuestionsListAction(newQuestionsList));
};
