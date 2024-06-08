import React, { ReactElement } from "react";
import type { FC } from "react";
import type { Dispatch } from "@reduxjs/toolkit";
import { LegendList, LegendListItem, LegendStyles } from "./Legenda.styles";
import { SeatType } from "../../interfaces/hall/hall.interface";
import { changeSeatType } from "../../redux-toolkit/reducers/hall/hall.reducer";
import { useAppDispatch } from "../../redux-toolkit/hooks";
import SeatSVG from "../seat/seatSVG";
import { ILegend, ILegendProps } from "./Legenda.interface";

const legends: ILegend[] = [
  {
    svg: <SeatSVG type={SeatType.standard} />,
    name: "standard",
    type: SeatType.standard,
  },
  {
    svg: <SeatSVG type={SeatType.vip} />,
    name: "VIP",
    type: SeatType.vip,
  },
  {
    svg: <SeatSVG type={SeatType.handicapped} />,
    name: "handicapped",
    type: SeatType.handicapped,
  },
  {
    svg: <SeatSVG type={SeatType.exclusive} />,
    name: "exclusive",
    type: SeatType.exclusive,
  },
  {
    svg: <SeatSVG type={SeatType.removed} />,
    name: "removed",
    type: SeatType.removed,
  },
];

const Legend: FC<ILegendProps> = (props): ReactElement => {
  const { flex = false } = props;
  const dispatch: Dispatch = useAppDispatch();

  const handleChangeType = (newType: SeatType) => {
    if (!flex) {
      dispatch(changeSeatType({ newType }));
    }
  };
  return (
    <LegendStyles $flex={flex}>
      <LegendList $flex={flex}>
        {legends.map((legend: ILegend, i: number) =>
          flex && legend.type === SeatType.removed ? null : (
            <LegendListItem
              $flex={flex}
              onClick={() => handleChangeType(legend.type)}
            >
              {legend.svg}
              <h4>{legend.name}</h4>
            </LegendListItem>
          )
        )}
      </LegendList>
    </LegendStyles>
  );
};
export default Legend;
