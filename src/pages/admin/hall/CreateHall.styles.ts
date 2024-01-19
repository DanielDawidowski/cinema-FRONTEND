import styled from "styled-components";

export const CreateHallStyles = styled.section`
  width: 100%;
  display: flex;
  gap: 2%;
  margin: ${(props) => props.theme.size1};
`;

export const Aside = styled.aside`
  width: 19%;
`;

export const HallDashboard = styled.div<{ $rows: number; $columns: number }>`
  background: ${(props) => props.theme.green};
  display: grid;
  grid-template-columns: repeat(${(props) => props.$columns}, minmax(0, 1fr));
  grid-template-rows: repeat(${(props) => props.$rows}, minmax(0, 1fr));
  gap: 10px;
  place-items: center;
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75%;
  height: 80vh;
  position: relative;
`;

export const Rows = styled.div<{ $length: number }>`
  background: ${(props) => props.theme.green};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(${(props) => props.$length}, minmax(0, 1fr));
  gap: 10px;
  place-items: center;
`;

export const Row = styled.div`
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
`;

export const DrawerWrapper = styled.div`
  background: ${(props) => props.theme.yellow};
  border: 1px solid ${(props) => props.theme.white};
  border-radius: ${(props) => props.theme.size1};
  height: 10%;
  width: 90%;
  padding: ${(props) => props.theme.size1} ${(props) => props.theme.size2};
  box-shadow: inset 0 0 5px ${(props) => props.theme.white};
  position: absolute;
  bottom: 5%;
  left: 5%;
  z-index: 1;
`;

export const DrawerInner = styled.div`
  background: ${(props) => props.theme.red};
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1;
`;
