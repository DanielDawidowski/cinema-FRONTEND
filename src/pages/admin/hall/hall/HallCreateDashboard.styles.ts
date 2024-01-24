import styled from "styled-components";

export const Dashboard = styled.main`
  display: grid;
  grid-template-areas:
    ". column"
    "rows dashboard"
    "buttons buttons";
  grid-template-columns: 3% 90%;
  margin-bottom: 20%;
  width: 100%;
  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    width: 79%;
  }
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
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: ${(props) => props.theme.size2};
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.orange};
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
