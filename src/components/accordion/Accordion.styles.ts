import styled from "styled-components";
import { motion } from "framer-motion";
import { AccordionItemProps } from "./Accordion.interface";

export const AccordionContainer = styled(motion.div)`
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 10px;
  overflow: hidden;
`;

export const AccordionHeader = styled(motion.div)`
  background-color: #f1f1f1;
  padding: 10px;
  cursor: pointer;
`;

export const AccordionContent = styled(motion.div)<AccordionItemProps>`
  padding: 10px;
`;
