import React from "react";
import type { FC, ReactElement } from "react";
import {
  Container,
  Line,
} from "../../../components/layout/globalStyles/global.styles";
import {
  BookingStep,
  bookingSteps,
} from "../../../interfaces/booking/booking.interface";
import { StepHeader, StepMenu, StepMenuItem } from "../Booking.styles";

interface IHeader {
  currentStep: number;
}

const StepNav: FC<IHeader> = ({ currentStep }): ReactElement => {
  return (
    <StepHeader>
      <Container>
        <StepMenu>
          {bookingSteps.map((step: BookingStep, i: number) => (
            <StepMenuItem
              key={i}
              $currentStep={currentStep === i + 1}
              $step={currentStep === i + 1 || i < currentStep}
            >
              <h4>
                {`${i + 1}.`} <span>{`${step}`}</span>
              </h4>
              {currentStep === i + 1 ? <Line $gradient $width="100%" /> : null}
            </StepMenuItem>
          ))}
        </StepMenu>
      </Container>
    </StepHeader>
  );
};
export default StepNav;
