import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  ITicket,
  ITicketTypes,
} from "../../../interfaces/ticket/Ticket.interface";
import { Utils } from "../../../utils/utils";

interface ITicketReducer {
  ticket: ITicket[];
}

const initialState: ITicketReducer = {
  ticket: [],
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
    editPrice: (
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
  },
});

export const { setTicket, editPrice } = ticketSlice.actions;
export default ticketSlice.reducer;
