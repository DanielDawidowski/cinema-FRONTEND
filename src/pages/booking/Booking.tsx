import React, { useState, useCallback, useEffect } from "react";
import type { FC, ReactElement } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Line,
} from "../../components/layout/globalStyles/global.styles";
import {
  Header,
  HeaderInner,
  BookingStyles,
  StepHeader,
  StepMenu,
  StepMenuItem,
  StepContainer,
  StepContent,
} from "./Booking.styles";
import Layout from "../../components/layout/Layout";
import Logo from "../../components/logo/Logo";
import {
  BookingStep,
  bookingSteps,
} from "../../interfaces/booking/booking.interface";
import Selection from "./Selection/Selection";
import { showService } from "../../services/api/show/show.service";
import { IShow } from "../../interfaces/show/show.interface";
import Footer from "./footer/Footer";
import Tickets from "./tickets/Tickets";
import Movie from "./movie/Movie";
import { IHall } from "../../interfaces/hall/hall.interface";
import { hallService } from "../../services/api/hall/hall.service";

const Booking: FC = (): ReactElement => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [show, setShow] = useState<IShow>({} as IShow);
  const [hall, setHall] = useState<IHall>({} as IHall);

  const { showId } = useParams();

  const getHall = useCallback(async () => {
    try {
      const response = await hallService.getHall(show.hall as string);
      setHall(response.data.hall);
    } catch (error) {
      console.error(error);
    }
  }, [show.hall]);

  const getShow = useCallback(async () => {
    try {
      const response = await showService.getShow(showId as string);
      setShow(response.data.show);
    } catch (error) {
      console.error(error);
    }
  }, [showId]);

  useEffect(() => {
    getShow();
    getHall();
  }, [getShow, getHall]);

  return (
    <Layout header={false}>
      <BookingStyles>
        <Header>
          <Container>
            <HeaderInner>
              <h2>My Booking</h2>
              <Logo link width="125px" height="55px" />
            </HeaderInner>
          </Container>
        </Header>
        <StepHeader>
          <Container>
            <StepMenu>
              {bookingSteps.map((step: BookingStep, i: number) => (
                <StepMenuItem $step={currentStep === i + 1}>
                  <h4 key={i}>{`${i + 1}. ${step}`}</h4>
                  {currentStep === i + 1 ? (
                    <Line $gradient $width="100%" />
                  ) : null}
                </StepMenuItem>
              ))}
            </StepMenu>
          </Container>
        </StepHeader>
        <Container>
          <StepContent>
            <StepContainer $currentStep={currentStep} $step={1}>
              <Selection hall={hall} />
            </StepContainer>
            <StepContainer $currentStep={currentStep} $step={2}>
              <Tickets />
            </StepContainer>

            <StepContainer $currentStep={currentStep} $step={3}>
              {/* Step 3: Address Information */}
              {/* Add your form fields here */}
              <h2>Step 3: Information</h2>
            </StepContainer>

            <StepContainer $currentStep={currentStep} $step={4}>
              {/* Step 4: Confirmation */}
              <h2>Step 4: Payment</h2>
              <p>Confirm your information</p>
            </StepContainer>
            <Movie movieId={show.movie} hall={hall} time={show.time} />
          </StepContent>
        </Container>
        <Footer currentStep={currentStep} setCurrentStep={setCurrentStep} />
      </BookingStyles>
    </Layout>
  );
};

export default Booking;
