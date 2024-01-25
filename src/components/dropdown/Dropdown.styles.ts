import styled from "styled-components";
import { motion } from "framer-motion";

export const DropdownContainer = styled.div`
  position: relative;
`;

export const DropdownButton = styled.h3<{ $active?: boolean }>`
  cursor: pointer;
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.white};
`;

export const DropdownContent = styled(motion.div)`
  position: absolute;
  top: 120%;
  right: 0;
  width: 250px;
  background-color: ${(props) => props.theme.black};
  padding: ${(props) => props.theme.size2};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${(props) => props.theme.white};
  z-index: 99999;
`;

export const DropdownElementStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.white};
  width: 100%;
  a {
    h4 {
      margin: ${(props) => props.theme.size2} 0;
      color: ${(props) => props.theme.white};
    }
  }

  &:first-child {
    a {
      h2 {
        margin-top: 0;
      }
    }
  }

  &:last-child {
    border-bottom: none;
    a {
      h2 {
        margin-bottom: 0;
      }
    }
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
