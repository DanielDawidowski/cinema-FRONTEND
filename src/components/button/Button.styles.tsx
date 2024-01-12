import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import IButton from "./Button.interface";

const COLOR = {
  PRIMARY: css`
    border-radius: 8px;
    padding: 1px;
    background: ${(props) => props.theme.primary};
    h4 {
      padding: ${(props) => props.theme.size3};
      border-radius: 8px;
      background: ${(props) => props.theme.black_light};
      text-transform: uppercase;
    }
  `,
  SUCCESS: css`
    background: ${(props) => props.theme.green};
    border-radius: 8px;
    padding: 1px;
    h4 {
      padding: ${(props) => props.theme.size3};
      border-radius: 8px;
      background: ${(props) => props.theme.black_light};
      text-transform: uppercase;
    }
  `,
};

const DISABLED = css`
  cursor: not-allowed;
`;

const CHILDREN = css`
  z-index: 1;
`;

export const ButtonStyles = styled(motion.button)<IButton>`
  padding: 10px 15px;
  cursor: pointer;
  font-weight: 700;
  outline: none;
  border: none;
  transition: all 0.2s;
  letter-spacing: 1.2px;
  width: 100%;
  height: 100%;

  ${(props) => props.color && COLOR[props.color]}
  ${(props) => props.disabled && DISABLED}
  ${(props) => props.children && CHILDREN}
`;
