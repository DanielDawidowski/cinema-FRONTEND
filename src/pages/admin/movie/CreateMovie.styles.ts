import styled from "styled-components";

export const CreateMovieStyles = styled.section`
  margin: ${(props) => props.theme.size1};

  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
  }
`;

export const Category = styled.div<{ $selected: boolean }>`
  padding: ${(props) => props.theme.size1};
  margin: ${(props) => props.theme.size1};
  cursor: pointer;
  background: ${(props) =>
    props.$selected ? props.theme.gradient : props.theme.black};
  color: ${(props) =>
    props.$selected ? props.theme.black : props.theme.gradient};
  border: 1px solid ${(props) => props.theme.white};
  border-radius: ${(props) => props.theme.size1};
`;
