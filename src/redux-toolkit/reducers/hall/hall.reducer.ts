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
    changeSeatType: (
      state,
      action: PayloadAction<{ seat: ISeat; newType: SeatTypes }>
    ) => {
      const { seat, newType } = action.payload;

      // Implement the logic to change the type of the selected seat in the state
      const updatedSeats = state.seats.map((s) =>
        s.row === seat.row && s.seat === seat.seat ? { ...s, type: newType } : s
      );

      return {
        ...state,
        seats: updatedSeats,
      };
    },
  },
});

export const { changeSeatType } = hallSlice.actions;
export default hallSlice.reducer;
