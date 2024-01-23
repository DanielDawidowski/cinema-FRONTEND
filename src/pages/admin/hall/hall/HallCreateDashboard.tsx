import React, { useCallback, useEffect } from "react";
import type {
  ReactElement,
  FC,
  Dispatch as ReactDispatch,
  SetStateAction,
} from "react";
import type { Dispatch as ReduxDispatch } from "@reduxjs/toolkit";
import { Columns, HallDashboard, Main, Row, Rows } from "../CreateHall.styles";
import Seat from "../seat/Seat";
import { HallUtils } from "../../../../utils/hall-utils";
import { ISeat } from "../../../../interfaces/hall/hall.interface";
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
  total: ISeat[];
  setTotal: ReactDispatch<SetStateAction<ISeat[]>>;
}

const HallCreateDashboard: FC<ICreateHall> = ({
  rows,
  columns,
}): ReactElement => {
  const { seats } = useAppSelector((state) => state.hall);
  const dispatch: ReduxDispatch = useAppDispatch();

  const parsedRows = parseFloat(rows);
  const parsedColumns = parseFloat(columns);

  const generatedSeats = useCallback(() => {
    const seats = HallUtils.generateBoxes(parsedRows, parsedColumns);
    dispatch(setSeats(seats));
  }, [dispatch, parsedRows, parsedColumns]);

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

  return (
    <Main>
      {parsedRows ? (
        <Rows $length={parsedRows}>
          {Array.from(Array(parsedRows > 0 ? parsedRows : null).keys()).map(
            (i) => (
              <Row
                key={i}
                onClick={() => handleRow(HallUtils.replaceNumberOnLetter(i))}
              >
                {HallUtils.replaceNumberOnLetter(i)}
              </Row>
            )
          )}
        </Rows>
      ) : null}
      {parsedColumns ? (
        <Columns $length={parsedColumns}>
          {Array.from(
            Array(parsedColumns > 0 ? parsedColumns : null).keys()
          ).map((i) => (
            <Row key={i} onClick={() => handleColumn(i + 1)}>
              {i + 1}
            </Row>
          ))}
        </Columns>
      ) : null}
      <HallDashboard $rows={parsedRows} $columns={parsedColumns}>
        {seats.map((seat: ISeat, i) => (
          <Seat key={i} seat={seat} onClick={() => handleSeat(seat)} />
        ))}
      </HallDashboard>
    </Main>
  );
};

export default HallCreateDashboard;
