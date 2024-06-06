import React, { useState, useEffect, useCallback } from "react";
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
import { IShow } from "../../../interfaces/show/show.interface";
import { hallService } from "../../../services/api/hall/hall.service";

interface ISelection {
  show: IShow;
}

const Selection: FC<ISelection> = ({ show }): ReactElement => {
  const [seats, setSeats] = useState<ISeat[]>([] as ISeat[]);
  const [hall, setHall] = useState<IHall>({} as IHall);
  const [halls, setHalls] = useState<IHall[]>([] as IHall[]);

  const { selectedSeats } = useAppSelector((state) => state.hall);
  const dispatch: ReduxDispatch = useAppDispatch();

  const getHallsByCity = useCallback(async (): Promise<void> => {
    try {
      const response = await hallService.getHallsByCity(show.city);
      setHalls(response.data.list);
      // console.log("response", response.data.events);
    } catch (error) {
      console.log("error", error);
    }
  }, [show.city]);

  const hallId = HallUtils.hallId(halls, show.city, show.hall);

  const getHall = useCallback(async () => {
    try {
      const response = await hallService.getHall(hallId);
      setHall(response.data.hall);
    } catch (error) {
      console.error(error);
    }
  }, [hallId]);

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

  useEffect(() => {
    getHall();
  }, [getHall]);

  useEffect(() => {
    getHallsByCity();
  }, [getHallsByCity]);

  return (
    <SelectionStyles>
      <Screen />
      <SelectionSeats $rows={hallRows!} $columns={hallColumns!}>
        {seats?.map((seat: ISeat, i: number) => (
          <Seat
            key={i}
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
