import styled, { css } from "styled-components";
import { ButtonStyles } from "../../../components/button/Button.styles";

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
  height: 40px;
  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    height: 80px;
  }
`;

const ButtonStep = styled.div`
  display: grid;
  place-items: center;
  cursor: pointer;

  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    height: 64px;
  }

  svg {
    width: 30px;
    height: 30px;
    padding: 4px;
    @media (min-width: ${(props) => props.theme.breakpoint_small}) {
      margin-left: 8px;
    }
  }

  h4 {
    display: none;
    @media (min-width: ${(props) => props.theme.breakpoint_small}) {
      display: block;
    }
  }
`;

export const LeftButton = styled(ButtonStep)`
  grid-area: leftBtn;
  display: flex;
  justify-content: center;
  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    justify-content: flex-start;
  }
`;

export const RightButton = styled(ButtonStep)`
  grid-area: rightBtn;
  display: flex;
  justify-content: center;
  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    justify-content: flex-end;
  }

  ${ButtonStyles} {
    height: 30px;
    @media (min-width: ${(props) => props.theme.breakpoint_small}) {
      height: 50px;
    }
  }
`;

export const SelectedSeats = styled.div`
  display: grid;
  grid-area: seats;
  position: relative;
  height: 100%;
  width: 100%;
  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    height: 80px;
  }
`;

export const Seats = styled.ul<{ $limit: boolean }>`
  display: flex;
  justify-content: center;
  border-radius: 4px;
  padding: 4px 0;
  ${({ $limit }) =>
    $limit
      ? css`
          border: 1px solid ${(props) => props.theme.red};
          height: 100%;
        `
      : css`
          border: none;
          height: 0%;
        `}
  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    height: 60px;
  }
`;

export const SelectedSeatItem = styled.li`
  display: flex;
  margin-right: 4px;
`;

export const SelectedSeatsInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 40%;
  border-radius: 4px;
  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    bottom: 5%;
    left: 40%;
  }

  h6 {
    color: ${(props) => props.theme.red};
  }
`;
