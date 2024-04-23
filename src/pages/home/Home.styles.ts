import styled from "styled-components";
import { motion } from "framer-motion";
import { TabsElement, TabsStyles } from "../auth/auth-tabs/Auth.styles";
import { Flex } from "../../components/layout/globalStyles/global.styles";

export const FilterActions = styled.div`
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
  span {
    background: ${(props) => props.theme.gradient};
    border-radius: 50%;
    width: 30px;
    height: 24px;
    display: grid;
    place-items: center;
    color: ${(props) => props.theme.black};
    margin-left: 4px;
    @media (min-width: ${(props) => props.theme.breakpoint_small}) {
      width: 40px;
      height: 24px;
      margin-left: ${(props) => props.theme.size1};
    }
  }
`;

export const FilterModal = styled.div`
  padding: ${(props) => props.theme.size1};
`;

export const FilterItem = styled.div`
  display: grid;
  width: 300px;
  margin: ${(props) => props.theme.size1} 0;
  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    width: 500px;
  }
  h5 {
    color: ${(props) => props.theme.orange};
    cursor: pointer;
  }
`;

export const FilterItemHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: ${(props) => props.theme.size2};
  margin-bottom: ${(props) => props.theme.size2};
  border-bottom: 1px solid ${(props) => props.theme.grey};
`;

export const FilterItemBody = styled(motion.ul)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: ${(props) => props.theme.size2};
`;

export const FilterRadio = styled.div`
  display: flex;
  align-items: center;
`;

export const StickyFilter = styled(FilterIcon)`
  position: fixed;
  top: ${(props) => props.theme.size6};
  width: 35%;
  left: 34%;
  z-index: 10;
  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    width: 10%;
    left: 47%;
  }
  h4 {
    display: block;
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
