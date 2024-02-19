export enum ButtonColor {
  primary = "PRIMARY",
  success = "SUCCESS",
  pagination = "PAGINATION",
}

export type ButtonTypes =
  | ButtonColor.primary
  | ButtonColor.success
  | ButtonColor.pagination;

export default interface IButton
  extends React.HTMLAttributes<HTMLButtonElement> {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  color?: ButtonTypes;
  disabled?: boolean;
}
