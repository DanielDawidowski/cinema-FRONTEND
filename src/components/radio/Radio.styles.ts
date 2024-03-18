import styled from "styled-components";
import { motion } from "framer-motion";

export const RadioContainer = styled.div`
  display: flex;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  padding: 8px;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;
`;

export const HiddenRadioInput = styled.input`
  display: none;
`;

export const StyledRadio = styled(motion.div)<{ $checked: boolean }>`
  position: relative;
  width: 20px;
  height: 20px;
  border: 2px solid
    ${(props) => (props.$checked ? "inherit" : props.theme.grey)};
  border-radius: 50%;
  margin-right: 10px;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 17px;
    height: 17px;
    background-color: transparent;
    border-radius: 50%;
    transition: background-color 1s ease;
  }

  ${HiddenRadioInput}:checked + &::before {
    background: ${(props) => props.theme.primary};
  }
`;

export const RadioText = styled(motion.span)<{ $checked: boolean }>`
  user-select: none;
  color: ${(props) => (props.$checked ? props.theme.orange : "inherit")};
`;
