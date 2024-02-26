import React from "react";
import type { FC, ReactElement } from "react";
import { TooltipProps } from "./Tooltip.interface";
import {
  TooltipContent,
  TooltipTrigger,
  TooltipWrapper,
} from "./Tooltip.styles";

const Tooltip: FC<TooltipProps> = ({ text, children }): ReactElement => {
  return (
    <TooltipWrapper>
      <TooltipTrigger>
        <TooltipContent>{text}</TooltipContent>
        {children}
      </TooltipTrigger>
    </TooltipWrapper>
  );
};

export default Tooltip;
