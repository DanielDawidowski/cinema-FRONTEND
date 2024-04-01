import { IShow } from "../../../interfaces/show/show.interface";

export interface IFooter {
  show: IShow;
  currentStep: number;
  setCurrentStep: (currentStep: number) => void;
}
