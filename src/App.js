import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import ListsPage from "./components/pages/ListsPage";
import AllQuestionsPage from "./components/pages/AllQuestionsPage";
import QuestionsListPage from "./components/pages/QuestionsListPage";
import QuestionPage from "./components/pages/QuestionPage";
import ReviewPage from "./components/pages/ReviewPage";
import AddRemoveFromListsPage from "./components/pages/AddRemoveFromListsPage";
import CreateListPage from "./components/pages/CreateListPage";
import LoginPage from "./components/pages/LoginPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { loginUserAction } from "./redux/actions/actionsCreator/actionsCreator";
import RegisterPage from "./components/pages/RegisterPage";
import { Toaster } from "react-hot-toast";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const userInfo = jwtDecode(token);
      dispatch(loginUserAction(userInfo));
    }
  }, [dispatch]);

  const { isLogged } = useSelector((state) => state.user);

  return (
    <>
      <main>
        <div>
          <Toaster />
        </div>
        <Routes>
          {isLogged ? (
            <>
              <Route path="*" element={<Navigate to="/home" />} />
              <Route path="/home" element={<HomePage />}></Route>
              <Route path="/lists" element={<ListsPage />}></Route>
              <Route
                path="/questions-list"
                element={<QuestionsListPage />}
              ></Route>
              <Route
                path="/all-questions"
                element={<AllQuestionsPage />}
              ></Route>
              <Route path="/question" element={<QuestionPage />}></Route>
              <Route path="/review" element={<ReviewPage />}></Route>
              <Route
                path="/add-remove-from-lists"
                element={<AddRemoveFromListsPage />}
              ></Route>
              <Route path="/create-list" element={<CreateListPage />}></Route>
            </>
          ) : (
            <>
              <Route path="/login" element={<LoginPage />}></Route>
              <Route path="/register" element={<RegisterPage />}></Route>
              <Route path="*" element={<Navigate to="/login" />} />
            </>
          )}
        </Routes>
      </main>
    </>
  );
}

export default App;
