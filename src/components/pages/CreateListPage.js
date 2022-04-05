import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MainCreateListBody from "../MainCreateListBody/MainCreateListBody";
import {
  textIconCreateAList,
  iconAllQuestionsPath,
  backgroundColorIconAllQuestions,
  alternativeTextIconAllQuestions,
} from "../../variables";

const CreateListPage = () => {
  return (
    <>
      <Header
        title={textIconCreateAList}
        picture={iconAllQuestionsPath}
        backgroundColor={backgroundColorIconAllQuestions}
        alternativeTextImage={alternativeTextIconAllQuestions}
      ></Header>
      <MainCreateListBody></MainCreateListBody>
      <Footer hiddenAdd={true}></Footer>
    </>
  );
};

export default CreateListPage;
