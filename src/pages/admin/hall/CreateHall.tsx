import React, { ReactElement, useState } from "react";
import type {
  FC,
  FormEvent,
  ChangeEvent,
  SetStateAction,
  Dispatch,
} from "react";
import axios from "axios";
import Layout from "../../../components/layout/Layout";
import { ValidationError } from "../../../interfaces/error/Error.interface";
import {
  IHall,
  ISeat,
  SeatStatus,
  SeatType,
} from "../../../interfaces/hall/hall.interface";
import { hallService } from "../../../services/api/hall/hall.service";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import { ButtonColor } from "../../../components/button/Button.interface";
import { Aside, CreateHallStyles } from "./CreateHall.styles";
import HallCreateDashboard from "./hall/HallCreateDashboard";

const initialState: IHall = {
  city: "",
  hallNumber: 0,
  seats: [
    {
      row: "",
      seat: 0,
      status: SeatStatus.free,
      type: SeatType.standard,
    },
  ],
};

const CreateHall: FC = (): ReactElement => {
  const [values, setValues] = useState<IHall>(initialState);
  const [rows, setRows] = useState<string>("6");
  const [columns, setColumns] = useState<string>("10");
  const [total, setTotal] = useState<ISeat[]>([] as ISeat[]);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const createHall = async (e: FormEvent): Promise<void | undefined> => {
    e.preventDefault();
    setLoading(true);
    try {
      await hallService.create(values);
      setLoading(false);
      setHasError(false);
      setValues(initialState);
    } catch (error) {
      if (
        axios.isAxiosError<ValidationError, Record<string, unknown>>(error) &&
        error.response
      ) {
        setLoading(false);
        setHasError(true);
        setErrorMessage(error?.response?.data.message as string);
      } else {
        console.error(error);
      }
    }
  };

  const formSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const inputValue = value;

    const stateUpdaters: Record<string, Dispatch<SetStateAction<string>>> = {
      rows: setRows,
      columns: setColumns,
    };

    const setState = stateUpdaters[name];
    if (setState) {
      setState(inputValue);
    }
  };

  return (
    <Layout>
      <CreateHallStyles>
        <Aside>
          <Input
            name="rows"
            type="number"
            value={rows}
            labelText="Number of Rows"
            placeholder="---"
            style={{ border: `${hasError ? "1px solid #fa9b8a" : ""}` }}
            handleChange={handleChange}
          />
          <Input
            id="columns"
            name="columns"
            type="number"
            value={columns}
            labelText="Number of Columns"
            placeholder="---"
            style={{ border: `${hasError ? "1px solid #fa9b8a" : ""}` }}
            handleChange={handleChange}
          />
          <Button color={ButtonColor.success} disabled={!rows || !columns}>
            <h4>{loading ? "Loading..." : "Create"}</h4>
          </Button>
        </Aside>
        <HallCreateDashboard
          rows={rows}
          columns={columns}
          total={total}
          setTotal={setTotal}
        />
      </CreateHallStyles>
    </Layout>
  );
};

export default CreateHall;
