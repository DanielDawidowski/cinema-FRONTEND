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

export const SearchList = styled.div`
  position: absolute;
  top: 65px;
  left: 0;
  background: ${(props) => props.theme.black_light};
  z-index: 999;
  height: 100vh;
`;

export const Inner = styled.ul`
  width: 100%;
`;

export const SearchListItem = styled.li`
  height: 100%;
  display: grid;
  grid-template-columns: 80px 1fr;
  place-items: center;
  margin-bottom: ${(props) => props.theme.size1};
  padding-bottom: ${(props) => props.theme.size1};
  border-bottom: 1px solid ${(props) => props.theme.orange};
  padding: ${(props) => props.theme.size1};

  img {
    border-radius: ${(props) => props.theme.size1};
    width: 100%;
  }

  div {
    width: 100%;
    h3 {
      margin-left: ${(props) => props.theme.size1};
    }
  }
`;
