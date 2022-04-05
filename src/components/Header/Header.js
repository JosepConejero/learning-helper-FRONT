import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { logoutUserAction } from "../../redux/actions/actionsCreator/actionsCreator";
import {
  buttonColor,
  headerBackgroundColor,
  mainTextColor,
  selectedButtonColor,
  selectedTitleTextButtonColor,
} from "../../variables";

const Box = styled.div`
  width: 100%;
  background-color: ${headerBackgroundColor};
  min-height: 10vh;
  border: 0px;
  display: flex;
  justify-content: left;
  align-items: center;
  position: fixed;
  top: 0;
`;

const ImageBox = styled.div`
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

const Image = styled.img`
  border: solid black 1px;
  background-color: ${(props) => props.inputColor};
  border-radius: 10px;
  height: 40px;
  width: 40px;
  padding: 5px;
`;

const TitleText = styled.p`
  color: ${mainTextColor};
  padding: 0;
  background-color: transparent;
  text-align: center;
  font-size: 25px;
  font-weight: 600;
  margin: 10px;
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

export const Header = ({
  title,
  picture,
  backgroundColor,
  alternativeTextImage,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const actionOnClickLogOut = () => {
    dispatch(logoutUserAction(user));
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <Box>
        <LogoutButton onClick={actionOnClickLogOut}>LOG OUT</LogoutButton>
        <ImageBox>
          <Image
            inputColor={backgroundColor}
            alt={alternativeTextImage}
            src={picture}
          ></Image>
        </ImageBox>
        <TitleText>{title}</TitleText>
      </Box>
    </>
  );
};

export default Header;
