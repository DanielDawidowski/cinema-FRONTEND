import React, { useState, useEffect } from "react";
import type { FC, ReactElement } from "react";
import type { Dispatch as ReduxDispatch } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "../../../redux-toolkit/hooks";
import { TicketItem, TicketsStyles } from "./Tickets.styles";
import { ISeat, SeatTypes } from "../../../interfaces/hall/hall.interface";
import SeatSVG from "../../../components/seat/seatSVG";
import { Utils } from "../../../utils/utils";
import {
  ITicket,
  ITicketType,
  ITicketTypes,
  ticketsArr,
} from "../../../interfaces/ticket/Ticket.interface";
import Radio from "../../../components/radio/Radio";
import {
  editPrice,
  setTicket,
} from "../../../redux-toolkit/reducers/ticket/ticket.reduer";

const Tickets: FC = (): ReactElement => {
  const { selectedSeats } = useAppSelector((state) => state.hall);
  const { ticket } = useAppSelector((state) => state.ticket);
  const [totalPrice, setTotalPrice] = useState<number>();
  const [selectedId, setSelectedId] = useState<string>("");

  const dispatch: ReduxDispatch = useAppDispatch();

  const handleOptionChange = (seat: SeatTypes, ticketType: ITicketTypes) => {
    const emitPrice = Utils.emitTicketPrice(seat, ticketType);
    dispatch(editPrice({ selectedId, price: emitPrice }));
  };

  const handleId = (id: string) => {
    setSelectedId(id);
  };

  useEffect(() => {
    dispatch(
      setTicket(
        selectedSeats.map((ticket) => ({
          ...ticket,
          price: 0,
        }))
      )
    );
  }, [selectedSeats, dispatch]);

  console.log("ticket", ticket);
  console.log("selectedSeats", selectedSeats);
  return (
    <TicketsStyles>
      {selectedSeats.map((seat: ISeat, i: number) => (
        <TicketItem key={seat._id}>
          <h6>{`Row ${seat.row} Seat ${seat.seat}`}</h6>
          <SeatSVG type={seat.type} />
          <div onClick={() => handleId(seat._id!)}>
            <Radio
              options={ticketsArr}
              onChange={handleOptionChange}
              seat={seat.type}
            />
          </div>
        </TicketItem>
      ))}
    </TicketsStyles>
  );
};

export default Tickets;
