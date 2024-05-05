import React, { useState, useCallback, useEffect } from "react";
import type { FC, ReactElement } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../components/layout/globalStyles/global.styles";
import {
  Header,
  HeaderInner,
  BookingStyles,
  StepContainer,
  StepContent,
} from "./Booking.styles";
import Layout from "../../components/layout/Layout";
import Logo from "../../components/logo/Logo";
import Selection from "./selection/Selection";
import { showService } from "../../services/api/show/show.service";
import { IShow } from "../../interfaces/show/show.interface";
import Footer from "./footer/Footer";
import Tickets from "./tickets/Tickets";
import Movie from "./movie/Movie";
import { IHall } from "../../interfaces/hall/hall.interface";
import { hallService } from "../../services/api/hall/hall.service";
import Information from "./information/Information";
import Payment from "./payment/Payment";
import StepNav from "./header/Header";

const Booking: FC = (): ReactElement => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [show, setShow] = useState<IShow>({} as IShow);
  const [hall, setHall] = useState<IHall>({} as IHall);

  const { showId } = useParams();

  const getHall = useCallback(async () => {
    try {
      const response = await hallService.getHall(show.hall);
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
        <StepNav currentStep={currentStep} />
        <Container>
          <StepContent>
            <StepContainer $currentStep={currentStep} $step={1}>
              <Selection hall={hall} />
            </StepContainer>
            <StepContainer $currentStep={currentStep} $step={2}>
              <Tickets />
            </StepContainer>
            <StepContainer $currentStep={currentStep} $step={3}>
              <Information />
            </StepContainer>
            <StepContainer $currentStep={currentStep} $step={4}>
              <Payment />
            </StepContainer>
            <Movie movieId={show.movie} hall={hall} time={show.time} />
          </StepContent>
        </Container>
        <Footer
          show={show}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      </BookingStyles>
    </Layout>
  );
};

export default Booking;
