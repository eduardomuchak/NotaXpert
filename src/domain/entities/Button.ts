export namespace CustomButton {
  export type variant = 'primary' | 'secondary';

  export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: string;
    variant: variant;
  }
}
