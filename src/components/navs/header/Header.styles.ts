import styled from "styled-components";
import { InputContainer } from "../../input/Input.styles";

export const HeaderStyles = styled.header`
  margin: 0;
  width: 100%;
  height: 100%;
  display: grid;
`;

export const Inner = styled.div`
  padding: ${(props) => props.theme.size1};
  height: 60px;
  background: ${(props) => props.theme.black};
  position: relative;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  width: 70px;
  margin-bottom: 8px;
  svg {
    width: 30px;
    height: 30px;
  }
`;

export const SearchHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background: ${(props) => props.theme.black};
  ${InputContainer} {
    width: 90%;
    height: 100%;
    padding: ${(props) => props.theme.size1};
  }
  svg {
    width: 30px;
    height: 30px;
    margin-right: 8px;
  }
`;
