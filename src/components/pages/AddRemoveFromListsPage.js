import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MainBody from "../MainBody/MainBody";
import {
  iconAQuestionPath,
  textIconCreateRemoveFromList,
  backgroundColorIconAQuestion,
  alternativeTextIconAQuestion,
} from "../../variables";

const AddRemoveFromListsPage = () => {
  return (
    <>
      <Header
        title={textIconCreateRemoveFromList}
        picture={iconAQuestionPath}
        backgroundColor={backgroundColorIconAQuestion}
        alternativeTextImage={alternativeTextIconAQuestion}
      ></Header>
      <MainBody></MainBody>
      <Footer></Footer>
    </>
  );
};

export default AddRemoveFromListsPage;
