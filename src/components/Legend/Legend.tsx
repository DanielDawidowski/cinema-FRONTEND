import React, { ReactElement } from "react";
import type { FC } from "react";
import type { Dispatch } from "@reduxjs/toolkit";
import { LegendList, LegendListItem, LegendStyles } from "./Legend.styles";
import { SeatType } from "../../interfaces/hall/hall.interface";
import { changeSeatType } from "../../redux-toolkit/reducers/hall/hall.reducer";
import { useAppDispatch } from "../../redux-toolkit/hooks";
import SeatSVG from "../../assets/svg/seatSVG";

const Legend: FC = (): ReactElement => {
  const dispatch: Dispatch = useAppDispatch();

  const handleChangeType = (newType: SeatType) => {
    dispatch(changeSeatType({ newType }));
  };
  return (
    <LegendStyles>
      <LegendList>
        <LegendListItem onClick={() => handleChangeType(SeatType.standard)}>
          <SeatSVG type={SeatType.standard} />
          <h4>standard</h4>
        </LegendListItem>
        <LegendListItem onClick={() => handleChangeType(SeatType.vip)}>
          <SeatSVG
            type={SeatType.vip}
            onClick={() => handleChangeType(SeatType.vip)}
          />
          <h4>VIP</h4>
        </LegendListItem>
        <LegendListItem onClick={() => handleChangeType(SeatType.handicapped)}>
          <SeatSVG type={SeatType.handicapped} />
          <h4>handicapped</h4>
        </LegendListItem>
        <LegendListItem onClick={() => handleChangeType(SeatType.exclusive)}>
          <SeatSVG type={SeatType.exclusive} />
          <h4>exclusive</h4>
        </LegendListItem>
        <LegendListItem onClick={() => handleChangeType(SeatType.removed)}>
          <SeatSVG type={SeatType.removed} />
          <h4>remove</h4>
        </LegendListItem>
      </LegendList>
    </LegendStyles>
  );
};
export default Legend;
