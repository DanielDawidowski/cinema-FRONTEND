import React, { ReactElement, useState, useEffect } from "react";
import type {
  FC,
  FormEvent,
  ChangeEvent,
  SetStateAction,
  Dispatch as ReactDispatch,
} from "react";
import type { Dispatch as ReduxDispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import type { NavigateFunction } from "react-router-dom";
import Layout from "../../../../components/layout/Layout";
import { ValidationError } from "../../../../interfaces/error/Error.interface";
import {
  IHall,
  SeatStatus,
  SeatType,
} from "../../../../interfaces/hall/hall.interface";
import { hallService } from "../../../../services/api/hall/hall.service";
import Input from "../../../../components/input/Input";
import Button from "../../../../components/button/Button";
import { ButtonColor } from "../../../../components/button/Button.interface";
import { Aside, CreateHallStyles, Inner } from "../Hall.styles";
import HallCreateDashboard from "../hall/HallCreateDashboard";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../../redux-toolkit/hooks";
import Modal from "../../../../components/modal/Modal";
import {
  toggleHallModal,
  closeModal,
} from "../../../../redux-toolkit/reducers/modal/modal.reducer";
import HallForm from "../../../../components/form/hall/Hall.form";
import {
  DisplayMedia,
  Line,
} from "../../../../components/layout/globalStyles/global.styles";
import Legend from "../../../../components/legend/Legend";
import { HallUtils } from "../../../../utils/hall-utils";

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
  const [rows, setRows] = useState<string>("");
  const [columns, setColumns] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const { selectedSeats, seats } = useAppSelector((state) => state.hall);
  const { isHallModal } = useAppSelector((state) => state.modal);

  const dispatch: ReduxDispatch = useAppDispatch();
  const navigate: NavigateFunction = useNavigate();

  const createHall = async (e: FormEvent): Promise<void | undefined> => {
    e.preventDefault();
    setLoading(true);
    values.seats = seats;
    try {
      await hallService.create(values);
      setLoading(false);
      setHasError(false);
      setValues(initialState);
      console.log("created hall");
      dispatch(closeModal());
      navigate("/admin/halls");
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

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    const inputValue = value;

    const stateUpdaters: Record<
      string,
      ReactDispatch<SetStateAction<string>>
    > = {
      rows: setRows,
      columns: setColumns,
    };

    const setState = stateUpdaters[name];
    if (setState) {
      setState(inputValue);
    }
  };

  const openModal = (): void => {
    dispatch(toggleHallModal(true));
  };

  const close = (): void => {
    dispatch(closeModal());
  };

  useEffect(() => {
    HallUtils.changeOrientation();
  }, []);

  return (
    <Layout>
      <CreateHallStyles>
        <Aside>
          <DisplayMedia>
            <Line $gradient $width="100%" />
          </DisplayMedia>
          <Inner>
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
            <Button color={ButtonColor.success} onClick={openModal}>
              <h4>{loading ? "Loading..." : "Create"}</h4>
            </Button>
            <DisplayMedia $media>
              <Line $gradient $width="35%" />
            </DisplayMedia>
            {selectedSeats.length > 0 ? <Legend /> : null}
          </Inner>
        </Aside>
        <HallCreateDashboard rows={rows} columns={columns} />
        {isHallModal ? (
          <Modal isOpen={isHallModal} onClose={close}>
            <HallForm
              values={values}
              setValues={setValues}
              eventAction={createHall}
              loading={loading}
              hasError={hasError}
              errorMessage={errorMessage}
            />
          </Modal>
        ) : null}
      </CreateHallStyles>
    </Layout>
  );
};

export default CreateHall;
