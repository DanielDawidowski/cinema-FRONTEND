import React, { useState, useEffect } from "react";
import type { FC, ReactElement } from "react";
import type { Dispatch as ReduxDispatch } from "@reduxjs/toolkit";
import { IHall, ISeat } from "../../../interfaces/hall/hall.interface";
import Seat from "../../admin/hall/seat/Seat";
import {
  resetSelectedSeats,
  setSelectedSeat,
  setSmallSize,
} from "../../../redux-toolkit/reducers/hall/hall.reducer";
import { useAppDispatch, useAppSelector } from "../../../redux-toolkit/hooks";
import { HallUtils } from "../../../utils/hall-utils";
import { Screen, SelectionSeats, SelectionStyles } from "./Selection.styles";
import Legend from "../../../components/legend/Legend";

interface ISelection {
  hall: IHall;
}

const Selection: FC<ISelection> = ({ hall }): ReactElement => {
  const [seats, setSeats] = useState<ISeat[]>([] as ISeat[]);

  const { selectedSeats } = useAppSelector((state) => state.hall);
  const dispatch: ReduxDispatch = useAppDispatch();

  const handleSeat = (seat: ISeat) => {
    if (selectedSeats.length < 10) {
      dispatch(setSelectedSeat({ seat }));
    } else if (selectedSeats.includes(seat)) {
      dispatch(setSelectedSeat({ seat }));
    }
  };

  const hallRows = HallUtils.countRows(hall.seats);

  const hallColumns = HallUtils.countColumns(hall.seats);

  useEffect(() => {
    setSeats(hall.seats);
  }, [hall.seats]);

  useEffect(() => {
    dispatch(resetSelectedSeats());
    dispatch(setSmallSize({ column: hallColumns }));
  }, [dispatch, hallRows, hallColumns]);

  return (
    <SelectionStyles>
      <Screen />
      <SelectionSeats $rows={hallRows!} $columns={hallColumns!}>
        {seats?.map((seat: ISeat, i) => (
          <Seat
            key={seat._id}
            seat={seat}
            onClick={() => handleSeat(seat)}
            selection
            totalColumns={hallColumns!}
          />
        ))}
      </SelectionSeats>
      <Legend flex />
    </SelectionStyles>
  );
};

export default Selection;
