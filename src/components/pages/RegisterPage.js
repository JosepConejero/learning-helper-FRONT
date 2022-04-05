import styled from "styled-components";
import {
  applicationNameTextColor,
  iconApplicationPath,
  alternativeTextApplicationIcon,
  applicationName,
  buttonColor,
  backgroundColorFullPage,
  mainBackgroundColor,
  titlePageColor,
  disabledColor,
  iconBackPath,
  alternativeTextBackIcon,
} from "../../variables";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { createUserThunk } from "../../redux/thunk/userThunk";
import IconButton from "../IconButton/IconButton";

const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  text-align: center;
  background-color: ${backgroundColorFullPage};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CentralBox = styled.div`
  width: 70%;
  min-height: 70vh;
  background-color: ${backgroundColorFullPage};
  border: solid ${mainBackgroundColor} 1px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
`;

const ApplicationName = styled.h1`
  margin: 0px;
  font-size: 30px;
  color: ${applicationNameTextColor};
  padding-bottom: 20px;
`;

const LoginTitle = styled.h1`
  margin: 0px;
  font-size: 25px;
  color: ${titlePageColor};
  padding-bottom: 20px;
`;

const TextInput = styled.input`
  font-size: 25px;
  width: 70%;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  background-color: ${buttonColor};
  border: 0px;
  height: 4vh;
  font-size: 20px;
  color: white;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  margin: 15px;
  transition: 0.25s;
  &:hover {
    height: 6vh;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 22px;
    box-shadow: 10px 10px 10px grey;
    margin: 7px;
  }
`;

const DisabledButton = styled.button`
  background-color: ${disabledColor};
  border: 0px;
  height: 4vh;
  font-size: 20px;
  color: white;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  margin: 15px;
`;

export const RegisterPage = () => {
  const navigate = useNavigate();

  const actionOnClickBack = () => {
    navigate(-1);
  };

  const emptyFields = {
    name: "",
    username: "",
    password: "",
  };
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(emptyFields);

  const resetForm = () => {
    setFormData(emptyFields);
  };
  const isInvalid =
    formData.name === "" ||
    formData.username === "" ||
    formData.password === "";

  const submitForm = (event) => {
    event.preventDefault();
    dispatch(createUserThunk(formData, navigate));
    resetForm();
  };

  const changeData = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <Container>
      <CentralBox>
        <div>
          <img alt={alternativeTextApplicationIcon} src={iconApplicationPath} />
          <ApplicationName>{applicationName}</ApplicationName>
        </div>
        <LoginTitle>REGISTER</LoginTitle>
        <FormContainer onSubmit={submitForm} noValidate autoComplete="off">
          <label htmlFor="name">NAME </label>
          <TextInput
            type="text"
            id="name"
            onChange={changeData}
            value={formData.name}
            required
          />
          <label htmlFor="username">USERNAME </label>
          <TextInput
            type="text"
            id="username"
            onChange={changeData}
            value={formData.username}
            required
          />
          <label htmlFor="password">PASSWORD </label>
          <TextInput
            type="password"
            id="password"
            onChange={changeData}
            value={formData.password}
            required
          />

          {!isInvalid && (
            <Button type="submit" disabled={isInvalid}>
              REGISTER
            </Button>
          )}
          {isInvalid && (
            <DisabledButton disabled={isInvalid}>REGISTER</DisabledButton>
          )}
          <IconButton
            src={iconBackPath}
            alternativeText={alternativeTextBackIcon}
            actionOnClick={actionOnClickBack}
            hidden={false}
          ></IconButton>
        </FormContainer>
      </CentralBox>
    </Container>
  );
};

export default RegisterPage;
