import React, { useCallback, useEffect, useState } from "react";
import type { FC, ReactElement, ChangeEvent } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { ISearchProps } from "./Search.interface";
import {
  Inner,
  SearchContainer,
  SearchList,
  SearchListItem,
} from "./Search.styles";
import Input from "../input/Input";
import { Flex, Grid } from "../layout/globalStyles/global.styles";
import { movieService } from "../../services/api/movie/movie.service";
import { IMovie } from "../../interfaces/movie/movie.interface";
import { Link } from "react-router-dom";

const Search: FC<ISearchProps> = (props): ReactElement | null => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [search, setSearch] = useState<string>("");
  const { openSearch, setOpenSearch } = props;

  const getAllMovies = useCallback(async (): Promise<void> => {
    try {
      const response = await movieService.getAllMovies();
      setMovies(response.data.list);
      // console.log("response", response.data.events);
    } catch (error) {
      console.log("error", error);
    }
  }, []);

  const filteredMovies = movies.filter((movie: IMovie) => {
    if (search === "") {
      return [];
    }
    return movie.name.toLowerCase().includes(search.toLowerCase());
  });

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    if (!openSearch) {
      setSearch("");
    } else {
      setSearch(event.target.value);
    }
  };

  useEffect(() => {
    getAllMovies();
  }, [getAllMovies]);

  return openSearch ? (
    <>
      <SearchContainer>
        <Input
          id="search"
          name="search"
          type="text"
          value={search}
          placeholder="search"
          handleChange={handleSearch}
        />
        <Grid>
          <IoCloseSharp onClick={() => setOpenSearch?.(false)} />
        </Grid>
      </SearchContainer>
      <SearchList>
        <Inner>
          {search.length > 0 && filteredMovies.length !== 0
            ? filteredMovies.slice(0, 5).map((movie: IMovie) => (
                <Link to={`/movie/${movie.name}`} key={movie._id}>
                  <SearchListItem>
                    <img src={movie.img} alt={movie.name} />
                    <div>
                      <h3>{movie.name}</h3>
                    </div>
                  </SearchListItem>
                </Link>
              ))
            : search.length !== 0 && (
                <Flex $align="center" $justify="center">
                  <li>
                    <h3>No movies found</h3>
                  </li>
                </Flex>
              )}
        </Inner>
      </SearchList>
    </>
  ) : null;
};

export default Search;
