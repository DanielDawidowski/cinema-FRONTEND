import React, { useState } from "react";
import type { FC, FormEvent, ChangeEvent, ReactElement } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import Input from "../../../components/input/Input";
import { authService } from "../../../services/api/auth/auth.service";
import { ValidationError } from "../../../interfaces/error/Error.interface";
import { ButtonColor } from "../../../components/button/Button.interface";
import {
  Container,
  Line,
} from "../../../components/layout/globalStyles/global.styles";
import Button from "../../../components/button/Button";
import Layout from "../../../components/layout/Layout";
import {
  AuthInner,
  Forget,
  SuccessMessage,
  Title,
} from "../auth-tabs/Auth.styles";

const ForgotPassword: FC = (): ReactElement => {
  const [email, setEmail] = useState<string>("dvds1987@gmail.com");
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const forgotPassword = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    setLoading(true);
    e.preventDefault();
    try {
      await authService.forgotPassword(email);
      setLoading(false);
      setEmail("");
      setSuccess(true);
    } catch (error) {
      if (
        axios.isAxiosError<ValidationError, Record<string, unknown>>(error) &&
        error.response
      ) {
        setLoading(false);
      } else {
        console.error(error);
      }
    }
  };

  return (
    <Layout>
      <Container $small>
        <Title>
          <Line $gradient $width="35%" />
          <h1>MY VUE</h1>
        </Title>
        <AuthInner>
          {success ? <SuccessMessage>Email sent</SuccessMessage> : null}
          <form onSubmit={forgotPassword}>
            <Input
              id="email"
              name="email"
              type="text"
              value={email}
              labelText={!success ? "Email" : null}
              placeholder="Enter Email"
              style={{ border: `1px solid ${success && "#90BE6D"}` }}
              handleChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
            <Button
              color={!success ? ButtonColor.primary : ButtonColor.success}
              disabled={!email}
            >
              <h4>
                {loading ? "FORGOT PASSWORD IN PROGRESS..." : "FORGOT PASSWORD"}
              </h4>
            </Button>
            <Link to={"/login"}>
              <Forget>
                <FaArrowLeft />
                <h3> Back to Login</h3>
              </Forget>
            </Link>
            <Line $width="100%" />
          </form>
        </AuthInner>
      </Container>
    </Layout>
  );
};

export default ForgotPassword;
