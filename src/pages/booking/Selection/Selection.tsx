import React, { useState, useCallback, useEffect } from "react";
import type { FC, ReactElement } from "react";
import type { Dispatch as ReduxDispatch } from "@reduxjs/toolkit";
import { IHall, ISeat } from "../../../interfaces/hall/hall.interface";
import { hallService } from "../../../services/api/hall/hall.service";
import Seat from "../../admin/hall/seat/Seat";
import { setSelectedSeat } from "../../../redux-toolkit/reducers/hall/hall.reducer";
import { useAppDispatch, useAppSelector } from "../../../redux-toolkit/hooks";
import { HallUtils } from "../../../utils/hall-utils";
import { Screen, SelectionSeats, SelectionStyles } from "./Selection.styles";
import Legend from "../../../components/legend/Legend";
import Movie from "../movie/Movie";

interface ISelection {
  hallId?: string;
  movieId?: string;
}

const Selection: FC<ISelection> = (props): ReactElement => {
  const { hallId, movieId } = props;

  const [seats, setSeats] = useState<ISeat[]>([] as ISeat[]);
  const [hall, setHall] = useState<IHall>({} as IHall);

  const { selectedSeats } = useAppSelector((state) => state.hall);
  const dispatch: ReduxDispatch = useAppDispatch();

  const getHall = useCallback(async () => {
    try {
      const response = await hallService.getHall(hallId as string);
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
    getHall();
  }, [getHall]);

  useEffect(() => {
    setSeats(hall.seats);
  }, [hall.seats]);

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
          />
        ))}
      </SelectionSeats>
      <Legend flex />
      <Movie movieId={movieId!} hall={hall} />
    </SelectionStyles>
  );
};

export default Selection;
