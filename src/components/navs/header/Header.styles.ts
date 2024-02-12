import styled, { css } from "styled-components";

export const HeaderStyles = styled.header`
  margin: 0;
  width: 100%;
  height: 100%;
  display: grid;
`;

export const Inner = styled.div`
  padding: ${(props) => props.theme.size3};
  background: ${(props) => props.theme.black};
  position: relative;
  height: 60px;
  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    height: 100%;
    padding: ${(props) => props.theme.size1};
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-areas:
    "logo icons"
    "dropdown dropdown";
  grid-template-columns: 1fr 70px;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: ${(props) => props.theme.size1};
  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    grid-template-areas: "logo dropdown media";
    grid-template-rows: 1fr;
    grid-template-columns: 70px 250px 1fr;
    grid-column-gap: ${(props) => props.theme.size1};
  }
`;

export const Icons = styled.div`
  grid-area: icons;
  display: flex;
  align-items: center;
  width: 70px;
  margin-bottom: 8px;
  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    display: none;
  }
  svg {
    width: 30px;
    height: 30px;
    fill: ${(props) => props.theme.white};
  }
`;

export const LogoStyles = styled.div`
  grid-area: logo;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    justify-content: center;
    align-items: flex-end;
  }
`;

export const DropdownStyles = styled.div`
  grid-area: dropdown;
`;

export const MediaStyles = styled.div<{ $media?: boolean }>`
  grid-area: media;

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
