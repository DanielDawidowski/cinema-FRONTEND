import React, { ReactElement } from "react";
import type { FC } from "react";
import { ISeatProps } from "../../../../interfaces/hall/hall.interface";
import { useAppSelector } from "../../../../redux-toolkit/hooks";
import SeatSVG from "../../../../assets/svg/seatSVG";

const Seat: FC<ISeatProps> = ({ seat, onClick, hall }): ReactElement => {
  const { selectedSeats } = useAppSelector((state) => state.hall);

  const selected = selectedSeats.some(
    (selectSeat) => selectSeat.row === seat.row && selectSeat.seat === seat.seat
  );

  return <SeatSVG selected={selected} type={seat.type} onClick={onClick} />;
};

export default Seat;
