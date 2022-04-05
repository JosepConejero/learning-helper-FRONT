import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MainBody from "../MainBody/MainBody";
import {
  textIconAllQuestions,
  iconAllQuestionsPath,
  backgroundColorIconAllQuestions,
  alternativeTextIconAllQuestions,
} from "../../variables";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadQuestionsThunk } from "../../redux/thunk/questionsThunk";

const AllQuestionsPage = () => {
  const questions = useSelector((state) => state.questionsData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadQuestionsThunk);
  }, [dispatch]);

  return (
    <>
      <Header
        title={textIconAllQuestions}
        picture={iconAllQuestionsPath}
        backgroundColor={backgroundColorIconAllQuestions}
        alternativeTextImage={alternativeTextIconAllQuestions}
      ></Header>
      <MainBody list={questions} screenType={"questions"}></MainBody>
      <Footer navigateAdd={"/question"}></Footer>
    </>
  );
};

export default AllQuestionsPage;
