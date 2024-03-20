import React, { useState } from "react";
import type { FC, ReactElement } from "react";
import { InformationInner, InformationStyles } from "./Information.styles";
import {
  AuthContainer,
  AuthInner,
  TabsElement,
  TabsStyles,
} from "../../auth/auth-tabs/Auth.styles";
import { Login, Register } from "../../auth";
import Guest from "../../auth/guest/Guest";

const Information: FC = (): ReactElement => {
  const [type, setType] = useState<string>("Sign In");

  return (
    <InformationStyles>
      <InformationInner>
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
        <AuthContainer>
          <AuthInner>
            {type === "Sign In" && <Login />}
            {type === "Sign Up" && <Register />}
            {type === "Guest" && <Guest />}
          </AuthInner>
        </AuthContainer>
      </InformationInner>
    </InformationStyles>
  );
};

export default Information;
