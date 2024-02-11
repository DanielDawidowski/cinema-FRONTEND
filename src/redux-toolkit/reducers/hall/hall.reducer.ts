import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ISeat, SeatTypes } from "../../../interfaces/hall/hall.interface";

interface IHallReducer {
  seats: ISeat[];
  selectedSeats: ISeat[];
}

const initialState: IHallReducer = {
  seats: [],
  selectedSeats: [],
};

const hallSlice = createSlice({
  name: "hall",
  initialState,
  reducers: {
    setSelectedSeat: (state, action: PayloadAction<{ seat: ISeat }>) => {
      const { seat } = action.payload;
      const isSelected = state.selectedSeats.some(
        (selectedSeat) =>
          selectedSeat.row === seat.row && selectedSeat.seat === seat.seat
      );

      if (isSelected) {
        // Unselect the seat
        const updatedSelectedSeats = state.selectedSeats.filter(
          (selectedSeat) =>
            selectedSeat.row !== seat.row || selectedSeat.seat !== seat.seat
        );

        return {
          ...state,
          selectedSeats: updatedSelectedSeats,
        };
      } else {
        // Select the seat
        return {
          ...state,
          selectedSeats: [...state.selectedSeats, seat],
        };
      }
    },
    selectRow: (state, action: PayloadAction<{ row: string }>) => {
      const { row } = action.payload;

      const isSelected = state.selectedSeats.some(
        (selectedSeat) => selectedSeat.row === row
      );

      const updatedSelectedSeats = isSelected
        ? state.selectedSeats.filter((selectedSeat) => selectedSeat.row !== row)
        : [
            ...state.selectedSeats,
            ...state.seats.filter((seat) => seat.row === row),
          ];

      return {
        ...state,
        selectedSeats: updatedSelectedSeats,
      };
    },
    selectColumn: (state, action: PayloadAction<{ column: number }>) => {
      const { column } = action.payload;

      const isSelected = state.selectedSeats.some(
        (selectedSeat) => selectedSeat.seat === column
      );

      const updatedSelectedSeats = isSelected
        ? state.selectedSeats.filter(
            (selectedSeat) => selectedSeat.seat !== column
          )
        : [
            ...state.selectedSeats,
            ...state.seats.filter((seat) => seat.seat === column),
          ];

      return {
        ...state,
        selectedSeats: updatedSelectedSeats,
      };
    },
    changeSeatType: (state, action: PayloadAction<{ newType: SeatTypes }>) => {
      const { newType } = action.payload;

      const updatedSeats = state.seats.map((s) =>
        state.selectedSeats.some(
          (selectedSeat) =>
            selectedSeat.row === s.row && selectedSeat.seat === s.seat
        )
          ? { ...s, type: newType }
          : s
      );

      return {
        ...state,
        seats: updatedSeats,
        selectedSeats: [],
      };
    },
    setSeats: (state, action: PayloadAction<ISeat[]>) => {
      const generatedSeats = action.payload;
      return {
        ...state,
        seats: generatedSeats,
      };
    },
  },
});

export const {
  setSelectedSeat,
  changeSeatType,
  setSeats,
  selectRow,
  selectColumn,
} = hallSlice.actions;
export default hallSlice.reducer;
