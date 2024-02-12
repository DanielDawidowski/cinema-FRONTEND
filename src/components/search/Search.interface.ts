import type { Dispatch, SetStateAction } from "react";

export interface ISearchProps {
  openSearch: boolean;
  setOpenSearch: Dispatch<SetStateAction<boolean>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}
