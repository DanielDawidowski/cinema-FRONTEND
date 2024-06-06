import React, { useState, useEffect, useCallback, useMemo } from "react";
import type { FC, ReactElement } from "react";
import axios from "axios";
import { RxReset } from "react-icons/rx";
import Layout from "../../../../components/layout/Layout";
import { ValidationError } from "../../../../interfaces/error/Error.interface";
import {
  Container,
  ErrorMessage,
  ListStyles,
  ListTable,
  ListTableInner,
  StyledTable,
  StyledTh,
  StyledTr,
} from "../../../../components/layout/globalStyles/global.styles";
import Spinner from "../../../../components/spinner/Spinner";
import { showService } from "../../../../services/api/show/show.service";
import { IShow } from "../../../../interfaces/show/show.interface";
import ShowItem from "./ShowItem";
import { movieService } from "../../../../services/api/movie/movie.service";
import { IMovie } from "../../../../interfaces/movie/movie.interface";
import Select from "../../../../components/select/Select";
import { MovieUtils } from "../../../../utils/movie-utils";
import { cities } from "../../../../interfaces/city/city.interface";
import {
  DisplayError,
  FilterItem,
  Filters,
  FiltersContainer,
} from "../Show.styles";
import Pagination from "../../../../components/pagination/Pagination";

const ShowList: FC = (): ReactElement => {
  const [shows, setShows] = useState<IShow[]>([]);
  const [city, setCity] = useState<string>("");
  const [movieId, setMovieId] = useState<string>("");
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const getAllMovies = useCallback(async (): Promise<void> => {
    try {
      const response = await movieService.getAllMovies();
      setMovies(response.data.list);
      // console.log("response", response.data.events);
    } catch (error) {
      console.log("error", error);
    }
  }, []);

  const filterShows = useCallback(
    async (city: string, movieId: string): Promise<void> => {
      try {
        const response = await showService.filterShows(city, movieId);
        setShows(response.data.list);
        // console.log("response", response.data.events);
      } catch (error) {
        console.log("error", error);
      }
    },
    []
  );

  const deleteShow = async (showId: string): Promise<void> => {
    const result = window.confirm("Czy na pewno chcesz usunąć?");
    if (result) {
      try {
        await showService.deleteShow(showId);
        // console.log("response", response);
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

  const handleCity = (city: string): void => {
    setCity(city);
    setCurrentPage(1);
  };

  const handleMovie = (name: string): void => {
    const movieId = MovieUtils.movieId(movies, name);
    setMovieId(movieId);
    setCurrentPage(1);
  };

  const handleTitle = (_id: string): string => {
    const movieTitle = MovieUtils.movieTitleFromId(movies, _id);
    return movieTitle;
  };

  const clearFilters = (): void => {
    setCity("");
    setMovieId("");
    setCurrentPage(1);
  };

  useEffect(() => {
    getAllMovies();
    console.log("shows", shows);
  }, [getAllMovies, shows]);

  useEffect(() => {
    filterShows(city, movieId);
  }, [filterShows, city, movieId]);

  const headers = ["Image", "Movie", "City", "Hall", "Time", "Actions"];
  const PAGE_SIZE = 10;

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = Math.min(startIndex + PAGE_SIZE, shows.length);

  const currentItems = shows.slice(startIndex, endIndex);
  const sortedShows = useMemo(() => currentItems, [currentItems]);

  return (
    <Layout>
      <Container>
        {loading ? (
          <Spinner />
        ) : (
          <ListStyles>
            <FiltersContainer>
              <DisplayError>
                {errorMessage ? (
                  <ErrorMessage>{errorMessage}</ErrorMessage>
                ) : null}
              </DisplayError>
              <Filters>
                <FilterItem $reset onClick={() => clearFilters()}>
                  <RxReset />
                </FilterItem>
                <FilterItem>
                  <Select
                    label="City"
                    options={cities}
                    selectedOption={city!}
                    onSelect={(option: string) => handleCity(option)}
                  />
                </FilterItem>
                <FilterItem>
                  <Select
                    label="Pick Movie"
                    options={MovieUtils.movieTitles(movies)}
                    selectedOption={handleTitle(movieId)!}
                    onSelect={(option: string) => handleMovie(option)}
                  />
                </FilterItem>
              </Filters>
            </FiltersContainer>
            <Pagination
              total={shows.length}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
            <ListTable>
              <ListTableInner>
                <StyledTable>
                  <thead>
                    <StyledTr>
                      {headers.map((header, index) => (
                        <StyledTh key={index} $img={header === "Image"}>
                          {header}
                        </StyledTh>
                      ))}
                    </StyledTr>
                  </thead>
                  <tbody>
                    {sortedShows.map((show: IShow, i: number) => (
                      <ShowItem key={i} show={show} deleteShow={deleteShow} />
                    ))}
                  </tbody>
                </StyledTable>
              </ListTableInner>
            </ListTable>
            <Pagination
              total={shows.length}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </ListStyles>
        )}
      </Container>
    </Layout>
  );
};

export default ShowList;
