import styled from "styled-components";
import { motion } from "framer-motion";
import { Flex } from "../../../../components/layout/globalStyles/global.styles";

export const MoviesList = styled.div`
  margin: ${(props) => props.theme.size2};
  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    margin: ${(props) => props.theme.size2} 0;
  }
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

export const Days = styled.div`
  display: flex;
  margin-bottom: ${(props) => props.theme.size3};
`;

export const Day = styled.div<{ $selected: boolean }>`
  display: grid;
  margin-right: ${(props) => props.theme.size3};
  cursor: pointer;

  h4 {
    color: ${(props) =>
      props.$selected ? props.theme.white : props.theme.orange};
  }
`;

export const TodaysMovieList = styled.ul`
  display: grid;
  margin: ${(props) => props.theme.size2};
  height: 100%;
  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    margin: ${(props) => props.theme.size2} 0;
  }
`;

export const TodaysMovieListItem = styled.li`
  display: grid;
  grid-template-areas:
    "img name"
    "img categories"
    "img shows";
  grid-template-columns: 140px 1fr;
  border-bottom: 1px solid ${(props) => props.theme.grey};
  margin: ${(props) => props.theme.size1};
  padding-bottom: ${(props) => props.theme.size2};
  padding-top: ${(props) => props.theme.size5};
  height: 100%;
  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    grid-template-columns: 180px 1fr;
    grid-template-rows: 50px 35px 1fr;
    margin: ${(props) => props.theme.size2} 0;
  }

  img {
    grid-area: img;
    max-width: 130px;

    @media (min-width: ${(props) => props.theme.breakpoint_small}) {
      max-width: 150px;
    }
  }

  h4 {
    grid-area: name;
    text-transform: uppercase;
    height: 100%;
  }
`;

export const MovieItemCategories = styled.ul`
  display: grid;
  grid-area: categories;
  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    display: flex;
  }
  h5 {
    color: ${(props) => props.theme.white_1};
    text-transform: lowercase;
    letter-spacing: 0.8px;
  }
  h5::after {
    content: "";

    @media (min-width: ${(props) => props.theme.breakpoint_small}) {
      content: " /";
    }
  }
  h5:last-child::after {
    content: "";
  }
`;

export const MovieItemContent = styled.ul`
  grid-area: shows;
  display: grid;
  margin-top: ${(props) => props.theme.size2};

  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    display: flex;
    margin-top: 0;
  }

  a {
    margin-right: ${(props) => props.theme.size2};
  }
`;
