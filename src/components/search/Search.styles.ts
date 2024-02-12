import styled from "styled-components";
import { InputContainer } from "../input/Input.styles";

export const SearchContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background: ${(props) => props.theme.black};
  padding: 0 ${(props) => props.theme.size1};

  ${InputContainer} {
    width: 100%;
    height: 100%;
    padding: ${(props) => props.theme.size1};
  }
  svg {
    width: 30px;
    height: 30px;
    margin-right: 8px;
    fill: ${(props) => props.theme.white};
  }
`;
