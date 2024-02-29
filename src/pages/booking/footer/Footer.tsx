import React from "react";
import type { FC, ReactElement } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";
import type { Dispatch as ReduxDispatch } from "@reduxjs/toolkit";
import {
  FooterStyles,
  FooterInner,
  Seats,
  SelectedSeatItem,
  SelectedSeats,
  SelectedSeatsInfo,
  LeftButton,
  RightButton,
} from "./Footer.styles";
import { Container } from "../../../components/layout/globalStyles/global.styles";
import { ISeat } from "../../../interfaces/hall/hall.interface";
import SeatSVG from "../../../components/seat/seatSVG";
import Button from "../../../components/button/Button";
import { ButtonColor } from "../../../components/button/Button.interface";
import { setSelectedSeat } from "../../../redux-toolkit/reducers/hall/hall.reducer";
import { useAppDispatch, useAppSelector } from "../../../redux-toolkit/hooks";
import { IFooter } from "./Footer.interface";

const Footer: FC<IFooter> = (props): ReactElement => {
  const { currentStep, setCurrentStep } = props;

  const dispatch: ReduxDispatch = useAppDispatch();

  const { selectedSeats } = useAppSelector((state) => state.hall);

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSeat = (seat: ISeat) => {
    dispatch(setSelectedSeat({ seat }));
  };

  return (
    <FooterStyles>
      <Container>
        <FooterInner>
          <LeftButton onClick={prevStep}>
            <IoMdArrowRoundBack />
          </LeftButton>
          <SelectedSeats>
            {selectedSeats.length === 10 ? (
              <SelectedSeatsInfo>
                <h6>max 10 seats</h6>
              </SelectedSeatsInfo>
            ) : (
              <SelectedSeatsInfo></SelectedSeatsInfo>
            )}
            <Seats $limit={selectedSeats.length === 10}>
              {selectedSeats.map((seat: ISeat, i: number) => (
                <SelectedSeatItem key={i} onClick={() => handleSeat(seat)}>
                  <SeatSVG type={seat.type} />
                </SelectedSeatItem>
              ))}
            </Seats>
          </SelectedSeats>
          <RightButton onClick={nextStep}>
            <Button color={ButtonColor.secondary}>
              <h4>Next Step</h4>
              <IoMdArrowRoundForward />
            </Button>
          </RightButton>
        </FooterInner>
      </Container>
    </FooterStyles>
  );
};

export default Footer;
