import styled from "styled-components";

const Image = styled.img`
  height: 30px;
  width: 30px;
  padding: 5px;
  cursor: pointer;
  transition: 0.25s;
  &:hover {
    height: 35px;
    width: 35px;
    padding-left: 2.5px;
    padding-right: 2.5px;
  }
`;

const IconButton = ({ src, actionOnClick, alternativeText, hidden }) => {
  return (
    <>
      <Image
        src={src}
        alt={alternativeText}
        onClick={actionOnClick}
        hidden={hidden}
      ></Image>
    </>
  );
};

export default IconButton;
