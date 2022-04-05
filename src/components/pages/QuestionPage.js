import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {
  iconAQuestionPath,
  textIconAQuestion,
  backgroundColorIconAQuestion,
  alternativeTextIconAQuestion,
} from "../../variables";
import MainQuestionBody from "../MainQuestionBody/MainQuestionBody";
import { useLocation } from "react-router-dom";

const QuestionPage = () => {
  const location = useLocation();
  const { ID } = location.state;

  return (
    <>
      <Header
        title={textIconAQuestion}
        picture={iconAQuestionPath}
        backgroundColor={backgroundColorIconAQuestion}
        alternativeTextImage={alternativeTextIconAQuestion}
      ></Header>
      <MainQuestionBody idQuestion={ID}></MainQuestionBody>
      <Footer hiddenAdd={true}></Footer>
    </>
  );
};

export default QuestionPage;
