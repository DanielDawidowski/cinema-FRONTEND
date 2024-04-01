import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  ITicket,
  ITicketWithUser,
} from "../../../interfaces/ticket/ticket.interface";
import { Utils } from "../../../utils/utils";
import { IGuest } from "../../../interfaces/auth/auth.interface";

const initialState: ITicketWithUser = {
  seats: [],
  name: {
    name: "",
    lastName: "",
    email: "",
  },
};

const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    setTicket: (state, action: PayloadAction<ITicket[]>) => {
      const seats = action.payload;

      return {
        ...state,
        seats: seats.map((seat) => ({
          ...seat,
          price: Utils.emitPrice(seat.type),
        })),
      };
    },
    addPrice: (
      state,
      action: PayloadAction<{ selectedId: string; price: number }>
    ) => {
      const { selectedId, price } = action.payload;

      const updatedTicket = state.seats.map((t) =>
        t._id === selectedId ? { ...t, price: price } : t
      );

      return {
        ...state,
        seats: updatedTicket,
      };
    },
    addName: (state, action: PayloadAction<{ name: IGuest }>) => {
      const { name } = action.payload;

      const newName = {
        name: name.name,
        lastName: name.lastName,
        email: name.email,
      };

      return {
        ...state,
        name: newName,
      };
    },
  },
});

export const { setTicket, addPrice, addName } = ticketSlice.actions;
export default ticketSlice.reducer;
