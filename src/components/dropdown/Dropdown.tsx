import React, { useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import {
  Arrow,
  DropdownButton,
  DropdownContainer,
  DropdownContent,
} from "./Dropdown.styles";
import { DropdownProps } from "./Dropdown.interface";
import useDetectOutsideClick from "../../hooks/useDetectOutsideClick";
import { Grid } from "../layout/globalStyles/global.styles";

// Reusable Dropdown Component
const Dropdown: React.FC<DropdownProps> = ({ Label, children }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [toggleDropdown, setToggleDropdown] = useDetectOutsideClick(
    dropdownRef,
    false
  );

  const setDropdown = (): void => {
    setToggleDropdown(!toggleDropdown);
  };

  return (
    <DropdownContainer
      ref={dropdownRef}
      onClick={() => setToggleDropdown(true)}
    >
      <DropdownButton $active={toggleDropdown} onClick={setDropdown}>
        <h4>{Label}</h4>
        <Arrow
          initial={{ rotate: 0 }}
          animate={{
            rotate: toggleDropdown ? 180 : 0,
            originX: 0.5,
          }}
        >
          <IoIosArrowDown />
        </Arrow>
      </DropdownButton>
      <AnimatePresence>
        {toggleDropdown && (
          <DropdownContent
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </DropdownContent>
        )}
      </AnimatePresence>
    </DropdownContainer>
  );
};

export default Dropdown;
