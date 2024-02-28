export enum BookingStep {
  selection = "Selection",
  tickets = "Tickets",
  information = "Information",
  payment = "Payment",
}

export type BookingSteps =
  | BookingStep.selection
  | BookingStep.tickets
  | BookingStep.information
  | BookingStep.payment;

export interface IBookingStep {
  step: string;
}

export const bookingSteps: BookingSteps[] = [
  BookingStep.selection,
  BookingStep.tickets,
  BookingStep.information,
  BookingStep.payment,
];
