import React, { useState } from "react";
import type { FC, FormEvent, ChangeEvent, ReactElement } from "react";
import { FaArrowLeft } from "react-icons/fa";
import axios from "axios";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import type { NavigateFunction } from "react-router-dom";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import { ButtonColor } from "../../../components/button/Button.interface";
import { ValidationError } from "../../../interfaces/error/Error.interface";
import { authService } from "../../../services/api/auth/auth.service";
import {
  Container,
  Line,
} from "../../../components/layout/globalStyles/global.styles";
import Layout from "../../../components/layout/Layout";
import {
  AuthInner,
  Forget,
  SuccessMessage,
  Title,
} from "../auth-tabs/Auth.styles";

const ResetPassword: FC = (): ReactElement => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [searchParams] = useSearchParams();

  const navigate: NavigateFunction = useNavigate();

  const resetPassword = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    setLoading(true);
    e.preventDefault();
    try {
      const body = { password, confirmPassword };
      await authService.resetPassword(
        searchParams.get("token") as string,
        body
      );
      setLoading(false);
      setPassword("");
      setConfirmPassword("");
      navigate("/login");
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
          {success ? <SuccessMessage>Password changed</SuccessMessage> : null}
          <form onSubmit={resetPassword}>
            <Input
              id="password"
              name="password"
              type="password"
              value={password}
              labelText="New Password"
              placeholder="New Password"
              style={{ border: `1px solid ${success && "#90BE6D"}` }}
              handleChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
            <Input
              id="cpassword"
              name="cpassword"
              type="password"
              value={confirmPassword}
              labelText="Confirm Password"
              placeholder="Confirm Password"
              style={{ border: `1px solid ${success && "#90BE6D"}` }}
              handleChange={(e: ChangeEvent<HTMLInputElement>) =>
                setConfirmPassword(e.target.value)
              }
            />
            <Button
              color={!success ? ButtonColor.primary : ButtonColor.success}
              disabled={!password || !confirmPassword}
            >
              <h4>
                {loading ? "RESET PASSWORD IN PROGRESS..." : "RESET PASSWORD"}
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

export default ResetPassword;
