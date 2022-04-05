import styled from "styled-components";
import IconButton from "../IconButton/IconButton";
import { useNavigate } from "react-router-dom";
import {
  footerBackgroundColor,
  iconBackPath,
  iconHomePath,
  iconAddPath,
  alternativeTextBackIcon,
  alternativeTextHomeIcon,
  alternativeTextAddIcon,
} from "../../variables";

const Box = styled.div`
  width: 100%;
  background-color: ${footerBackgroundColor};
  min-height: 10vh;
  border: 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
`;

export const Footer = ({ hiddenAdd, navigateAdd }) => {
  const navigate = useNavigate();
  const actionOnClickBack = () => {
    navigate(-1);
  };
  const actionOnClickHome = () => {
    navigate("/home");
  };
  const actionOnClickAdd = () => {
    navigate(navigateAdd, { state: { ID: 0 } });
  };

  return (
    <>
      <Box>
        <IconButton
          src={iconBackPath}
          alternativeText={alternativeTextBackIcon}
          actionOnClick={actionOnClickBack}
          hidden={false}
        ></IconButton>
        <IconButton
          src={iconHomePath}
          alternativeText={alternativeTextHomeIcon}
          actionOnClick={actionOnClickHome}
          hidden={false}
        ></IconButton>
        <IconButton
          src={iconAddPath}
          alternativeText={alternativeTextAddIcon}
          actionOnClick={actionOnClickAdd}
          hidden={hiddenAdd}
        ></IconButton>
      </Box>
    </>
  );
};

export default Footer;
