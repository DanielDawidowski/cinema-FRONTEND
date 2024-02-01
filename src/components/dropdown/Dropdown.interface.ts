import { ReactNode } from "react";

export type DropdownProps = {
  label: string;
  children: ReactNode;
  title?: boolean;
};

export interface ItemProps {
  children: ReactNode;
  onClick: () => void;
}

export interface DropdownGenericProps<T> extends DropdownProps {
  items: T[];
  labelExtractor: (item: T) => string;
}
