import React, { useState } from "react";
import type { FC, ReactElement, FormEvent } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import type { NavigateFunction } from "react-router-dom";
import Layout from "../../../../components/layout/Layout";
import { ValidationError } from "../../../../interfaces/error/Error.interface";
import {
  Container,
  Grid,
} from "../../../../components/layout/globalStyles/global.styles";
import { IShow } from "../../../../interfaces/show/show.interface";
import { showService } from "../../../../services/api/show/show.service";
import { ShowStyles } from "../Show.styles";
import ShowForm from "../../../../components/form/show/Show.form";

const initialState: IShow = {
  hall: "",
  movie: "",
  time: "",
  date: "",
};

const CreateShow: FC = (): ReactElement => {
  const [values, setValues] = useState<IShow>(initialState);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const navigate: NavigateFunction = useNavigate();

  const createShow = async (e: FormEvent): Promise<void | undefined> => {
    e.preventDefault();
    setLoading(true);
    try {
      await showService.create(values);
      setLoading(false);
      setHasError(false);
      setValues(initialState);
      console.log("created show");
      navigate("/admin/shows");
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

  return (
    <Layout>
      <Container $small>
        <ShowStyles>
          <Grid>
            <ShowForm
              values={values}
              setValues={setValues}
              eventAction={createShow}
              loading={loading}
              hasError={hasError}
              errorMessage={errorMessage}
            />
          </Grid>
        </ShowStyles>
      </Container>
    </Layout>
  );
};

export default CreateShow;
