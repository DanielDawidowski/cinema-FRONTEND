import type { MouseEventHandler } from "react";

export interface IHall {
  _id?: string;
  city: string;
  hallNumber: number;
  seats: ISeat[];
}

export interface ISeat {
  _id?: string;
  row: string;
  seat: number;
  status: SeatStatuses;
  type: SeatTypes;
}

export enum SeatStatus {
  free = "FREE",
  busy = "BUSY",
  booked = "BOOKED",
}

export type SeatStatuses =
  | SeatStatus.free
  | SeatStatus.busy
  | SeatStatus.booked;

export enum SeatType {
  standard = "STANDARD",
  vip = "VIP",
  handicapped = "HANDICAPPED",
  exclusive = "EXCLUSIVE",
  removed = "REMOVED",
}

export type SeatTypes =
  | SeatType.standard
  | SeatType.vip
  | SeatType.handicapped
  | SeatType.exclusive
  | SeatType.removed;

export interface ISeatProps {
  seat: ISeat;
  onClick: MouseEventHandler<SVGSVGElement>;
  selection?: boolean;
}
