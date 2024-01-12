import { motion } from "framer-motion";
import styled from "styled-components";

export const MenuItem = styled(motion.li)<{ $active?: boolean }>``;

export const MenuStyles = styled(motion.ul)``;

export const Logout = styled.div`
  img {
    width: 35px;
    height: 35px;
  }
`;
