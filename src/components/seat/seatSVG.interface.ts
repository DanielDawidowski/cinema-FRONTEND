import type { MouseEventHandler } from "react";
import { SeatTypes } from "../../interfaces/hall/hall.interface";

export interface ISeatSVG {
  type: SeatTypes;
  selected?: boolean;
  onClick?: MouseEventHandler<SVGSVGElement>;
  selection?: boolean;
  small?: boolean;
}
