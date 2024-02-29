import styled, { css } from "styled-components";

export const FooterStyles = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  background: ${(props) => props.theme.black_light};
  width: 100%;
  padding: ${(props) => props.theme.size1} 0;
  z-index: 9999;
`;

export const FooterInner = styled.footer`
  display: grid;
  grid-template-areas: "leftBtn seats rightBtn";
  width: 100%;
  height: 80px;
`;

const ButtonStep = styled.div`
  display: grid;
  place-items: center;
  cursor: pointer;
  height: 64px;

  svg {
    width: 30px;
    height: 30px;
    padding: 4px;
    margin-left: 8px;
  }
`;

export const LeftButton = styled(ButtonStep)`
  grid-area: leftBtn;
  display: flex;
  justify-content: flex-start;
`;

export const RightButton = styled(ButtonStep)`
  grid-area: rightBtn;
  display: flex;
  justify-content: flex-end;
`;

export const SelectedSeats = styled.div`
  display: grid;
  grid-area: seats;
  grid-template-areas:
    "selected"
    "info";
  height: 80px;
  width: 100%;
`;

export const Seats = styled.ul<{ $limit: boolean }>`
  display: flex;
  justify-content: center;
  grid-area: selected;
  height: 60px;
  border-radius: 4px;
  padding: 4px 0;
  ${({ $limit }) =>
    $limit
      ? css`
          border: 1px solid ${(props) => props.theme.red};
        `
      : css`
          border: none;
        `}
`;

export const SelectedSeatItem = styled.li`
  display: flex;
  margin-right: 4px;
`;

export const SelectedSeatsInfo = styled.div`
  grid-area: info;
  display: flex;
  justify-content: center;
  border-radius: 4px;
  height: 20px;

  h6 {
    color: ${(props) => props.theme.red};
  }
`;
