import { SeatTypes } from "../../interfaces/hall/hall.interface";
import { ITicketTypes } from "../../interfaces/ticket/Ticket.interface";

export interface RadioOption {
  label: string;
  value: string;
}

export interface RadioProps {
  options: ITicketTypes[];
  onChange: (seat: SeatTypes, label: ITicketTypes) => void;
  seat: SeatTypes;
}
