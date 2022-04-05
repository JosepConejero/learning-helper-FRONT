import styled from "styled-components";
import propTypes from "prop-types";
import {
  buttonColor,
  selectedButtonColor,
  titleTextButtonColor,
  selectedTitleTextButtonColor,
} from "../../variables";

const ButtonImg = styled.button`
  background-color: ${buttonColor};
  border-radius: 10px;
  margin: 10px;
  border: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 220px;
  height: 70px;
  cursor: pointer;
  transition: 0.25s;
  &:hover {
    background-color: ${selectedButtonColor};
  }
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
`;

const TitleText = styled.p`
  color: ${titleTextButtonColor};
  margin: 0;
  padding: 0;
  background-color: transparent;
  text-align: right;
  font-size: 20px;
  padding-right: 10px;
  ${ButtonImg}:hover & {
    color: ${selectedTitleTextButtonColor};
  }
`;

const ImageBox = styled.div`
  border-radius: 10px;
  position: relative;
  left: -15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  border: solid black 1px;
  background-color: ${(props) => props.inputColor};
  border-radius: 10px;
  height: 40px;
  width: 40px;
  padding: 5px;
`;

const ButtonImage = ({ imageAlt, image, actionOnClick, title, inputColor }) => {
  return (
    <ButtonImg type="button" onClick={actionOnClick} title={title}>
      <ImageBox>
        <Image inputColor={inputColor} alt={imageAlt} src={image}></Image>
      </ImageBox>
      <TitleText>{title}</TitleText>
    </ButtonImg>
  );
};

ButtonImage.propTypes = {
  image: propTypes.string,
  imageAlt: propTypes.string,
  onClick: propTypes.func,
};

export default ButtonImage;
