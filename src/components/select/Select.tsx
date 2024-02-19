import React, { useState, useRef } from "react";
import propTypes from "prop-types";
import { SelectProps } from "./Select.interface";
import {
  SelectButton,
  SelectContainer,
  SelectLabel,
  SelectMenu,
  SelectOption,
} from "./Select.styles";
import useDetectOutsideClick from "../../hooks/useDetectOutsideClick";
import { IMovieCategories } from "../../interfaces/movie/movie.interface";

const Select: React.FC<SelectProps> = ({
  options,
  onSelect,
  label,
  selectedOption,
}) => {
  const selectRef = useRef<HTMLDivElement>(null);
  const [toggleSelect, setToggleSelect] = useDetectOutsideClick(
    selectRef,
    false
  );

  const handleToggle = (): void => {
    setToggleSelect(!toggleSelect);
  };

  const handleSelect = (option: string & IMovieCategories & number): void => {
    onSelect(option);
    setToggleSelect(false);
  };

  return (
    <SelectContainer ref={selectRef}>
      <SelectLabel>{label}</SelectLabel>
      <SelectButton onClick={handleToggle}>
        {selectedOption || "Choose"}
      </SelectButton>
      {toggleSelect && (
        <SelectMenu
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          {options?.map((option) => (
            <SelectOption
              whileHover={{ scale: 1.01 }}
              key={option}
              onClick={() =>
                handleSelect(option as string & IMovieCategories & number)
              }
            >
              {option}
            </SelectOption>
          ))}
        </SelectMenu>
      )}
    </SelectContainer>
  );
};

Select.propTypes = {
  options: propTypes.array.isRequired,
  onSelect: propTypes.func.isRequired,
  label: propTypes.string.isRequired,
};

export default Select;
