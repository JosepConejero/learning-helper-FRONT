import styled from "styled-components";
import ButtonImage from "../ButtonImage/ButtonImage";
import { useNavigate } from "react-router-dom";
import {
  homeBackgroundColor,
  applicationNameTextColor,
  iconListsPath,
  iconApplicationPath,
  alternativeTextApplicationIcon,
  applicationName,
  alternativeTextIconLists,
  textIconLists,
  backgroundColorIconLists,
  iconAllQuestionsPath,
  backgroundColorIconAllQuestions,
  textIconAllQuestions,
  alternativeTextIconAllQuestions,
  alternativeTextIconAQuestion,
  iconAQuestionPath,
  textIconAQuestion,
  backgroundColorIconAQuestion,
  alternativeTextIconReview,
  iconReviewPath,
  textIconReview,
  backgroundColorIconReview,
  buttonColor,
  selectedTitleTextButtonColor,
  selectedButtonColor,
} from "../../variables";
import { useDispatch, useSelector } from "react-redux";
import { logoutUserAction } from "../../redux/actions/actionsCreator/actionsCreator";

const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  text-align: center;
  background-color: ${homeBackgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ApplicationName = styled.h1`
  margin: 0px;
  font-size: 30px;
  color: ${applicationNameTextColor};
  padding-bottom: 20px;
`;

const LogoutButton = styled.button`
  background-color: ${buttonColor};
  border: 0px;
  height: 3vh;
  font-size: 13px;
  color: white;
  border-radius: 5px;
  padding-left: 10px;
  padding-right: 8px;
  padding-top: 2px;
  margin-left: 0px;
  margin-right: 3px;
  transition: 0.25s;
  position: fixed;
  top: 2px;
  right: 0px;
  &:hover {
    background-color: ${selectedButtonColor};
    color: ${selectedTitleTextButtonColor};
    box-shadow: 5px 5px 5px grey;
  }
`;

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const actionOnClickLogOut = () => {
    dispatch(logoutUserAction(user));
    localStorage.removeItem("token");
    navigate("/login");
  };

  const buttonLists = {
    imageAlt: alternativeTextIconLists,
    image: iconListsPath,
    actionOnClick: () => {
      navigate("/lists");
    },
    title: textIconLists,
    bgcolor: backgroundColorIconLists,
  };

  const buttonAllQuestions = {
    imageAlt: alternativeTextIconAllQuestions,
    image: iconAllQuestionsPath,
    actionOnClick: () => {
      navigate("/all-questions");
    },
    title: textIconAllQuestions,
    bgcolor: backgroundColorIconAllQuestions,
  };

  const buttonOneQuestion = {
    imageAlt: alternativeTextIconAQuestion,
    image: iconAQuestionPath,
    actionOnClick: () => {
      navigate("/question", { state: { ID: 0 } });
    },
    title: textIconAQuestion,
    bgcolor: backgroundColorIconAQuestion,
  };

  const buttonReview = {
    imageAlt: alternativeTextIconReview,
    image: iconReviewPath,
    actionOnClick: () => {
      navigate("/review");
    },
    title: textIconReview,
    bgcolor: backgroundColorIconReview,
  };

  return (
    <>
      <Container>
        <LogoutButton onClick={actionOnClickLogOut}>LOG OUT</LogoutButton>
        <img alt={alternativeTextApplicationIcon} src={iconApplicationPath} />
        <ApplicationName>{applicationName}</ApplicationName>
        <div>
          <ButtonImage
            imageAlt={buttonLists.imageAlt}
            image={buttonLists.image}
            actionOnClick={buttonLists.actionOnClick}
            title={buttonLists.title}
            inputColor={buttonLists.bgcolor}
          ></ButtonImage>

          <ButtonImage
            imageAlt={buttonAllQuestions.imageAlt}
            image={buttonAllQuestions.image}
            actionOnClick={buttonAllQuestions.actionOnClick}
            title={buttonAllQuestions.title}
            inputColor={buttonAllQuestions.bgcolor}
          ></ButtonImage>

          <ButtonImage
            imageAlt={buttonOneQuestion.imageAlt}
            image={buttonOneQuestion.image}
            actionOnClick={buttonOneQuestion.actionOnClick}
            title={buttonOneQuestion.title}
            inputColor={buttonOneQuestion.bgcolor}
          ></ButtonImage>

          <ButtonImage
            imageAlt={buttonReview.imageAlt}
            image={buttonReview.image}
            actionOnClick={buttonReview.actionOnClick}
            title={buttonReview.title}
            inputColor={buttonReview.bgcolor}
          ></ButtonImage>
        </div>
      </Container>
    </>
  );
};

export default HomePage;
