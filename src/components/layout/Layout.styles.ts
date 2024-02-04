import styled from "styled-components";
import { ILayout } from "./Layout.interface";

export const LayoutStyles = styled.div<ILayout>`
  height: 100%;
  width: 100%;

  main {
    margin-top: 15%;
    @media (min-width: ${(props) => props.theme.breakpoint_small}) {
      margin-top: 5%;
    }
  }
`;
