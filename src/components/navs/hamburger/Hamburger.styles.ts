import styled from "styled-components";
import { motion } from "framer-motion";

export const HamburgerMenu = styled(motion.div)`
  height: 30px;
  button {
    border: none;
    background: none;
    outline: none;
    width: 24px;
    display: grid;
    margin-top: 2px;
    span {
      width: 24px;
      height: 4px;
      display: block;
      background: ${(props) => props.theme.white};
      border-radius: 8px;
      margin-bottom: 4px;
    }
  }
`;

export const CloseMenu = styled.div`
  transform: rotate(45deg);
  height: 24px;
  button {
    border: none;
    background: none;
    outline: none;
    width: 24px;
    height: 24px;
    display: grid;
    place-items: center;
    position: relative;
    span {
      width: 24px;
      height: 4px;
      display: block;
      background: ${(props) => props.theme.white};
      border-radius: 25%;

      &:nth-child(1) {
        transform: rotate(0deg);
        position: absolute;
      }
      &:nth-child(2) {
        transform: rotate(90deg);
        position: absolute;
      }
    }
  }
`;
