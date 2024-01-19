import React, { ReactElement, useState } from "react";
import type { FC } from "react";
import { BiHandicap } from "react-icons/bi";
import { ISeat, ISeatProps } from "../../../../interfaces/hall/hall.interface";
import { SeatStyles } from "./Seat.styles";
import { HallUtils } from "../../../../utils/hall-utils";

const Seat: FC<ISeatProps> = ({
  seat,
  rows,
  columns,
  selectedSeats,
  setSelectedSeats,
}): ReactElement => {
  const handleBoxClick = (row: string, seat: number) => {
    const clickedBox = HallUtils.seats.find(
      (box) => box.row === row && box.seat === seat
    );

    if (clickedBox) {
      const isBoxClicked = selectedSeats.some(
        (box) => box.row === row && box.seat === seat
      );
      if (isBoxClicked) {
        // If already clicked, remove from array
        const updatedBoxes = selectedSeats.filter(
          (box) => box.row !== row || box.seat !== seat
        );
        setSelectedSeats(updatedBoxes);
      } else {
        // If not clicked, add to array
        const updatedBoxes = [...selectedSeats, clickedBox];
        setSelectedSeats(updatedBoxes);
      }
    }
  };

  return (
    <SeatStyles
      $selected={selectedSeats.some(
        (box) => box.row === seat.row && box.seat === seat.seat
      )}
      $color={HallUtils.emitSeatTypeColor(seat.type)}
      onClick={() => handleBoxClick(seat.row, seat.seat)}
    >
      <div>{seat.seat}</div>
    </SeatStyles>
  );
};

export default Seat;
