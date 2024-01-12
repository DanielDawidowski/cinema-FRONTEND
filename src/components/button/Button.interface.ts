export enum ButtonColor {
  primary = "PRIMARY",
  success = "SUCCESS",
}

export type ButtonTypes = ButtonColor.primary | ButtonColor.success;

export default interface IButton
  extends React.HTMLAttributes<HTMLButtonElement> {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  color?: ButtonTypes;
  disabled?: boolean;
}
