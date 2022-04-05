import styled from "styled-components";
import {
  mainBackgroundColor,
  footerBackgroundColor,
  buttonColor,
  disabledColor,
} from "../../variables";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addQuestionsListThunk } from "../../redux/thunk/questionsListsThunk";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  background-color: ${mainBackgroundColor};
  min-height: 80vh;
  border: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const NameBox = styled.div`
  width: 70%;
  height: 10vh;
  border-radius: 10px;
  padding: 5px;
  border: solid ${disabledColor} 2px;
  margin-top: 50px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubjectBox = styled.div`
  width: 70%;
  height: 10vh;
  border-radius: 10px;
  padding: 5px;
  border: solid ${disabledColor} 2px;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const VoidBox = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${footerBackgroundColor};
`;

const Buttons = styled.div`
  width: 100%;
  height: 10vh;
  position: fixed;
  bottom: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const SaveButton = styled.button`
  background-color: ${buttonColor};
  border: 0px;
  height: 6vh;
  font-size: 20px;
  color: white;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 7px;
  margin-right: 7px;
  transition: 0.25s;
  &:hover {
    height: 7vh;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 25px;
    box-shadow: 10px 10px 10px grey;
    margin-left: 0px;
    margin-right: 0px;
  }
`;

const DisabledSaveButton = styled.button`
  background-color: ${disabledColor};
  border: 0px;
  height: 6vh;
  font-size: 20px;
  color: white;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 7px;
  margin-right: 7px;
`;

const NameInput = styled.textarea`
  width: 100%;
  height: 20vh;
  font-size: 20px;
  border: none;
  outline: none;
  resize: none;
  position: relative;
  top: -17px;
`;

const SubjectInput = styled.textarea`
  width: 100%;
  height: 50vh;
  font-size: 20px;
  border: none;
  outline: none;
  resize: none;
  position: relative;
  top: -17px;
`;

const LabelText = styled.p`
  margin: 0;
  padding-top: 0;
  padding-bottom: 0;
  background-color: ${buttonColor};
  color: white;
  padding-left: 10px;
  padding-right: 10px;
  border: solid ${buttonColor} 1px;
  border-radius: 10px;
  position: relative;
  top: -17px;
`;

const MainCreateListBody = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialFormData = {
    listName: "",
    listSubject: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const isFilled = formData.listName !== "" && formData.listSubject !== "";

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const addQuestionsListHandler = (event) => {
    event.preventDefault();
    if (isFilled) {
      dispatch(addQuestionsListThunk(formData));
      setFormData(initialFormData);
      navigate(-1);
    }
  };

  return (
    <>
      <VoidBox></VoidBox>
      <Container>
        <NameBox>
          <LabelText>NAME</LabelText>
          <NameInput
            onChange={handleChange}
            name="listName"
            title="listName"
            type="text"
            value={formData.listName}
          ></NameInput>
        </NameBox>
        <SubjectBox>
          <LabelText>SUBJECT</LabelText>
          <SubjectInput
            onChange={handleChange}
            name="listSubject"
            title="listSubject"
            type="text"
            value={formData.listSubject}
          ></SubjectInput>
        </SubjectBox>
        <Buttons>
          {isFilled && (
            <SaveButton onClick={addQuestionsListHandler}>SAVE</SaveButton>
          )}
          {!isFilled && <DisabledSaveButton>SAVE</DisabledSaveButton>}
        </Buttons>
      </Container>
    </>
  );
};

export default MainCreateListBody;
