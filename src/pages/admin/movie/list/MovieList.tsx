import React, { useState, useEffect, useCallback } from "react";
import type { FC, ReactElement, ChangeEvent } from "react";
import axios from "axios";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { movieService } from "../../../../services/api/movie/movie.service";
import Layout from "../../../../components/layout/Layout";
import { ValidationError } from "../../../../interfaces/error/Error.interface";
import { IMovie } from "../../../../interfaces/movie/movie.interface";
import {
  Container,
  ErrorMessage,
  ListStyles,
  ListTable,
  ListTableInner,
  StyledTable,
  StyledTr,
  StyledTh,
  Flex,
} from "../../../../components/layout/globalStyles/global.styles";
import Spinner from "../../../../components/spinner/Spinner";
import MovieItem from "./MovieItem";
import Input from "../../../../components/input/Input";
import { SearchMovies } from "../Movie.styles";

const MovieList: FC = (): ReactElement => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const getAllMovies = useCallback(async (): Promise<void> => {
    try {
      const response = await movieService.getAllMovies();
      setMovies(response.data.list);
      // console.log("response", response.data.events);
    } catch (error) {
      console.log("error", error);
    }
  }, []);

  const deleteMovie = async (movieId: string): Promise<void> => {
    const result = window.confirm("Czy na pewno chcesz usunąć?");
    if (result) {
      try {
        await movieService.deleteMovie(movieId);
        // console.log("response", response);
        getAllMovies();
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

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const filteredMovies = movies.filter((movie: IMovie) => {
    if (search === "") {
      return [];
    }
    return movie.name.toLowerCase().includes(search.toLowerCase());
  });

  useEffect(() => {
    getAllMovies();
  }, [getAllMovies]);

  const headers = ["Image", "Movie", "Actions"];

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
              <SearchMovies>
                <Input
                  id="search"
                  name="search"
                  type="text"
                  value={search}
                  placeholder="search"
                  handleChange={handleSearch}
                />
                <PiMagnifyingGlassBold onClick={() => handleSearch} />
              </SearchMovies>
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
                      {filteredMovies.length !== 0
                        ? filteredMovies.map((movie: IMovie) => (
                            <MovieItem
                              movie={movie}
                              deleteMovie={deleteMovie}
                              search={search}
                            />
                          ))
                        : search.length !== 0 && (
                            <Flex $align="center" $justify="center">
                              <li>
                                <h3>No movies found</h3>
                              </li>
                            </Flex>
                          )}
                    </tbody>
                  </StyledTable>
                </ListTableInner>
              </ListTable>
            </>
          )}
        </ListStyles>
      </Container>
    </Layout>
  );
};

export default MovieList;
