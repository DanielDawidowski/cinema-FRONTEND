export enum ButtonColor {
  primary = "PRIMARY",
  secondary = "SECONDARY",
}

export type ButtonTypes = ButtonColor.primary | ButtonColor.secondary;

export default interface IButton
  extends React.HTMLAttributes<HTMLButtonElement> {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  color?: ButtonTypes;
  disabled?: boolean;
}
