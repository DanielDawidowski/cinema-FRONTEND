import { ReactElement } from "react";
import { SeatTypes } from "../../interfaces/hall/hall.interface";

export interface ILegend {
  svg: ReactElement;
  name: string;
  type: SeatTypes;
}

export interface ILegendProps {
  flex?: boolean;
}
