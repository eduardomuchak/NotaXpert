import { SelectHTMLAttributes } from 'react';

export namespace CustomSelect {
  export interface Options {
    value: string;
    label: string;
  }

  export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    id: string;
    options: Options[];
  }
}
