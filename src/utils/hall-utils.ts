import {
  ISeat,
  SeatStatus,
  SeatType,
  SeatTypes,
} from "../interfaces/hall/hall.interface";
// import {
//   ExlusiveSeat,
//   StandarSeat,
//   VipSeat,
// } from "../pages/admin/hall/seat/Seat.styles";

export class HallUtils {
  static seats: ISeat[] = [];

  static generateBoxes = (rows: number, columns: number): ISeat[] => {
    const seats: ISeat[] = [];

    for (let row = 1; row <= rows; row++) {
      for (let col = 1; col <= columns; col++) {
        const seat: ISeat = {
          row: String.fromCharCode(65 + row - 1),
          seat: col,
          status: SeatStatus.free,
          type: SeatType.standard,
        };
        seats.push(seat);
      }
    }
    HallUtils.seats = seats;

    return HallUtils.seats;
  };

  static replaceNumberOnLetter = (n: number): string => {
    const letter = String.fromCharCode(65 + n);
    return letter;
  };

  static emitSeatTypeColor = (name: SeatTypes): string => {
    switch (name) {
      case SeatType.standard:
        return "#FFFFFF";
      case SeatType.exclusive:
        return "#F39F5A";
      case SeatType.vip:
        return "#9d0dc9";
      case SeatType.handicapped:
        return "#4477CE";
      case SeatType.disabled:
        return "#404258";
      default:
        return SeatType.standard;
    }
  };
}
