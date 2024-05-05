import React, { useState, useEffect } from "react";
import type { FC, FormEvent, ChangeEvent, ReactElement } from "react";
import { Link, useNavigate } from "react-router-dom";
import type { NavigateFunction } from "react-router-dom";
import type { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { IoLockClosedSharp } from "react-icons/io5";
import { useAppDispatch } from "../../../redux-toolkit/hooks";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { authService } from "../../../services/api/auth/auth.service";
import { addUser } from "../../../redux-toolkit/reducers/user/user.reducer";
import {
  IRedirect,
  ISignUpData,
} from "../../../interfaces/auth/auth.interface";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import { ValidationError } from "../../../interfaces/error/Error.interface";
import { ButtonColor } from "../../../components/button/Button.interface";
import { Line } from "../../../components/layout/globalStyles/global.styles";
import { Forget } from "../auth-tabs/Auth.styles";

const Login: FC<IRedirect> = ({ information = false }): ReactElement => {
  const [email, setEmail] = useState<string>("dvds1987@gmail.com");
  const [password, setPassword] = useState<string>("qwerty");
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<ISignUpData | null>();
  const userStorage = useLocalStorage<ISignUpData>("user");

  const navigate: NavigateFunction = useNavigate();
  const dispatch: Dispatch = useAppDispatch();

  const loginUser = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    setLoading(true);
    e.preventDefault();
    try {
      const result = await authService.signIn({
        email,
        password,
      });
      // return result;
      setUser(result.data.user);
      userStorage.set(result.data.user);
      dispatch(
        addUser({
          token: result.data.token,
          profile: {
            ...result.data.user,
            username: result.data.user.username,
            _id: result.data.user._id,
            role: result.data.user.role,
          },
        })
      );
      setLoading(false);
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

  useEffect(() => {
    if (loading && !user) return;
    if (user && !information) {
      navigate("/");
    }
    if (user && information) {
      return undefined;
    }
  }, [loading, user, navigate, information]);

  return (
    <form onSubmit={loginUser}>
      <Input
        id="email"
        labelText="E-mail"
        name="email"
        type="email"
        value={email}
        placeholder="Enter e-mail"
        handleChange={(event: ChangeEvent<HTMLInputElement>) =>
          setEmail(event.target.value)
        }
      />
      <Input
        id="password"
        labelText="Password"
        name="password"
        type="password"
        value={password}
        placeholder="Enter password"
        handleChange={(event: ChangeEvent<HTMLInputElement>) =>
          setPassword(event.target.value)
        }
      />
      <Button
        color={!user ? ButtonColor.primary : ButtonColor.success}
        disabled={!email || !password}
      >
        <h4>{loading ? "Loading..." : "Sign Up"}</h4>
      </Button>
      <Link to="/forgot-password">
        <Forget>
          <IoLockClosedSharp /> <h3>Forgot password</h3>
        </Forget>
      </Link>
      <Line $width="100%" />
    </form>
  );
};

export default Login;
