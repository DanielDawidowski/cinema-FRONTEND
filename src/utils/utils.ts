import { BreakPoint } from "../components/layout/Layout.interface";
import { SeatType, SeatTypes } from "../interfaces/hall/hall.interface";
import {
  ITicket,
  ITicketType,
  ITicketTypes,
} from "../interfaces/ticket/ticket.interface";

export class Utils {
  static generateString(length: number): string {
    const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  static emitNumber = (windowSize: number): number => {
    switch (true) {
      case BreakPoint.small > windowSize:
        return 2;
      case BreakPoint.medium > windowSize:
        return 3;
      case BreakPoint.large > windowSize:
        return 4;
      default:
        return 4;
    }
  };

  static scrollToElement = (id: string, time: number): void => {
    const element = document.getElementById(id);
    if (element) {
      const targetPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition - 80;
      const startTime = performance.now();
      const duration = time; // 5 seconds in milliseconds

      const scrollAnimation = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        window.scrollTo(0, startPosition + distance * progress);

        if (progress < 1) {
          requestAnimationFrame(scrollAnimation);
        }
      };

      requestAnimationFrame(scrollAnimation);
    }
  };

  static emitPrice = (name: SeatTypes): number => {
    switch (name) {
      case SeatType.standard:
        return 10;
      case SeatType.exclusive:
        return 14;
      case SeatType.vip:
        return 18;
      case SeatType.handicapped:
        return 10;
      default:
        return 10;
    }
  };

  static calculateTicketPrice = (type: SeatTypes, price: number): number => {
    const ticketPrice: number = Utils.emitPrice(type);
    const discountPrice: number = ticketPrice + price;
    return discountPrice;
  };

  static emitTicketDiscount = (type: ITicketTypes): number => {
    switch (type) {
      case ITicketType.standard:
        return 0;
      case ITicketType.student:
        return 4;
      default:
        return 0;
    }
  };

  static emitTicketPrice = (seat: SeatTypes, type: ITicketTypes): number => {
    const total = Utils.emitPrice(seat) - Utils.emitTicketDiscount(type);
    return total;
  };

  static calculatePrice = (ticket: ITicket[]): number => {
    const totalPrice: number = ticket.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price;
    }, 0);

    return totalPrice;
  };

  static omitId = (seatData?: ITicket[]): Omit<ITicket, "_id">[] => {
    const seats: Omit<ITicket, "_id">[] | undefined = seatData?.map(
      ({ _id, ...newObject }) => newObject
    );
    return seats as Omit<ITicket, "_id">[];
  };
}

// export enum BreakPoint {
//   xsmall = 480,
//   small = 680,
//   medium = 960,
//   large = 1440,
//   xlarge = 1920,
// }
