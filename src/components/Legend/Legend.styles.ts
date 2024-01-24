import styled from "styled-components";

export const LegendStyles = styled.div`
  width: 100%;
  grid-area: buttons;
  height: max-content;
  z-index: 2;
  margin-top: ${(props) => props.theme.size3};
  box-shadow: 0 0 1px ${(props) => props.theme.white};
  position: fixed;
  bottom: 0;
  left: 0;
  background: ${(props) => props.theme.black};
  padding: ${(props) => props.theme.size3};
  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    position: unset;
    border: 1px solid ${(props) => props.theme.white};
    border-radius: ${(props) => props.theme.size1};
    padding: 0 8px 16px 8px;
    box-shadow: inset 0 0 1px ${(props) => props.theme.white};
  }
`;

export const LegendList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    display: grid;
  }
`;

export const LegendListItem = styled.li`
  display: grid;
  place-items: center;

  h4 {
    margin-left: ${(props) => props.theme.size1};
    margin-top: 0;
    @media (min-width: ${(props) => props.theme.breakpoint_small}) {
      margin-top: 4px;
    }
  }
  &:hover {
    border: 1px solid ${(props) => props.theme.grey};
    border-radius: ${(props) => props.theme.size1};
    background: ${(props) => props.theme.gradient};
  }

  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 4px 0;
    height: 50px;
    width: 200px;
  }
`;
