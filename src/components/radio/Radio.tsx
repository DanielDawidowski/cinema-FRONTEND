import React, { useState } from "react";
import { GenericRadioProps, OptionType } from "./Radio.interface";
import {
  HiddenRadioInput,
  RadioContainer,
  RadioLabel,
  RadioText,
  StyledRadio,
} from "./Radio.styles";

const Radio = <T extends OptionType>({
  options,
  onChange,
  seat,
}: GenericRadioProps<T>) => {
  const [selectedValue, setSelectedValue] = useState<T | null>(null);

  const handleOptionChange = (option: T) => {
    setSelectedValue(option);
    onChange(seat!, option);
  };

  return (
    <RadioContainer>
      {options.map((option) => (
        <RadioLabel key={option}>
          <HiddenRadioInput
            type="radio"
            value={option}
            checked={
              !selectedValue ? option === options[0] : selectedValue === option
            }
            onChange={() => handleOptionChange(option)}
          />
          <StyledRadio
            $checked={
              !selectedValue ? option === options[0] : selectedValue === option
            }
          />
          <RadioText
            $checked={selectedValue === option}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {option}
          </RadioText>
        </RadioLabel>
      ))}
    </RadioContainer>
  );
};

export default Radio;
