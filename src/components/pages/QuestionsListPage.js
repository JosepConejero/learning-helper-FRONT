import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MainBody from "../MainBody/MainBody";
import {
  iconAllQuestionsPath,
  backgroundColorIconAllQuestions,
  alternativeTextIconAllQuestions,
} from "../../variables";

export const QuestionsListPage = () => {
  return (
    <>
      <Header
        title={"Under construction"}
        picture={iconAllQuestionsPath}
        backgroundColor={backgroundColorIconAllQuestions}
        alternativeTextImage={alternativeTextIconAllQuestions}
      ></Header>
      <MainBody></MainBody>
      <Footer></Footer>
    </>
  );
};

export default QuestionsListPage;
