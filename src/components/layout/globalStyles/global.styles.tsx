import styled, { css, createGlobalStyle, keyframes } from "styled-components";

export const bg = keyframes`
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
`;

export const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    -webkit-font-smoothing: antialiased; 
    -webkit-tap-highlight-color: transparent;
}

body {
    background: ${(props) => props.theme.black};
    color: ${(props) => props.theme.white_opacity};
}

a {
    text-decoration: none
}

a:focus {
    outline: none;
} 

ul {
    list-style: none
}

li {
    list-style-type: none
}

img {
    max-width: 100%;
    object-fit: cover;
}
`;

export const Container = styled.div<{ $small?: boolean }>`
  margin: 0 auto;
  max-width: ${(props) => props.theme.breakpoint_tablet};
  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    max-width: ${(props) =>
      props.$small
        ? props.theme.breakpoint_xsmall
        : props.theme.breakpoint_small};
  }
`;

export const Flex = styled.div<{
  $justify?: string;
  $align?: string;
  $direction?: string;
}>`
  display: flex;
  justify-content: ${(props) => props.$justify || "flex-start"};
  align-items: ${(props) => props.$align || "flex-start"};
  flex-direction: ${(props) => props.$direction || ""};
`;

export const Grid = styled.div`
  display: grid;
  place-items: center;
`;

export const DisplayMedia = styled.div<{ $media?: boolean }>`
  ${({ $media }) =>
    $media
      ? css`
          display: none;
          @media (min-width: ${(props) => props.theme.breakpoint_small}) {
            display: block;
          }
        `
      : css`
          display: block;
          @media (min-width: ${(props) => props.theme.breakpoint_small}) {
            display: none;
          }
        `}
`;

export const Line = styled.div<{ $width?: string; $gradient?: boolean }>`
  background: ${(props) =>
    props.$gradient ? props.theme.primary : props.theme.grey};
  width: ${(props) => props.$width};
  height: 3px;
`;

export const ErrorMessage = styled.h4`
  border: 1px solid ${(props) => props.theme.red};
  border-radius: ${(props) => props.theme.size1};
  padding: ${(props) => props.theme.size1} ${(props) => props.theme.size2};
`;

export const ListStyles = styled.ul`
  display: grid;
  margin: ${(props) => props.theme.size1};
  width: 100%;
`;

export const ListItem = styled.li<{ $img?: boolean }>`
  display: grid;
  grid-template-columns: ${(props) => (props.$img ? "20% 50% 1fr" : "70% 1fr")};
  border: 1px solid ${(props) => props.theme.white};
  border-radius: ${(props) => props.theme.size1};
  padding: ${(props) => props.theme.size1} ${(props) => props.theme.size2};
  margin: ${(props) => props.theme.size1} 0;
  position: relative;
  overflow: hidden;
  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    grid-template-columns: ${(props) =>
      props.$img ? "30% 50% 1fr" : "80% 1fr"};
  }

  img {
    border-radius: ${(props) => props.theme.size1};
  }

  h4 {
    width: 100%;
    height: 100%;
    margin: ${(props) => props.theme.size1};
    text-align: center;
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
  margin: ${(props) => props.theme.size1};

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
