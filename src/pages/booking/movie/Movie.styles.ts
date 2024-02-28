import styled from "styled-components";

export const MovieStyles = styled.div`
  grid-area: movie;
  display: grid;
  margin: ${(props) => props.theme.size6} 0;
  height: 60%;

  h5 {
    text-transform: uppercase;
    text-align: justify;
  }
`;
