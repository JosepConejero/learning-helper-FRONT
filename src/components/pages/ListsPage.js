import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MainBody from "../MainBody/MainBody";
import {
  textIconLists,
  iconListsPath,
  backgroundColorIconLists,
  alternativeTextIconLists,
} from "../../variables";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadQuestionsListsThunk } from "../../redux/thunk/questionsListsThunk";

const ListsPage = () => {
  const questionsLists = useSelector((state) => state.questionsListsData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadQuestionsListsThunk);
  }, [dispatch]);

  return (
    <>
      <Header
        title={textIconLists}
        picture={iconListsPath}
        backgroundColor={backgroundColorIconLists}
        alternativeTextImage={alternativeTextIconLists}
      ></Header>
      <MainBody list={questionsLists} screenType={"lists"}></MainBody>
      <Footer navigateAdd={"/create-list"}></Footer>
    </>
  );
};

export default ListsPage;
