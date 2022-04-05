import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MainBody from "../MainBody/MainBody";
import {
  alternativeTextIconReview,
  backgroundColorIconReview,
  iconReviewPath,
} from "../../variables";

const ReviewPage = () => {
  return (
    <>
      <Header
        title={"Página en construcción"}
        picture={iconReviewPath}
        backgroundColor={backgroundColorIconReview}
        alternativeTextImage={alternativeTextIconReview}
      ></Header>
      <MainBody></MainBody>
      <Footer></Footer>
    </>
  );
};

export default ReviewPage;
