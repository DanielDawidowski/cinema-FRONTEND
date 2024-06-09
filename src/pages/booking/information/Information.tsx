import React, { useState, useEffect } from "react";
import type { FC, ReactElement } from "react";
import type { Dispatch as ReduxDispatch } from "@reduxjs/toolkit";

import {
  InformationCard,
  InformationCardItem,
  InformationInner,
  InformationStyles,
} from "./Information.styles";
import {
  AuthContainer,
  AuthInner,
  TabsElement,
  TabsStyles,
} from "../../auth/auth-tabs/Auth.styles";
import { Login, Register } from "../../auth";
import Guest from "../../auth/guest/Guest";
import { useAppSelector, useAppDispatch } from "../../../redux-toolkit/hooks";
import { addName } from "../../../redux-toolkit/reducers/ticket/ticket.reduer";
import { IGuest } from "../../../interfaces/auth/auth.interface";

const Information: FC = (): ReactElement => {
  const { profile } = useAppSelector((state) => state.user);

  const [type, setType] = useState<string>("Sign In");

  const dispatch: ReduxDispatch = useAppDispatch();
  useEffect(() => {
    const values: IGuest = {
      name: profile?.username,
      email: profile?.email,
    };
    dispatch(addName({ name: values }));
  }, [dispatch, profile]);

  return (
    <InformationStyles>
      <InformationInner>
        {/* {!profile ? (
          <TabsStyles>
            <TabsElement
              $active={type === "Sign In"}
              onClick={() => setType("Sign In")}
            >
              <h4>Sign In</h4>
            </TabsElement>
            <TabsElement
              $active={type === "Sign Up"}
              onClick={() => setType("Sign Up")}
            >
              <h4>Sign Up</h4>
            </TabsElement>
            <TabsElement
              $active={type === "Guest"}
              onClick={() => setType("Guest")}
            >
              <h4>Guest</h4>
            </TabsElement>
          </TabsStyles>
        ) : null} */}
        <AuthContainer>
          <AuthInner>
            {/* {type === "Sign In" &&
              (!profile ? (
                <Login information />
              ) : (
                <InformationCard>
                  <h3>Ticket Information</h3>
                  <InformationCardItem>
                    <h4>Name: </h4>
                    <h4> {profile.username}</h4>
                  </InformationCardItem>
                  <InformationCardItem>
                    <h4>Email: </h4>
                    <h4> {profile.email}</h4>
                  </InformationCardItem>
                </InformationCard>
              ))}
            {type === "Sign Up" &&
              (!profile ? (
                <Register information />
              ) : (
                <InformationCard>
                  <h3>Ticket Information</h3>
                  <InformationCardItem>
                    <h4>Name: </h4>
                    <h4> {profile.username}</h4>
                  </InformationCardItem>
                  <InformationCardItem>
                    <h4>Email: </h4>
                    <h4> {profile.email}</h4>
                  </InformationCardItem>
                </InformationCard>
              ))}
            {type === "Guest" && <Guest />} */}
            <Guest />
          </AuthInner>
        </AuthContainer>
      </InformationInner>
    </InformationStyles>
  );
};

export default Information;
