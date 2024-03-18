import styled from "styled-components";
import { Line } from "../../../components/layout/globalStyles/global.styles";

export const MovieStyles = styled.div`
  grid-area: movie;
  display: grid;
  grid-template-areas:
    "img name"
    "img table"
    "img table";
  margin: ${(props) => props.theme.size2} ${(props) => props.theme.size1};
  grid-template-columns: 70px 1fr;
  height: 100%;
  border-bottom: 1px solid ${(props) => props.theme.grey};

  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    margin: 0;
    border-bottom: none;
    height: 60%;
    display: grid;
    grid-template-areas:
      "img"
      "name"
      "line"
      "table";
    grid-template-columns: 1fr;
    margin: ${(props) => props.theme.size6} 0;
  }

  h5 {
    grid-area: name;
    text-transform: uppercase;
    text-align: justify;
    margin: 0 ${(props) => props.theme.size1};
    @media (min-width: ${(props) => props.theme.breakpoint_small}) {
      margin: 0;
    }
  }

  img {
    grid-area: img;
  }

  table {
    grid-area: table;
    margin: 0 ${(props) => props.theme.size1};
    @media (min-width: ${(props) => props.theme.breakpoint_small}) {
      margin: 0;
    }
  }

  ${Line} {
    display: none;
    @media (min-width: ${(props) => props.theme.breakpoint_small}) {
      grid-area: line;
      display: block;
    }
  }
`;
