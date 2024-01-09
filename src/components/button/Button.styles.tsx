import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import IButton from "./Button.interface";

const COLOR = {
  PRIMARY: css`
    border-radius: 8px;
    background: linear-gradient(45deg, #ffcc00, #ff6600);
    color: #fff;
    border: 2px solid transparent;
    border-image: linear-gradient(45deg, #ffcc00, #ff6600);
    border-image-slice: 1;
    &:hover {
      background: linear-gradient(45deg, #ff6600, #ffcc00);
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
`;
