import React from "react";
import type { FC, ReactElement } from "react";
import {
  PaymentStyles,
  PaymentInner,
  Title,
  PaymentList,
  PaymentItem,
  Transaction,
  Email,
} from "./Payment.styles";
import { TotalPrice } from "../tickets/Tickets.styles";
import { Utils } from "../../../utils/utils";
import { useAppSelector } from "../../../redux-toolkit/hooks";
import { ITicket } from "../../../interfaces/ticket/ticket.interface";
import { Flex } from "../../../components/layout/globalStyles/global.styles";

const Payment: FC = (): ReactElement => {
  const { seats, name } = useAppSelector((state) => state.ticket);

  return (
    <PaymentStyles>
      <PaymentInner>
        <Title>Control</Title>
        <PaymentList>
          {seats.map((seat: ITicket, i: number) => (
            <div key={i}>
              <PaymentItem>
                <Flex>
                  <h5>Row</h5>
                  <h5>{seat.row},</h5>
                  <h5>Seat</h5>
                  <h5>{seat.seat}</h5>({seat.type})
                </Flex>
                <Flex>
                  <h4>{seat.price} $</h4>
                </Flex>
              </PaymentItem>
            </div>
          ))}
        </PaymentList>
        <Transaction>
          <h5>Transactions costs</h5>
          <h5>0.50 $</h5>
        </Transaction>
        <TotalPrice>
          <h4>Total :</h4>
          <h3>{(Utils.calculatePrice(seats) + 0.5).toFixed(2)} $</h3>
        </TotalPrice>
        <Email>
          <h5>You will receive a confirmation at this e-mail address</h5>
          <h5>{name?.email}</h5>
        </Email>
      </PaymentInner>
    </PaymentStyles>
  );
};

export default Payment;
