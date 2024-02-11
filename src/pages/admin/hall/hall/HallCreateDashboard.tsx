import React, { useCallback, useEffect } from "react";
import type { ReactElement, FC } from "react";
import type { Dispatch as ReduxDispatch } from "@reduxjs/toolkit";
import {
  Columns,
  HallDashboard,
  Dashboard,
  Row,
  Rows,
} from "./HallCreateDashboard.styles";
import Seat from "../seat/Seat";
import { HallUtils } from "../../../../utils/hall-utils";
import { IHall, ISeat } from "../../../../interfaces/hall/hall.interface";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../../redux-toolkit/hooks";
import {
  selectColumn,
  selectRow,
  setSeats,
  setSelectedSeat,
} from "../../../../redux-toolkit/reducers/hall/hall.reducer";

interface ICreateHall {
  rows: string;
  columns: string;
  hall?: IHall;
}

const HallCreateDashboard: FC<ICreateHall> = ({
  rows,
  columns,
  hall,
}): ReactElement => {
  const { seats } = useAppSelector((state) => state.hall);
  const dispatch: ReduxDispatch = useAppDispatch();

  const parsedRows = parseFloat(rows);
  const parsedColumns = parseFloat(columns);

  const hallRows = parsedRows ? parsedRows : HallUtils.countRows(hall?.seats);
  const hallColumns = parsedColumns
    ? parsedColumns
    : HallUtils.countColumns(hall?.seats);

  const generatedSeats = useCallback(() => {
    const seats = HallUtils.generateBoxes(parsedRows, parsedColumns);
    if (rows !== "" && columns !== "") {
      dispatch(setSeats(seats));
    } else {
      dispatch(setSeats(hall?.seats!));
    }
  }, [dispatch, parsedRows, parsedColumns, hall, rows, columns]);

  const handleSeat = (seat: ISeat) => {
    dispatch(setSelectedSeat({ seat }));
  };

  const handleRow = (row: string) => {
    dispatch(selectRow({ row }));
  };

  const handleColumn = (column: number) => {
    dispatch(selectColumn({ column }));
  };

  useEffect(() => {
    generatedSeats();
  }, [generatedSeats]);

  const rowArray = parsedRows ? parsedRows : hallRows;
  const columnArray = parsedColumns ? parsedColumns : hallColumns;

  return (
    <Dashboard>
      {rowArray ? (
        <Rows $length={rowArray}>
          {Array.from(Array(rowArray).keys()).map((i) => (
            <Row
              key={i}
              onClick={() => handleRow(HallUtils.replaceNumberOnLetter(i))}
            >
              {HallUtils.replaceNumberOnLetter(i)}
            </Row>
          ))}
        </Rows>
      ) : null}
      {columnArray ? (
        <Columns $length={columnArray}>
          {Array.from(Array(columnArray).keys()).map((i) => (
            <Row key={i} onClick={() => handleColumn(i + 1)}>
              {i + 1}
            </Row>
          ))}
        </Columns>
      ) : null}
      <HallDashboard $rows={hallRows!} $columns={hallColumns!}>
        {seats?.map((seat: ISeat, i) => (
          <Seat
            key={i}
            seat={seat}
            onClick={() => handleSeat(seat)}
            hall={hall}
          />
        ))}
      </HallDashboard>
      {/* <HallDashboard $rows={hallRows} $columns={hallColumns}>
        {hall?.seats?.map((seat: ISeat, i) => (
          <Seat
            key={i}
            seat={seat}
            onClick={() => handleSeat(seat)}
            hall={hall}
          />
        ))}
      </HallDashboard> */}
    </Dashboard>
  );
};

export default HallCreateDashboard;
