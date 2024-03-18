import { ISeat } from "../hall/hall.interface";

export interface ITicketSelect {
  name: ITicketTypes;
}

export enum ITicketType {
  standard = "Standard",
  student = "Student",
}

export type ITicketTypes = ITicketType.standard | ITicketType.student;

export const ticketsArr: ITicketType[] = [
  ITicketType.standard,
  ITicketType.student,
];

export interface ITicket extends ISeat {
  price: number;
}
