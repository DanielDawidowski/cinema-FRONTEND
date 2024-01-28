import styled, { keyframes } from "styled-components";

const bg = keyframes`
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
`;

export const CreateMovieStyles = styled.section`
  margin: ${(props) => props.theme.size1};
`;

export const Category = styled.div<{ $selected: boolean | undefined }>`
  padding: ${(props) => props.theme.size1};
  margin: ${(props) => props.theme.size1} 0;
  cursor: pointer;
  background: ${(props) =>
    props.$selected ? props.theme.gradient : props.theme.black};
  color: ${(props) =>
    props.$selected ? props.theme.black : props.theme.gradient};
  border: 1px solid ${(props) => props.theme.white};
  border-radius: ${(props) => props.theme.size1};
`;

export const MovieListStyles = styled.ul`
  display: grid;
  margin: ${(props) => props.theme.size1};
`;

export const MovieListItem = styled.li`
  display: grid;
  grid-template-columns: 70% 1fr;
  border: 1px solid ${(props) => props.theme.white};
  border-radius: ${(props) => props.theme.size1};
  padding: ${(props) => props.theme.size1} ${(props) => props.theme.size2};
  margin: ${(props) => props.theme.size1} 0;
  position: relative;
  overflow: hidden;

  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    grid-template-columns: 90% 1fr;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    z-index: -1;
    transition: background-size 0.3s ease-in-out;
    background: ${(props) => props.theme.primary};
  }

  &:hover::before {
    animation: ${bg} 0.3s ease-in-out forwards;
  }

  &:hover h3 {
    color: ${(props) => props.theme.black};
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  svg {
    width: 25px;
    height: 25px;
    @media (min-width: ${(props) => props.theme.breakpoint_small}) {
      width: 35px;
      height: 35px;
    }
  }
  svg:nth-child(1) {
    margin-top: 6px;
  }
`;
