import axios from "axios";
import {
  createUserAction,
  loginUserAction,
} from "../actions/actionsCreator/actionsCreator";
import toast from "react-hot-toast";

export const loginThunk = (user, navigate) => async (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL_USER}/user/login`;
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };

  await axios
    .post(url, user, config)
    .then((response) => {
      const { data } = response;
      const token = data.token;
      localStorage.setItem("token", token);
      dispatch(loginUserAction(user));
      navigate("/home");
    })
    .catch((error) => {
      toast.error(`USER OR PASSWORD ARE WRONG`, {
        duration: 2000,
        style: {
          position: "relative",
          height: 100,
          width: 150,
          border: "2px solid black",
          textAlign: "center",
          top: 280,
          color: "#fff",
          backgroundColor: "#d715c3",
        },
      });
    });
};

export const createUserThunk = (user, navigate) => async (dispatch) => {
  const data = JSON.stringify({
    name: user.name,
    username: user.username,
    password: user.password,
  });

  const url = `${process.env.REACT_APP_API_URL_USER}/user/register`;

  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };
  await axios
    .post(url, data, config)
    .then(() => {
      dispatch(createUserAction(data));
      navigate("/login");
    })
    .catch((error) => {
      toast.error(`USER EXISTS`, {
        duration: 2000,
        style: {
          position: "relative",
          height: 100,
          width: 150,
          border: "2px solid black",
          textAlign: "center",
          top: 280,
          color: "#fff",
          backgroundColor: "#d715c3",
        },
      });
    });
};
