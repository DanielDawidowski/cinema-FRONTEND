import styled from "styled-components";
import { motion } from "framer-motion";
import { TabsElement, TabsStyles } from "../auth/auth-tabs/Auth.styles";

export const FilterActions = styled.div`
  height: 100%;
  display: grid;
  grid-template-areas: "tabs filter";
  grid-template-columns: 1fr 70px;
  grid-column-gap: 10px;
  margin: ${(props) => props.theme.size3};
  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    grid-template-areas: "title filter tabs ";
    grid-template-columns: 300px 1fr 250px;
    grid-column-gap: 50px;
    margin: 0;
    place-items: center;
    height: 150px;
  }
  h3 {
    grid-area: title;
    display: none;
    text-transform: uppercase;
    @media (min-width: ${(props) => props.theme.breakpoint_small}) {
      display: block;
    }
  }
`;

export const FilterIcon = styled.div`
  width: 100%;
  grid-area: filter;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${(props) => props.theme.grey};
  padding: ${(props) => props.theme.size1} ${(props) => props.theme.size3};
  border-radius: ${(props) => props.theme.size4};
  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    width: 50%;
  }
  svg {
    width: 25px;
    height: 25px;
    fill: ${(props) => props.theme.orange};
    @media (min-width: ${(props) => props.theme.breakpoint_small}) {
      width: 25px;
      height: 25px;
    }
  }
  h4 {
    text-transform: uppercase;
    display: none;
    @media (min-width: ${(props) => props.theme.breakpoint_small}) {
      display: block;
    }
  }
`;

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
