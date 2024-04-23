import React from "react";
import type { FC, ReactElement } from "react";
import { FilterRadio } from "../../Home.styles";
import {
  HiddenRadioInput,
  RadioLabel,
  RadioText,
  StyledRadio,
} from "../../../../components/radio/Radio.styles";

const radioOptions = ["latest", "alphabet"];

interface ISortFilters {
  selectedFilter: string | null;
  setSelectedFilter: (selectedFilter: string | null) => void;
}

const SortFilters: FC<ISortFilters> = ({
  selectedFilter,
  setSelectedFilter,
}): ReactElement => {
  const handleOptionChange = (option: string | null) => {
    setSelectedFilter(option);
  };

  return (
    <FilterRadio>
      {radioOptions.map((option) => (
        <RadioLabel key={option}>
          <HiddenRadioInput
            type="radio"
            value={option}
            checked={selectedFilter === option}
            onChange={() => handleOptionChange(option)}
          />
          <StyledRadio $checked={selectedFilter === option} />
          <RadioText
            $checked={selectedFilter === option}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {option}
          </RadioText>
        </RadioLabel>
      ))}
    </FilterRadio>
  );
};

export default SortFilters;
