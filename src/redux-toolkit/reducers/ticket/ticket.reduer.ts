import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITicket } from "../../../interfaces/ticket/Ticket.interface";
import { Utils } from "../../../utils/utils";
import { IGuest } from "../../../interfaces/auth/auth.interface";

interface ITicketReducer {
  ticket: ITicket[];
  user?: IGuest;
}

const initialState: ITicketReducer = {
  ticket: [],
  user: {
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
      const tickets = action.payload;

      return {
        ...state,
        ticket: tickets.map((ticket) => ({
          ...ticket,
          price: Utils.emitPrice(ticket.type),
        })),
      };
    },
    addPrice: (
      state,
      action: PayloadAction<{ selectedId: string; price: number }>
    ) => {
      const { selectedId, price } = action.payload;

      const updatedTicket = state.ticket.map((t) =>
        t._id === selectedId ? { ...t, price: price } : t
      );

      return {
        ...state,
        ticket: updatedTicket,
      };
    },
    addName: (state, action: PayloadAction<{ user: IGuest }>) => {
      const { user } = action.payload;

      const newUser = {
        name: user.name,
        lastName: user.lastName,
        email: user.email,
      };

      return {
        ...state,
        user: newUser,
      };
    },
  },
});

export const { setTicket, addPrice, addName } = ticketSlice.actions;
export default ticketSlice.reducer;
