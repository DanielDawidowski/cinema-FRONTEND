import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import IButton from "./Button.interface";

const COLOR = {
  PRIMARY: css`
    border-radius: 8px;
    background: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.white};
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      background: ${(props) => props.theme.black_light};
      border-radius: 8px;
      width: 96%;
      height: 96%;
      top: 2%;
      left: 2%;
      z-index: -1;
    }
  `,
  SECONDARY: css`
    color: ${(props) => props.theme.orange};
    background: ${(props) => props.theme.secondary};
    border: 2px solid ${(props) => props.theme.orange};
    box-shadow: 1px 2px 1px ${(props) => props.theme.secondary};
    border-radius: 8px;
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
  border: none;
  border-radius: 50px;
  font-weight: 700;
  outline: none;
  transition: all 0.2s;
  letter-spacing: 1.2px;

  ${(props) => props.color && COLOR[props.color]}
  ${(props) => props.disabled && DISABLED}
  ${(props) => props.children && CHILDREN}
`;
