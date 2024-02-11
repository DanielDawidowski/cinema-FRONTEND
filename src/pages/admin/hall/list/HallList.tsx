import React, { useState, useEffect, useCallback } from "react";
import type { FC, ReactElement } from "react";
import axios from "axios";
import { hallService } from "../../../../services/api/hall/hall.service";
import Layout from "../../../../components/layout/Layout";
import { ValidationError } from "../../../../interfaces/error/Error.interface";
import {
  Container,
  ErrorMessage,
  ListStyles,
} from "../../../../components/layout/globalStyles/global.styles";
import Spinner from "../../../../components/spinner/Spinner";
import { IHall } from "../../../../interfaces/hall/hall.interface";
import HallItem from "./HallItem";

const HallList: FC = (): ReactElement => {
  const [halls, setHalls] = useState<IHall[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const getAllHalls = useCallback(async (): Promise<void> => {
    try {
      const response = await hallService.getAllHalls();
      setHalls(response.data.list);
      // console.log("response", response.data.events);
    } catch (error) {
      console.log("error", error);
    }
  }, []);

  const deleteHall = async (hallId: string): Promise<void> => {
    const result = window.confirm("Czy na pewno chcesz usunąć?");
    if (result) {
      try {
        await hallService.deleteHall(hallId);
        // console.log("response", response);
        getAllHalls();
      } catch (error) {
        if (
          axios.isAxiosError<ValidationError, Record<string, unknown>>(error) &&
          error.response
        ) {
          setLoading(false);
          setErrorMessage(error?.response?.data.message as string);
        } else {
          console.error(error);
        }
      }
    }
  };

  useEffect(() => {
    getAllHalls();
  }, [getAllHalls]);

  return (
    <Layout>
      <Container $small>
        <ListStyles>
          {loading ? (
            <Spinner />
          ) : (
            <>
              {errorMessage ? (
                <ErrorMessage>{errorMessage}</ErrorMessage>
              ) : null}
              {halls.map((hall, i) => (
                <HallItem key={i} hall={hall} deleteHall={deleteHall} />
              ))}
            </>
          )}
        </ListStyles>
      </Container>
    </Layout>
  );
};

export default HallList;
