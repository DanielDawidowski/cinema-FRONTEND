import React, { useState, useEffect } from "react";
import type { FC, ReactElement } from "react";
import type { Dispatch as ReduxDispatch } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "../../../redux-toolkit/hooks";
import {
  TicketContent,
  TicketHeader,
  TicketItem,
  TicketItemInner,
  TicketTitle,
  TicketsStyles,
  TotalPrice,
} from "./Tickets.styles";
import { SeatTypes } from "../../../interfaces/hall/hall.interface";
import SeatSVG from "../../../components/seat/seatSVG";
import { Utils } from "../../../utils/utils";
import {
  ITicket,
  ITicketTypes,
  ticketsArr,
} from "../../../interfaces/ticket/Ticket.interface";
import Radio from "../../../components/radio/Radio";
import {
  addPrice,
  setTicket,
} from "../../../redux-toolkit/reducers/ticket/ticket.reduer";
import { themeGlobal } from "../../../components/layout/globalStyles/variables";

const Tickets: FC = (): ReactElement => {
  const { selectedSeats } = useAppSelector((state) => state.hall);
  const { ticket } = useAppSelector((state) => state.ticket);
  const [selectedId, setSelectedId] = useState<string>("");

  const dispatch: ReduxDispatch = useAppDispatch();

  const handleOptionChange = (seat: SeatTypes, ticketType: ITicketTypes) => {
    const emitPrice = Utils.emitTicketPrice(seat, ticketType);
    dispatch(addPrice({ selectedId, price: emitPrice }));
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

  return (
    <TicketsStyles>
      {ticket.map((seat: ITicket) => (
        <TicketItem key={seat._id}>
          <TicketItemInner>
            <TicketHeader>
              <SeatSVG type={seat.type} />
              <TicketTitle>
                <h4>Row</h4>
                <h3>{seat.row}</h3>
                <h4>Seat</h4>
                <h3>{seat.seat}</h3>
              </TicketTitle>
            </TicketHeader>
            <TicketContent onClick={() => handleId(seat._id!)}>
              <Radio
                options={ticketsArr}
                onChange={handleOptionChange}
                seat={seat.type}
              />
              <span style={{ color: themeGlobal.orange }}>{seat.price} $</span>
            </TicketContent>
          </TicketItemInner>
        </TicketItem>
      ))}
      <TotalPrice>
        <h4>Total :</h4>
        <h3>{Utils.calculatePrice(ticket)} $</h3>
      </TotalPrice>
    </TicketsStyles>
  );
};

export default Tickets;
