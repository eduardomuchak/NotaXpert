import { ButtonHTMLAttributes, ReactNode } from 'react';

export namespace CustomButton {
  export type variant =
    | 'primary'
    | 'secondary'
    | 'small-primary'
    | 'small-secondary';

  export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: string | ReactNode;
    variant: variant;
    icon?: ReactNode;
  }
}
