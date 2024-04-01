import React, { useState } from "react";
import { RadioProps } from "./Radio.interface";
import {
  HiddenRadioInput,
  RadioContainer,
  RadioLabel,
  RadioText,
  StyledRadio,
} from "./Radio.styles";
import {
  ITicketType,
  ITicketTypes,
} from "../../interfaces/ticket/ticket.interface";
import { SeatTypes } from "../../interfaces/hall/hall.interface";

const Radio: React.FC<RadioProps> = ({ options, onChange, seat }) => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleOptionChange = (seat: SeatTypes, option: ITicketTypes) => {
    setSelectedValue(option);
    onChange(seat, option);
  };

  return (
    <RadioContainer>
      {options.map((option) => (
        <RadioLabel key={option}>
          <HiddenRadioInput
            type="radio"
            value={option}
            checked={
              !selectedValue
                ? option === ITicketType.standard
                : selectedValue === option
            }
            onChange={() => handleOptionChange(seat, option)}
          />
          <StyledRadio
            $checked={
              !selectedValue
                ? option === ITicketType.standard
                : selectedValue === option
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
