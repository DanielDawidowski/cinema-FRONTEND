import React, { useState } from "react";
import { useAnimation } from "framer-motion";
import { AccordionProps } from "./Accordion.interface";
import {
  AccordionContainer,
  AccordionContent,
  AccordionHeader,
} from "./Accordion.styles";

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();

  const toggleAccordion = async () => {
    setIsOpen(!isOpen);
    await controls.start(isOpen ? { height: 0 } : { height: "auto" });
  };

  return (
    <AccordionContainer
      animate={controls}
      initial={{ height: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <AccordionHeader onClick={toggleAccordion}>
        <strong>{title}</strong>
      </AccordionHeader>
      <AccordionContent
        isOpen={isOpen}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </AccordionContent>
    </AccordionContainer>
  );
};

export default Accordion;
