import { SeatTypes } from "../../interfaces/hall/hall.interface";
import { ITicketTypes } from "../../interfaces/ticket/ticket.interface";

export interface RadioProps {
  options: ITicketTypes[];
  onChange: (seat: SeatTypes, label: ITicketTypes) => void;
  seat: SeatTypes;
}
