import React, { useEffect, useState } from "react";
import type { ReactElement, FC, Dispatch, SetStateAction } from "react";
import {
  DrawerInner,
  DrawerWrapper,
  HallDashboard,
  Main,
  Row,
  Rows,
} from "../CreateHall.styles";
import Seat from "../seat/Seat";

import { HallUtils } from "../../../../utils/hall-utils";
import { ISeat, SeatType } from "../../../../interfaces/hall/hall.interface";
import { SeatButton } from "../seat/Seat.styles";

interface ICreateHall {
  rows: string;
  columns: string;
  total: ISeat[];
  setTotal: Dispatch<SetStateAction<ISeat[]>>;
}

const HallCreateDashboard: FC<ICreateHall> = ({
  rows,
  columns,
  total,
  setTotal,
}): ReactElement => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [selectedSeats, setSelectedSeats] = useState<ISeat[]>([] as ISeat[]);

  const parsedRows = parseFloat(rows);
  const parsedColumns = parseFloat(columns);

  const seats = HallUtils.generateBoxes(parsedRows, parsedColumns);

  const changeSeatType = (newSeatType: SeatType) => {
    const updatedBoxes = selectedSeats.map((box) => ({
      ...box,
      type: newSeatType,
    }));
    setSelectedSeats(updatedBoxes);
    const updatedSeats = seats.map((seat) =>
      selectedSeats.some(
        (box) => box.row === seat.row && box.seat === seat.seat
      )
        ? { ...seat, type: newSeatType }
        : seat
    );
    HallUtils.seats = [...updatedSeats];
    setSelectedSeats([]);
    console.log("HallUtils", HallUtils.seats);
  };

  useEffect(() => {
    if (selectedSeats.length > 0) {
      setIsDrawerOpen(true);
    } else {
      setIsDrawerOpen(false);
    }
  }, [selectedSeats.length]);

  return (
    <Main>
      {parsedRows ? (
        <Rows $length={parsedRows}>
          {Array.from(Array(parsedRows > 0 ? parsedRows : null).keys()).map(
            (i) => (
              <Row key={i}>{HallUtils.replaceNumberOnLetter(i)}</Row>
            )
          )}
        </Rows>
      ) : null}
      <HallDashboard $rows={parsedRows} $columns={parsedColumns}>
        {seats.map((seat: ISeat, i) => (
          <Seat
            key={i}
            seat={seat}
            rows={parsedRows}
            columns={parsedColumns}
            total={total}
            setTotal={setTotal}
            setIsDrawerOpen={setIsDrawerOpen}
            selectedSeats={selectedSeats}
            setSelectedSeats={setSelectedSeats}
          />
        ))}
      </HallDashboard>
      <div>
        {selectedSeats.map((el, i) => (
          <div
            key={i}
            style={{ border: "1px solid #fff", borderRadius: "8px" }}
          >
            {/* <p>nr:{i + 1}</p> */}
            <p>seat:{el.seat}</p>
            <p>row:{el.row}</p>
            <p>row:{el.type}</p>
          </div>
        ))}
      </div>

      {isDrawerOpen ? (
        <DrawerWrapper>
          <DrawerInner>
            <SeatButton onClick={() => changeSeatType(SeatType.standard)}>
              <h4>Change to Standard</h4>
            </SeatButton>
            <SeatButton onClick={() => changeSeatType(SeatType.vip)}>
              <h4>Change to VIP</h4>
            </SeatButton>
            <SeatButton onClick={() => changeSeatType(SeatType.handicapped)}>
              <h4>Change to Handicapped</h4>
            </SeatButton>
            <SeatButton onClick={() => changeSeatType(SeatType.exclusive)}>
              <h4>Change to Exclusive</h4>
            </SeatButton>
          </DrawerInner>
        </DrawerWrapper>
      ) : null}
    </Main>
  );
};

export default HallCreateDashboard;
