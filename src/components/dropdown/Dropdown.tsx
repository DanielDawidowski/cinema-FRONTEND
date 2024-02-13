import React, { useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import {
  Arrow,
  DropdownButton,
  DropdownContainer,
  DropdownContent,
  DropdownLabel,
} from "./Dropdown.styles";
import { DropdownProps } from "./Dropdown.interface";
import useDetectOutsideClick from "../../hooks/useDetectOutsideClick";

// Reusable Dropdown Component
const Dropdown: React.FC<DropdownProps> = ({
  label,
  children,
  title = false,
  link = false,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [toggleDropdown, setToggleDropdown] = useDetectOutsideClick(
    dropdownRef,
    false
  );

  const setDropdown = (): void => {
    if (!link && !toggleDropdown) {
      setToggleDropdown(true);
    } else if (toggleDropdown && link) {
      setToggleDropdown(true);
    } else if (title) {
      setToggleDropdown(!toggleDropdown);
    } else if (link) {
      setToggleDropdown(!toggleDropdown);
    }
  };

  return (
    <DropdownContainer ref={dropdownRef} onClick={setDropdown}>
      <DropdownLabel>
        {title ? <h6>Choose cinema</h6> : null}
        <DropdownButton $border={title}>
          <span>{label}</span>
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
      </DropdownLabel>
      <AnimatePresence>
        {toggleDropdown ? (
          <DropdownContent
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </DropdownContent>
        ) : null}
      </AnimatePresence>
    </DropdownContainer>
  );
};

export default Dropdown;
