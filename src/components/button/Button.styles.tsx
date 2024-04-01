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
  SECONDARY: css`
    border-radius: 8px;
    padding: ${(props) => props.theme.size1} ${(props) => props.theme.size4};
    background: ${(props) => props.theme.primary};
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4 {
      border-radius: 8px;
      text-transform: capitalize;
      color: ${(props) => props.theme.black};
    }

    h5 {
      border-radius: 8px;
      text-transform: capitalize;
      color: ${(props) => props.theme.black};
    }
  `,
  SUCCESS: css`
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme.green};
    h4 {
      border-radius: 8px;
      background: ${(props) => props.theme.black_light};
      text-transform: uppercase;
      padding: ${(props) => props.theme.size2};
    }
  `,
  PAGINATION: css`
    border-radius: 8px;
    padding: 1px;
    background: ${(props) => props.theme.primary};
    width: 90px;
    h6 {
      border-radius: 8px;
      background: ${(props) => props.theme.black_light};
      text-transform: uppercase;
      padding: ${(props) => props.theme.size1};
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
  cursor: pointer;
  font-weight: 700;
  outline: none;
  border: none;
  transition: all 0.2s;
  letter-spacing: 1.2px;

  ${(props) => props.color && COLOR[props.color]}
  ${(props) => props.disabled && DISABLED}
  ${(props) => props.children && CHILDREN}
`;
