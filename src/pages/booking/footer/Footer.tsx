import React, { useEffect, useState } from "react";
import type { FC, ReactElement } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";
import type { Dispatch as ReduxDispatch } from "@reduxjs/toolkit";
import axios from "axios";
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
import { ticketService } from "../../../services/api/ticket/ticket.service";
import { ValidationError } from "../../../interfaces/error/Error.interface";
import { ITicketData } from "../../../interfaces/ticket/ticket.interface";
import { Utils } from "../../../utils/utils";
import Spinner from "../../../components/spinner/Spinner";

const Footer: FC<IFooter> = (props): ReactElement => {
  const { show, currentStep, setCurrentStep } = props;
  const [loading, setLoading] = useState<boolean>(false);
  const [url, setUrl] = useState<string>("");

  const { seats, name } = useAppSelector((state) => state.ticket);
  const { selectedSeats } = useAppSelector((state) => state.hall);

  const dispatch: ReduxDispatch = useAppDispatch();

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

  const createTicket = async (): Promise<void | undefined> => {
    setLoading(true);

    const ticketData: ITicketData = {
      show: {
        _id: show._id,
        city: show.city,
        hall: show.hall,
        movie: {
          _id: show.movie._id,
          name: show.movie.name,
          img: show.movie.img,
          category: show.movie.category,
          description: show.movie.description,
        },
        time: show.time,
      },
      price: parseFloat((Utils.calculatePrice(seats) + 0.5).toFixed(2)),
      seats: Utils.omitId(seats),
      name: name!,
    };

    try {
      await ticketService.create(ticketData);
      const response = await ticketService.checkout({ seats: seats });
      setUrl(response.data.url);
      setLoading(false);
      console.log("created ticket");
    } catch (error) {
      if (
        axios.isAxiosError<ValidationError, Record<string, unknown>>(error) &&
        error.response
      ) {
        setLoading(false);
        // setErrorMessage(error?.response?.data.message as string);
      } else {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    if (url) {
      window.location.assign(url);
    }
  }, [url]);

  return (
    <FooterStyles>
      <Container>
        <FooterInner>
          {currentStep !== 1 ? (
            <LeftButton onClick={prevStep}>
              <IoMdArrowRoundBack />
            </LeftButton>
          ) : null}
          {currentStep === 1 ? (
            <SelectedSeats>
              <Seats $limit={selectedSeats.length === 10}>
                {selectedSeats.map((seat: ISeat, i: number) => (
                  <SelectedSeatItem key={i} onClick={() => handleSeat(seat)}>
                    <SeatSVG type={seat.type} />
                  </SelectedSeatItem>
                ))}
              </Seats>
              {selectedSeats.length === 10 ? (
                <SelectedSeatsInfo>
                  <h6>max 10 seats</h6>
                </SelectedSeatsInfo>
              ) : (
                <SelectedSeatsInfo></SelectedSeatsInfo>
              )}
            </SelectedSeats>
          ) : null}
          {currentStep === 4 ? (
            <RightButton>
              <Button color={ButtonColor.secondary} onClick={createTicket}>
                {loading ? <h5>Busy...</h5> : <h5>Pay</h5>}
                {loading ? <Spinner size={30} /> : null}
              </Button>
            </RightButton>
          ) : (
            <RightButton onClick={nextStep}>
              <Button
                color={ButtonColor.secondary}
                disabled={
                  selectedSeats.length === 0 &&
                  (currentStep === 3 && !name ? false : true)
                }
              >
                <h4>Next Step</h4>
                <IoMdArrowRoundForward />
              </Button>
            </RightButton>
          )}
        </FooterInner>
      </Container>
    </FooterStyles>
  );
};

export default Footer;
