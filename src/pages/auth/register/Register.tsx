import React, { useState, useEffect } from "react";
import type { FC, ChangeEvent, FormEvent, ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import type { NavigateFunction } from "react-router-dom";
import type { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { useAppDispatch } from "../../../redux-toolkit/hooks";
import { authService } from "../../../services/api/auth/auth.service";
import { addUser } from "../../../redux-toolkit/reducers/user/user.reducer";
import { IRegisterData } from "../../../interfaces/auth/auth.interface";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import { ButtonColor } from "../../../components/button/Button.interface";
import { ValidationError } from "../../../interfaces/error/Error.interface";

const Register: FC = (): ReactElement => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<IRegisterData | null>();

  const navigate: NavigateFunction = useNavigate();
  const dispatch: Dispatch = useAppDispatch();

  const registerUser = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    setLoading(true);
    e.preventDefault();
    try {
      const result = await authService.signUp({
        username,
        email,
        password,
        role: "admin",
      });
      dispatch(
        addUser({ token: result.data.token, profile: result.data.user })
      );
      setUser(result.data.user);
      // return result;
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
    if (user) navigate("/");
  }, [loading, user, navigate]);

  return (
    <form onSubmit={registerUser}>
      <Input
        id="username"
        labelText="Name"
        name="username"
        type="text"
        value={username}
        placeholder="Enter Name"
        handleChange={(event: ChangeEvent<HTMLInputElement>) =>
          setUsername(event.target.value)
        }
      />
      <Input
        id="email"
        labelText="E-mail"
        name="email"
        type="text"
        value={email}
        placeholder="Enter Email"
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
        placeholder="Enter Password"
        handleChange={(event: ChangeEvent<HTMLInputElement>) =>
          setPassword(event.target.value)
        }
      />
      <Button
        color={!user ? ButtonColor.primary : ButtonColor.success}
        disabled={!username || !email || !password}
      >
        <h4>{loading ? "Loading..." : "Sign Up"}</h4>
      </Button>
    </form>
  );
};

export default Register;
