export enum ButtonColor {
  primary = "PRIMARY",
  secondary = "SECONDARY",
  success = "SUCCESS",
  pagination = "PAGINATION",
  active = "ACTIVE",
  disabled = "DISABLED",
}

export type ButtonTypes =
  | ButtonColor.primary
  | ButtonColor.secondary
  | ButtonColor.success
  | ButtonColor.pagination
  | ButtonColor.active
  | ButtonColor.disabled;

export default interface IButton
  extends React.HTMLAttributes<HTMLButtonElement> {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  color?: ButtonTypes;
  disabled?: boolean;
}
