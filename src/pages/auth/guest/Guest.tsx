import React, { useState, useEffect } from "react";
import type { FC, ReactElement, ChangeEvent } from "react";
import type { Dispatch as ReduxDispatch } from "@reduxjs/toolkit";

import Input from "../../../components/input/Input";
import { IGuest } from "../../../interfaces/auth/auth.interface";
import { useAppDispatch } from "../../../redux-toolkit/hooks";
import { addName } from "../../../redux-toolkit/reducers/ticket/ticket.reduer";

const initialState: IGuest = {
  name: "",
  email: "",
};

const Guest: FC = (): ReactElement => {
  const [values, setValues] = useState<IGuest>(initialState);
  const { name, email } = values;

  const dispatch: ReduxDispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    dispatch(addName({ name: values }));
  }, [dispatch, values]);

  return (
    <>
      <Input
        id="name"
        labelText="Name"
        name="name"
        type="name"
        value={name}
        placeholder="Enter name"
        handleChange={handleChange}
      />

      <Input
        id="email"
        labelText="email"
        name="email"
        type="email"
        value={email}
        placeholder="Enter Email"
        handleChange={handleChange}
      />
    </>
  );
};

export default Guest;
