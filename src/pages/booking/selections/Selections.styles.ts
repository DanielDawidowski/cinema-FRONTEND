import styled from "styled-components";
import { LegendStyles } from "../../../components/legend/Legenda.styles";

export const SelectionStyles = styled.div`
  display: grid;
  grid-template-areas:
    "screen"
    "seats"
    "legend";
  grid-template-columns: 1fr;
  grid-row-gap: 50px;
  margin-left: ${(props) => props.theme.size1};
  margin-right: ${(props) => props.theme.size1};
  margin-bottom: 30%;
  padding: ${(props) => props.theme.size3} 0;

  ${LegendStyles} {
    grid-area: legend;
  }

  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    grid-template-areas:
      "screen"
      "seats"
      "legend";
    margin-bottom: 20%;
  }
`;

export const SelectionSeats = styled.div<{ $rows: number; $columns: number }>`
  grid-area: seats;
  display: grid;
  grid-template-columns: repeat(${(props) => props.$columns}, minmax(0, 1fr));
  grid-template-rows: repeat(${(props) => props.$rows}, minmax(0, 1fr));
  place-items: center;
`;

export const Screen = styled.div`
  grid-area: screen;
  margin-top: 10%;

  width: 100%;
  height: 15px;
  background-color: ${(props) => props.theme.white};
  border-radius: 50% 50% 0 0;
  box-shadow: 1px 1px 4px ${(props) => props.theme.blue_light};
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 5px;
    left: 0;
    width: 100%;
    height: 15px;
    border-radius: 50% 50% 0 0;
    background: linear-gradient(0deg, #171717 0%, #4f83dd 100%);
  }
`;
