import {
  loadQuestionsAction,
  deleteQuestionAction,
  addQuestionAction,
  loadOneQuestionAction,
  updateQuestionAction,
} from "../actions/actionsCreator/actionsCreator";

export const loadQuestionsThunk = async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_API_URL);

  const { questions } = await response.json();

  if (response.ok) {
    dispatch(loadQuestionsAction(questions));
  }
};

export const loadOneQuestionThunk = (id) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/${id}`);

  const oneQuestion = await response.json();
  if (response.ok) {
    dispatch(loadOneQuestionAction(oneQuestion));
  }
};

export const deleteQuestionThunk = (id) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    dispatch(deleteQuestionAction(id));
  }
};

export const addQuestionThunk = (question) => async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(question),
  });
  const newQuestion = await response.json();

  if (response.ok) {
    dispatch(addQuestionAction(newQuestion));
  }
};

export const updateQuestionThunk = (question) => async (dispatch) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/${question.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(question),
    }
  );
  const modifiedQuestion = await response.json();
  if (response.ok) {
    dispatch(updateQuestionAction(modifiedQuestion));
  }
};
