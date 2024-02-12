import React from "react";
import type { FC, ReactElement, ChangeEvent } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { ISearchProps } from "./Search.interface";
import { SearchContainer } from "./Search.styles";
import Input from "../input/Input";
import { Grid } from "../layout/globalStyles/global.styles";

const Search: FC<ISearchProps> = (props): ReactElement | null => {
  const { openSearch, setOpenSearch, search, setSearch } = props;
  return openSearch ? (
    <SearchContainer>
      <Input
        id="search"
        name="search"
        type="text"
        value={search}
        placeholder="search"
        handleChange={(event: ChangeEvent<HTMLInputElement>) =>
          setSearch(event.target.value)
        }
      />
      <Grid>
        <IoCloseSharp onClick={() => setOpenSearch(false)} />
      </Grid>
    </SearchContainer>
  ) : null;
};

export default Search;
