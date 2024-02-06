import styled from "styled-components";
import { motion } from "framer-motion";
import { SpinnerProps } from "./Spinner.interface";

export const StyledSpinner = styled(motion.div)<SpinnerProps>`
  border: 7px solid ${(props) => props.theme.yellow};
  border-top: 7px solid ${(props) => props.theme.orange};
  border-bottom: 7px solid ${(props) => props.theme.orange};
  border-radius: 50%;
  width: ${(props) => props.size || 40}px;
  height: ${(props) => props.size || 40}px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
