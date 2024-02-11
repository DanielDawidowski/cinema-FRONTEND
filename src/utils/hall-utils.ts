import { themeGlobal } from "../components/layout/globalStyles/variables";
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
        return themeGlobal.white;
      case SeatType.exclusive:
        return themeGlobal.green_dark;
      case SeatType.vip:
        return themeGlobal.purple;
      case SeatType.handicapped:
        return themeGlobal.blue;
      case SeatType.removed:
        return themeGlobal.grey;
      default:
        return SeatType.standard;
    }
  };

  static changeOrientation = (): (() => void) => {
    const handleOrientationChange = () => {
      if (window.matchMedia("(orientation: portrait)").matches) {
        document.body.style.transform = "rotate(90deg)";
        document.body.style.width = "100%";
        document.body.style.height = "100%";
      } else {
        document.body.style.transform = "rotate(0deg)";
      }
    };

    // Add event listener for media query change
    const mediaQueryList = window.matchMedia("(orientation: portrait)");
    mediaQueryList.addEventListener("change", handleOrientationChange);

    return () => {
      mediaQueryList.removeEventListener("change", handleOrientationChange);
    };
  };

  static countRows = (seatData?: ISeat[]): number => {
    const uniqueRows = new Set(seatData?.map((seat) => seat.row));

    return uniqueRows?.size;
  };

  static countColumns = (seatData?: ISeat[]): number => {
    const uniqueRows = new Set(seatData?.map((seat) => seat.seat));

    return uniqueRows?.size;
  };

  static omitId = (seatData?: ISeat[]): Omit<ISeat, "_id">[] => {
    const seats: Omit<ISeat, "_id">[] | undefined = seatData?.map(
      ({ _id, ...newObject }) => newObject
    );
    return seats as Omit<ISeat, "_id">[];
  };
}
