import styled from "styled-components";

export const FooterStyles = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  background: ${(props) => props.theme.black_light};
  width: 100%;
  padding: ${(props) => props.theme.size2} 0;
  z-index: 9999;
`;

export const FooterInner = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonStep = styled.div`
  display: flex;
  cursor: pointer;
  svg {
    width: 30px;
    height: 30px;
    padding: 4px;
    margin-left: 8px;
  }
`;

export const SelectedSeats = styled.div`
  display: grid;
`;

export const Seats = styled.ul`
  display: flex;
  margin: 4px 0;
`;

export const SelectedSeatItem = styled.li`
  display: flex;
  margin-right: 4px;
`;

export const SelectedSeatsInfo = styled.div`
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.red};
  border-radius: 4px;

  h6 {
    color: ${(props) => props.theme.white};
  }
`;
