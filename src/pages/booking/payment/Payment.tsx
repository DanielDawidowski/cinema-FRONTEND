import React, { useState } from "react";
import type { FC, ReactElement } from "react";
import {
  PaymentStyles,
  PaymentInner,
  Title,
  PaymentList,
  PaymentItem,
  Transaction,
} from "./Payment.styles";
import { TotalPrice } from "../tickets/Tickets.styles";
import { Utils } from "../../../utils/utils";
import { useAppSelector } from "../../../redux-toolkit/hooks";
import { ITicket } from "../../../interfaces/ticket/Ticket.interface";
import {
  Flex,
  Line,
} from "../../../components/layout/globalStyles/global.styles";
import { themeGlobal } from "../../../components/layout/globalStyles/variables";

const Payment: FC = (): ReactElement => {
  const { ticket } = useAppSelector((state) => state.ticket);

  return (
    <PaymentStyles>
      <PaymentInner>
        <Title>Control</Title>
        <PaymentList>
          {ticket.map((seat: ITicket) => (
            <>
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
            </>
          ))}
        </PaymentList>
        <Transaction>
          <h5 style={{ color: themeGlobal.white_1 }}>Transactions costs</h5>
          <h5 style={{ color: themeGlobal.white_1 }}>0.50 $</h5>
        </Transaction>
        <TotalPrice>
          <h4>Total :</h4>
          <h3>{(Utils.calculatePrice(ticket) + 0.5).toFixed(2)} $</h3>
        </TotalPrice>
      </PaymentInner>
    </PaymentStyles>
  );
};

export default Payment;
