import React, { useState, ReactElement } from "react";
import type { FC } from "react";
import { Login, Register } from "..";
import Layout from "../../../components/layout/Layout";
import {
  AuthContainer,
  TabsStyles,
  TabsElement,
  AuthInner,
  Title,
} from "./Auth.styles";
import {
  Container,
  Line,
} from "../../../components/layout/globalStyles/global.styles";

const AuthTabs: FC = (): ReactElement => {
  const [type, setType] = useState<string>("Sign In");

  return (
    <Layout>
      <Container $small>
        <Title>
          <Line $gradient $width="35%" />
          <h1>MY VUE</h1>
        </Title>

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
        </TabsStyles>
        <AuthContainer>
          <AuthInner>
            {type === "Sign In" && <Login />}
            {type === "Sign Up" && <Register />}
          </AuthInner>
        </AuthContainer>
      </Container>
    </Layout>
  );
};

export default AuthTabs;
