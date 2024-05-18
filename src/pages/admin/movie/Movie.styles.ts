import styled from "styled-components";
import { InputContainer } from "../../../components/input/Input.styles";

export const CreateMovieStyles = styled.section`
  margin: ${(props) => props.theme.size1};
`;

export const Category = styled.div<{ $selected: boolean | undefined }>`
  padding: ${(props) => props.theme.size1};
  margin: ${(props) => props.theme.size1} 0;
  cursor: pointer;
  background: ${(props) =>
    props.$selected ? props.theme.gradient : props.theme.black};
  color: ${(props) =>
    props.$selected ? props.theme.black : props.theme.gradient};
  border: 1px solid ${(props) => props.theme.white};
  border-radius: ${(props) => props.theme.size1};
`;

export const SearchMovies = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${(props) => props.theme.size} ${(props) => props.theme.size1};

  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    margin: ${(props) => props.theme.size3} 0;
  }

  ${InputContainer} {
    width: 100%;
    height: 100%;
    margin-bottom: 0;
  }
  svg {
    width: 30px;
    height: 30px;
    fill: ${(props) => props.theme.orange};
    margin-left: ${(props) => props.theme.size1};
    cursor: pointer;
  }
`;
