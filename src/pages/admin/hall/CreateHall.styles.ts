import styled from "styled-components";
import { Line } from "../../../components/layout/globalStyles/global.styles";

export const CreateHallStyles = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2%;
  margin: ${(props) => props.theme.size1};
`;

export const Aside = styled.aside`
  display: grid;
  width: 19%;
`;

export const Inner = styled.div`
  height: max-content;
  width: 19%;

  position: fixed;
  ${Line} {
    margin: ${(props) => props.theme.size4} 0;
  }
`;

export const Main = styled.main`
  display: grid;
  grid-template-areas:
    ". column"
    "rows dashboard"
    "buttons buttons";
  height: 100%;
  position: relative;
`;

export const Columns = styled.div<{ $length: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.$length}, minmax(0, 1fr));
  grid-template-rows: 1fr;
  gap: 10px;
  grid-area: column;
  place-items: center;
`;

export const Rows = styled.div<{ $length: number }>`
  grid-area: rows;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(${(props) => props.$length}, minmax(0, 1fr));
  gap: 10px;
  place-items: center;
  width: 45px;
`;

export const Row = styled.div`
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  cursor: pointer;
  margin-top: 4px;

  &:hover {
    color: ${(props) => props.theme.orange};
    transform: scale(1.1);
    font-weight: 700;
  }
`;

export const HallDashboard = styled.div<{ $rows: number; $columns: number }>`
  grid-area: dashboard;
  display: grid;
  grid-template-columns: repeat(${(props) => props.$columns}, minmax(0, 1fr));
  grid-template-rows: repeat(${(props) => props.$rows}, minmax(0, 1fr));
  gap: 10px;
  place-items: center;
`;

export const Legend = styled.div`
  border: 1px solid ${(props) => props.theme.white};
  border-radius: ${(props) => props.theme.size1};
  width: 100%;
  padding: 0 8px 16px 8px;
  box-shadow: inset 0 0 1px ${(props) => props.theme.white};
  grid-area: buttons;
  min-height: 150px;
  z-index: 1;
  margin-top: ${(props) => props.theme.size3};
  box-shadow: 0 0 1px ${(props) => props.theme.white};
`;

export const LegendList = styled.ul`
  display: grid;
`;

export const LegendListItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: ${(props) => props.theme.size1} 0;
  height: 100%;
  padding: ${(props) => props.theme.size1} ${(props) => props.theme.size3};

  h4 {
    margin-left: ${(props) => props.theme.size1};
    margin-top: 4px;
  }
  &:hover {
    border: 1px solid ${(props) => props.theme.grey};
    border-radius: ${(props) => props.theme.size1};
    background: ${(props) => props.theme.gradient};
  }
`;
