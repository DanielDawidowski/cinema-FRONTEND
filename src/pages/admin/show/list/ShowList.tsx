import React, { useState, useEffect, useCallback } from "react";
import type { FC, ReactElement } from "react";
import axios from "axios";
import Layout from "../../../../components/layout/Layout";
import { ValidationError } from "../../../../interfaces/error/Error.interface";
import {
  Container,
  ErrorMessage,
  ListStyles,
} from "../../../../components/layout/globalStyles/global.styles";
import Spinner from "../../../../components/spinner/Spinner";
import ShowItem from "./ShowItem";
import { showService } from "../../../../services/api/show/show.service";
import { IShow } from "../../../../interfaces/show/show.interface";

const ShowList: FC = (): ReactElement => {
  const [shows, setShows] = useState<IShow[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const getAllShows = useCallback(async (): Promise<void> => {
    try {
      const response = await showService.getAllShow();
      setShows(response.data.list);
      // console.log("response", response.data.events);
    } catch (error) {
      console.log("error", error);
    }
  }, []);

  const deleteShow = async (showId: string): Promise<void> => {
    const result = window.confirm("Czy na pewno chcesz usunąć?");
    if (result) {
      try {
        await showService.deleteShow(showId);
        // console.log("response", response);
        getAllShows();
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
    getAllShows();
  }, [getAllShows]);

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
              {shows.map((show, i) => (
                <ShowItem key={i} show={show} deleteShow={deleteShow} />
              ))}
            </>
          )}
        </ListStyles>
      </Container>
    </Layout>
  );
};

export default ShowList;
