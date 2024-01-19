import type { Dispatch, SetStateAction } from "react";

export interface IHall {
  _id?: string;
  city: string;
  hallNumber: number;
  seats: ISeat[];
}

export interface ISeat {
  row: string;
  seat: number;
  status: SeatStatuses;
  type: SeatTypes;
}

export enum SeatStatus {
  free = "FREE",
  busy = "BUSY",
  book = "BOOKED",
}

export type SeatStatuses = SeatStatus.free | SeatStatus.busy | SeatStatus.book;

export enum SeatType {
  standard = "STANDARD",
  vip = "VIP",
  handicapped = "HANDICAPPED",
  exclusive = "EXCLUSIVE",
  disabled = "DISABLED",
}

export type SeatTypes =
  | SeatType.standard
  | SeatType.vip
  | SeatType.handicapped
  | SeatType.exclusive
  | SeatType.disabled;

export interface ISeatProps {
  seat: ISeat;
  rows: number;
  columns: number;
  total: ISeat[];
  setTotal: Dispatch<SetStateAction<ISeat[]>>;
  setIsDrawerOpen: Dispatch<SetStateAction<boolean>>;
  selectedSeats: ISeat[];
  setSelectedSeats: Dispatch<SetStateAction<ISeat[]>>;
}
