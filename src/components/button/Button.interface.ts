export enum ButtonColor {
  primary = "PRIMARY",
  secondary = "SECONDARY",
  success = "SUCCESS",
  pagination = "PAGINATION",
}

export type ButtonTypes =
  | ButtonColor.primary
  | ButtonColor.secondary
  | ButtonColor.success
  | ButtonColor.pagination;

export default interface IButton
  extends React.HTMLAttributes<HTMLButtonElement> {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  color?: ButtonTypes;
  disabled?: boolean;
}
