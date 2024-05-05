import styled from "styled-components";
import { motion } from "framer-motion";

export const FilterActions = styled.div`
  display: grid;
  grid-template-areas: "tabs filter";
  grid-template-columns: 1fr 70px;
  grid-column-gap: 1px;
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
  width: 75px;
  grid-area: filter;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${(props) => props.theme.grey};
  padding: ${(props) => props.theme.size1} ${(props) => props.theme.size2};
  border-radius: ${(props) => props.theme.size4};
  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    width: 65%;
  }
  svg {
    width: 24px;
    height: 24px;
    fill: ${(props) => props.theme.orange};
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
      width: 24px;
      height: 24px;
      margin-left: ${(props) => props.theme.size1};
    }
  }
`;

export const StickyFilter = styled(FilterIcon)`
  position: fixed;
  top: ${(props) => props.theme.size6};
  width: 35%;
  left: 34%;
  z-index: 10;
  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    width: 16%;
    left: 44%;
  }
  h4 {
    display: block;
  }
  span {
    width: 30px;
    height: 24px;

    @media (min-width: ${(props) => props.theme.breakpoint_small}) {
      width: 24px;
      height: 24px;
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
