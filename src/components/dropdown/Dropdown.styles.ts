import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const DropdownContainer = styled.div`
  position: relative;
`;

export const DropdownLabel = styled.div`
  display: grid;

  h6 {
    display: none;
    @media (min-width: ${(props) => props.theme.breakpoint_small}) {
      display: block;
      color: ${(props) => props.theme.white_opacity};
    }
  }
`;

export const DropdownButton = styled.h4<{ $border?: boolean }>`
  cursor: pointer;
  display: flex;
  justify-content: space-between;

  ${({ $border }) =>
    $border
      ? css`
          border-bottom: 1px solid ${(props) => props.theme.white};
        `
      : css`
          border: none;
        `}
`;

export const DropdownContent = styled(motion.div)`
  position: absolute;
  top: 120%;
  right: 0;
  width: 100%;
  background-color: ${(props) => props.theme.black};
  padding: ${(props) => props.theme.size2};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${(props) => props.theme.white};
  z-index: 99999;
  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    width: 250px;
  }
`;

export const Arrow = styled(motion.div)`
  display: grid;
  place-items: center;
  svg {
    width: 15px;
    height: 15px;
    fill: ${(props) => props.theme.orange};
  }
`;
