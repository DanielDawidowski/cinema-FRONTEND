import styled from "styled-components";
import { TabsElement, TabsStyles } from "../auth/auth-tabs/Auth.styles";

export const Tabs = styled.div`
  grid-area: tabs;
  width: 70%;
  margin-top: 6px;
  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    width: 100%;
    margin-top: 0;
  }

  ${TabsStyles} {
    margin: 0;
    height: 28px;
    @media (min-width: ${(props) => props.theme.breakpoint_small}) {
      height: 34px;
    }
  }

  ${TabsElement} {
    width: 100%;
    cursor: pointer;
  }
`;

export const CityList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  height: 50%;
  margin: 0 ${(props) => props.theme.size1};
  div {
    place-items: center;
    display: grid;
    h4 {
      text-align: left;
      cursor: pointer;
    }
  }
`;

export const ShowList = styled.div`
  display: flex;
  height: 50%;
  margin: ${(props) => props.theme.size1};
  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    margin: 0 ${(props) => props.theme.size1};
  }
`;

export const ShowListItem = styled.div`
  display: grid;
  border: 1px solid ${(props) => props.theme.white};
  border-radius: ${(props) => props.theme.size1};
  cursor: pointer;
  width: 150px;
  margin: ${(props) => props.theme.size1} 0;
  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    margin: 0;
  }

  svg {
    fill: ${(props) => props.theme.orange};
  }
  &:hover svg {
    fill: ${(props) => props.theme.white};
  }

  &:hover {
    border: 1px solid ${(props) => props.theme.orange};
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 4px ${(props) => props.theme.size1};
  }
`;
