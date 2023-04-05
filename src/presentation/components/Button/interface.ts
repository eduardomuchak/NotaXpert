import { ButtonHTMLAttributes } from 'react';

export namespace CustomButton {
  export type variant = 'primary' | 'secondary';

  export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: string;
    variant: variant;
  }
}
