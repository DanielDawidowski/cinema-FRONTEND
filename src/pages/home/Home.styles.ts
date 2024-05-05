import styled from "styled-components";
import { motion } from "framer-motion";
import { TabsElement, TabsStyles } from "../auth/auth-tabs/Auth.styles";
import { Flex } from "../../components/layout/globalStyles/global.styles";

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

export const MoviesList = styled.div`
  margin: ${(props) => props.theme.size2};
`;

export const Mask = styled.div<{ $selected: boolean }>`
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.9;
  background: ${(props) =>
    props.$selected ? "transparent" : props.theme.black};
`;

export const MovieItem = styled.div`
  display: grid;
  grid-template-areas:
    "img"
    "title";
  grid-template-rows: 85% 15%;
  place-items: center;
  position: relative;

  img {
    grid-area: img;
    cursor: pointer;
    height: 100%;
  }

  h5 {
    grid-area: title;
    padding: 4px;
    text-transform: uppercase;
    text-align: center;
  }
`;

export const MovieColumn = styled.div<{ $length: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.$length}, minmax(0, 1fr));
  grid-column-gap: ${(props) => props.theme.size2};
  margin: ${(props) => props.theme.size1} 0;
`;

export const ToggleBar = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    grid-template-columns: 30% 70%;
  }
`;

export const SelectedMovie = styled.div`
  display: grid;
  p {
    text-align: justify;
    margin: ${(props) => props.theme.size1} 0;
  }
`;

export const ToggleContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px;
  width: 100%;
  padding: 0;
  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    padding: 0 0 0 54px;
  }
  ${Flex} {
    svg {
      width: 30px;
      height: 30px;
      @media (min-width: ${(props) => props.theme.breakpoint_small}) {
        width: 35px;
        height: 35px;
      }
    }
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
