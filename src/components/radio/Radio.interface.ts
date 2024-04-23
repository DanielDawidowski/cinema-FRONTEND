import { SeatTypes } from "../../interfaces/hall/hall.interface";
import { ITicketTypes } from "../../interfaces/ticket/ticket.interface";

export type OptionType = ITicketTypes | string;

type OnChangeSeat<T extends OptionType> = (seat: SeatTypes, option: T) => void;

export interface GenericRadioProps<T extends OptionType> {
  options: T[];
  onChange: OnChangeSeat<T>;
  seat?: SeatTypes;
}
