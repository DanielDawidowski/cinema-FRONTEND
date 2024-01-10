import styled from "styled-components";
import { motion } from "framer-motion";

export const NavStyles = styled(motion.section)`
  position: fixed;
  top: 60px;
  width: 100%;
  height: 100%;
  padding: ${(props) => props.theme.size1};
  background: ${(props) => props.theme.red};
  z-index: 9999;
`;

export const NavHeader = styled.div`
  padding: ${(props) => props.theme.size1};
`;

export const NavBody = styled.div`
  width: 100%;
  height: 100%;
  padding: ${(props) => props.theme.size4};
`;
