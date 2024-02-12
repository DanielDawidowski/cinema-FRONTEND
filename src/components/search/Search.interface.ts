import type { Dispatch, SetStateAction } from "react";

export interface ISearchProps {
  openSearch?: boolean;
  setOpenSearch?: Dispatch<SetStateAction<boolean>>;
}
