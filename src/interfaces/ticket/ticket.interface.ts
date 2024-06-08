import { IGuest } from "../auth/auth.interface";
import { ISeat } from "../hall/hall.interface";
import { IShow } from "../show/show.interface";

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

export interface ITicketWithUser {
  seats: ITicket[];
  name?: IGuest;
}

export type ITicketShow = Pick<
  IShow,
  "_id" | "city" | "hall" | "movie" | "time"
>;

export interface ITicketData extends ITicketWithUser {
  show: ITicketShow;
  price: number;
}

export type ICheckout = Omit<ITicketWithUser, "name">;
