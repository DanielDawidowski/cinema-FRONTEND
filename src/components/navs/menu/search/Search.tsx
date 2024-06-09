import React, { useCallback, useEffect, useState, useRef } from "react";
import type { FC, ReactElement, ChangeEvent } from "react";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { IMovie } from "../../../../interfaces/movie/movie.interface";
import { movieService } from "../../../../services/api/movie/movie.service";
import {
  SearchList,
  SearchStyles,
  SearchListItem,
  SearchContainer,
} from "../Menu.styles";
import Input from "../../../input/Input";
import { Flex } from "../../../layout/globalStyles/global.styles";
import useDetectOutsideClick from "../../../../hooks/useDetectOutsideClick";

const Search: FC = (props): ReactElement | null => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [search, setSearch] = useState<string>("");

  const dropdownRef = useRef<HTMLDivElement>(null);
  const [toggleDropdown, setToggleDropdown] = useDetectOutsideClick(
    dropdownRef,
    false
  );

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
    return movie?.name?.toLowerCase().includes(search.toLowerCase());
  });

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    setToggleDropdown(true);
  };

  useEffect(() => {
    getAllMovies();
  }, [getAllMovies]);

  return (
    <SearchContainer ref={dropdownRef}>
      <SearchStyles>
        <Input
          id="search"
          name="search"
          type="text"
          value={search}
          placeholder="search"
          handleChange={handleSearch}
        />
        <PiMagnifyingGlassBold />
      </SearchStyles>
      <SearchList $open={toggleDropdown && search.length > 0}>
        {toggleDropdown && search.length > 0 && filteredMovies.length !== 0
          ? filteredMovies.slice(0, 5).map((movie: IMovie) => (
              <Link to={`/movie/${movie.name}`} key={movie._id}>
                <SearchListItem>
                  <img src={movie.img} alt={movie.name} />
                  <div>
                    <h5>{movie.name}</h5>
                  </div>
                </SearchListItem>
              </Link>
            ))
          : toggleDropdown &&
            search.length !== 0 && (
              <Flex $align="center" $justify="center">
                <h4> ... No movies found</h4>
              </Flex>
            )}
      </SearchList>
    </SearchContainer>
  );
};

export default Search;
