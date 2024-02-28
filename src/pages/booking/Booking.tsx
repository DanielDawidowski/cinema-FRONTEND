import React, { useState, useCallback } from "react";
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
import useEffectOnce from "../../hooks/useEffectOnce";
import Footer from "./footer/Footer";

const Booking: FC = (): ReactElement => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [show, setShow] = useState<IShow>({} as IShow);

  const { showId } = useParams();

  const getShow = useCallback(async () => {
    try {
      const response = await showService.getShow(showId as string);
      setShow(response.data.show);
    } catch (error) {
      console.error(error);
    }
  }, [showId]);

  useEffectOnce(() => {
    getShow();
  });

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
        <StepContainer $currentStep={currentStep} $step={1}>
          <Container>
            <Selection hallId={show.hall} movieId={show.movie} />
          </Container>
        </StepContainer>
        <StepContainer $currentStep={currentStep} $step={2}>
          {/* Step 2: Contact Information */}
          {/* Add your form fields here */}
          <h2>Step 2: Tickets</h2>
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
        <Footer currentStep={currentStep} setCurrentStep={setCurrentStep} />
      </BookingStyles>
    </Layout>
  );
};

export default Booking;
